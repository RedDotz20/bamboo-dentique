<?php

require_once 'index.php';

//? Update Username and/or Password
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);

  $idusers = $_SESSION['userId'];
  $new_username = $data['new_username'];
  $current_password = $data['current_password'];
  $new_password = isset($data['new_password']) ? $data['new_password'] : $current_password;

  //? Query the database to fetch the user's hashed password
  $stmt = $connection->prepare("SELECT password FROM users WHERE idusers = ?");
  $stmt->bind_param('i', $idusers);
  $stmt->execute();
  $stmt->bind_result($current_hashed_password);
  $stmt->fetch();
  $stmt->close();

  //? Check if the current password is correct
  if (password_verify($current_password, $current_hashed_password)) {
    
    //? Update the username if it is different
    if ($new_username) {
      $update_username_stmt = $connection->prepare("UPDATE users SET username = ? WHERE idusers = ?");
      $update_username_stmt->bind_param('si', $new_username, $idusers);
      $update_username_result = $update_username_stmt->execute();
      $update_username_stmt->close();
      exit();
    } else {
      $update_username_result = true;  //? Username is the same, no need to update
    }

    //? Hash the new password if it is different
    if (!password_verify($new_password, $current_hashed_password)) {
      $hashed_new_password = password_hash($new_password, PASSWORD_BCRYPT);

      //? Update the password in the database
      $update_password_stmt = $connection->prepare("UPDATE users SET password = ? WHERE idusers = ?");
      $update_password_stmt->bind_param('si', $hashed_new_password, $idusers);
      $update_password_result = $update_password_stmt->execute();
      $update_password_stmt->close();
      exit();

    } else {
      $update_password_result = true; //? Password is the same, no need to update
    }

    if ($update_password_result || $update_username_result) {
      http_response_code(200);
      if ($update_password_result) echo json_encode(['message' => 'Password Updated successfully']);
      if ($update_username_result) echo json_encode(['message' => 'Username Updated successfully']);
      exit();
      
    } else {
      http_response_code(500);
      echo json_encode(['message' => 'Error while Updating the Username and/or Password']);
      exit();
    }

  } else {
    http_response_code(401);
    echo json_encode(['message' => 'Incorrect Current Password and/or Username']);
    exit();
  }
}

$connection->close();
