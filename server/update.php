<?php

require_once 'index.php';

//? Update Username and/or Password
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);

  //? Extract the current username, current password, new username, and new password from the data
  $idusers = $data['idusers'];

  $current_username = $data['current_username']; //! default (required)
  $new_username = isset($data['new_username']) ? $data['new_username'] : $current_username;

  $current_password = $data['current_password'];
  $new_password = isset($data['new_password']) ? $data['new_password'] : $current_password;

  //? Query the database to fetch the user's hashed password
  $stmt = $connection->prepare("SELECT password FROM users WHERE username = ?");

  if ($stmt === false) {
      http_response_code(500);
      echo json_encode(['message' => 'Database error: Unable to prepare statement']);
      exit();
  }

  $stmt->bind_param('s', $current_username);
  $stmt->execute();
  $stmt->bind_result($current_hashed_password);
  $stmt->fetch();
  $stmt->close();

  //? Check if the current password is correct
  if (password_verify($current_password, $current_hashed_password)) {

      //? Update the username if it is different
      if ($new_username !== $current_username) {
          $update_username_stmt = $connection->prepare("UPDATE users SET username = ? WHERE idusers = ?");

          if ($update_username_stmt === false) {
            http_response_code(500);
            echo json_encode(['message' => 'Database error: Unable to prepare statement']);
            exit();
          }

          $update_username_stmt->bind_param('si', $new_username, $idusers);
          $update_username_result = $update_username_stmt->execute();
          $update_username_stmt->close();

      } else {
          $update_username_result = true;  //? Username is the same, no need to update
      }

      //? Hash the new password if it is different
      if (!password_verify($new_password, $current_hashed_password)) {
          $hashed_new_password = password_hash($new_password, PASSWORD_BCRYPT);

          //? Update the password in the database
          try {
            $update_password_stmt = $connection->prepare("UPDATE users SET password = ? WHERE idusers = ?");

            if ($update_password_stmt === false) {
              http_response_code(500);
              echo json_encode(['message' => 'Database error: Unable to prepare statement']);
              exit();
            }
            
            $update_password_stmt->bind_param('si', $hashed_new_password, $idusers);
            $update_password_result = $update_password_stmt->execute();
            $update_password_stmt->close();

          } catch (\Throwable $th) {
            echo json_encode(['error' => $th]);
          }

      } else {
          $update_password_result = true; //? Password is the same, no need to update
      }

      if ($update_password_result) {
          http_response_code(200);
          echo json_encode(['message' => 'Password Updated successfully']);
      } else if ($update_username_result) {
          http_response_code(200);
          echo json_encode(['message' => 'Username Updated successfully']);
      } else {
          http_response_code(500);
          echo json_encode(['message' => 'Error while updating the username and/or password']);
      }

  } else {
      http_response_code(401);
      echo json_encode(['message' => 'Incorrect current password']);
  }
}

$connection->close();
