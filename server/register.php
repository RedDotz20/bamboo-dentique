<?php

require_once 'index.php';

//? Register New Account
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);

	if (isset($data['username']) && isset($data['password'])) {
		$username = $data['username'];
		$password = $data['password'];
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    //? Check if the user already exists
    // $check_stmt = $connection->prepare("SELECT 1 FROM users WHERE LOWER(username) = LOWER(?)");
    $check_stmt = $connection->prepare("SELECT 1 FROM users WHERE username = ?");

    $check_stmt->bind_param('s', $username);
    $check_stmt->execute();
    $check_stmt->store_result();

    if ($check_stmt->num_rows > 0) {
      http_response_code(409);
      echo json_encode(['message' => 'Account Already Exists']);
      exit();
    }

		//? User does not exist, insert the new user
    $insert_stmt = $connection->prepare("INSERT INTO users (username, password) VALUES (?, ?)");

    $insert_stmt->bind_param('ss', $username, $hashed_password);
    $result = $insert_stmt->execute();

    http_response_code(201);
    echo json_encode(['message' => 'Account Successfully Registered']);
    exit();

  } else {
    http_response_code(500);
    echo json_encode(['message' => 'Error while Registering the Account']);
    exit();
  }

  if ($result) {
    $insert_stmt->close();
	} else {
		http_response_code(400);
		echo json_encode(['message' => 'Missing Username or Password']);
	}
}

//? Delete Current Account
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  if (isset($_SESSION["userId"])) {
    //? Destroy Access Token
    $tokenStmt = $connection->prepare('DELETE FROM access_tokens WHERE idusers = ?');
		$tokenStmt->bind_param('i', $_SESSION["userId"]);
		$tokenStmt->execute();

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

$connection->close();
