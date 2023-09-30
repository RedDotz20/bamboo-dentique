<?php

require_once 'index.php';

//? Update Username and/or Password
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);

  //? Check if Requried Fields are Set
  if (!isset($data['idusers']) || !isset($data['current_password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing Required Fields']);
    exit();
  }

  $idusers = $data['idusers'];
  $new_username = $data['new_username'] ?? null;
  $current_password = $data['current_password'];
  $new_password = $data['new_password'] ?? null;

  //? Query the database to fetch the user's hashed password
  $stmt = $connection->prepare("SELECT password FROM users WHERE idusers = ?");
  $stmt->bind_param('i', $idusers);
  $stmt->execute();
  $stmt->bind_result($current_hashed_password);
  $stmt->fetch();
  $stmt->close();

  //? Check if the current password is correct
  if (!password_verify($current_password, $current_hashed_password)) {
    http_response_code(401);
    echo json_encode(['error' => 'Incorrect Current Password']);
    exit();
  }

  //? Update the Username if Different
  if (isset($new_username)) {
    $update_username_stmt = $connection->prepare("UPDATE users SET username = ? WHERE idusers = ?");
    $update_username_stmt->bind_param('si', $new_username, $idusers);

    if ($update_username_stmt->execute()) {
      //? Update the username in the access_tokens table
      $update_token_stmt = $connection->prepare("UPDATE access_tokens SET username = ? WHERE idusers = ?");
      $update_token_stmt->bind_param('si', $new_username, $idusers);

      if ($update_token_stmt->execute()) {
        $update_token_stmt->close();
      } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error Updating Token Access Username']);
        exit();
      }
      http_response_code(200);
      echo json_encode(['success' => 'Username updated successfully', 'newUsername' => $new_username]);
      
    } else {
      http_response_code(500);
      echo json_encode(['error' => 'Error updating username']);
    }
    $update_username_stmt->close();
  }

  //? Hash and update the new password if it is different
  if (isset($new_password) && $new_password !== "") {
    $hashed_new_password = password_hash($new_password, PASSWORD_BCRYPT);

    $update_password_stmt = $connection->prepare("UPDATE users SET password = ? WHERE idusers = ?");
    $update_password_stmt->bind_param('si', $hashed_new_password, $idusers);

    if ($update_password_stmt->execute()) {
      http_response_code(200);
      echo json_encode(['success' => 'Password updated successfully']);
    } else {
      http_response_code(500);
      echo json_encode(['error' => 'Error updating password']);
    }

    $update_password_stmt->close();
  } else {
    exit();
  }
}

$connection->close();
