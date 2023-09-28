<?php

require_once "index.php";

//? Delete Current Account
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  if (isset($_SESSION["userId"])) {
    //? Destroy Access Token
    $tokenStmt = $connection->prepare('DELETE FROM access_tokens WHERE idusers = ?');
		$tokenStmt->bind_param('i', $_SESSION["userId"]);
		$tokenStmt->execute();
    $tokenStmt->close();

    $stmt = $connection->prepare('DELETE FROM users WHERE idusers = ?');
    $stmt->bind_param('i', $_SESSION["userId"]);
    $stmt->execute();
    
    if ($stmt->affected_rows > 0) {
      $stmt->close();

      session_destroy();
			unset($_SESSION['userId']);
      
      echo "POST SESSION:  " . $_SESSION['userId'] . "<br/>";

      http_response_code(200);
      echo json_encode(['message' => 'Account Successfully Deleted']);
      exit();
    } else {
      http_response_code(404);
      echo json_encode(['message' => 'No Matching Account Found']);
      exit();
    }

  } else {
    http_response_code(400);
    echo json_encode(['message' => 'Missing Username or Password']);
    exit();
  }
}