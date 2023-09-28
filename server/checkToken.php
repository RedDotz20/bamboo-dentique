<?php

require_once 'index.php';

if($_SERVER['REQUEST_METHOD'] === 'POST') {
  $json = file_get_contents('php://input');
	$data = json_decode($json, true);

  if(isset($data['access_tokens'])) {
    $activeToken = $data['access_tokens'];

    $tokenStmt = $connection->prepare('SELECT * FROM access_tokens WHERE access_tokens = ?');
    $tokenStmt->bind_param('s', $activeToken);
    $tokenStmt->execute();
    $result = $tokenStmt->get_result();

    if($result->num_rows === 1) {
      $row = $result->fetch_assoc();
      $userId = $row['userId'];

      $getUsernameStmt = $connection->prepare('SELECT username FROM users WHERE idusers = ?');
      $getUsernameStmt->bind_param('i', $userId);
      $getUsernameStmt->execute();
      $userResult = $getUsernameStmt->get_result();

      if($userResult->num_rows === 1) {
        $userRow = $userResult->fetch_assoc();
        $username = $userRow['username'];

        http_response_code(200);
        echo json_encode([
          'message' => 'User Authenticated Successfully',
          'userId' => $userId,
          'username' => $username,
          'authenticated' => true
        ]);
      } else {
        http_response_code(404);
        echo json_encode([
          'message' => 'User Not Found',
          'userId' => null,
          'username' => null,
          'authenticated' => false
        ]);
      }

    }
  }

  // if (isset($_SESSION['userId'])) {
  //   //? Session is valid, return success
    
  //   http_response_code(200);
  //   echo json_encode([
  //     'message' => "User Authenticated Successfully",
  //     'userId' => $_SESSION['userId'],
  //     'authenticated' => true
  //   ]);

  // } else {
  //   //? Session is not valid, return failure

  //   http_response_code(401);
  //   echo json_encode([
  //     'message' => "User Not Logged In", 
  //     'userId' => null,
  //     'authenticated' => false
  //   ]);
  // }
}
