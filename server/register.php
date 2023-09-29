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
    $check_stmt = $connection->prepare("SELECT * FROM users WHERE username = ?");

    $check_stmt->bind_param('s', $username);
    $check_stmt->execute();
    $check_stmt->store_result();

    if ($check_stmt->num_rows > 0) {
      http_response_code(409);
      echo json_encode(['message' => 'Account Already Exists']);
      exit();
    }

		//? User does not exist, then Insert New User
    $insert_stmt = $connection->prepare("INSERT INTO users (username, password) VALUES (?, ?)");

    $insert_stmt->bind_param('ss', $username, $hashed_password);
    $result = $insert_stmt->execute();
    
    http_response_code(201);
    echo json_encode(['success' => 'Account Successfully Registered']);
    exit();

  } else {
    http_response_code(500);
    echo json_encode(['error' => 'Error while Registering the Account']);
    exit();
  }

  if ($result) {
    $insert_stmt->close();
	} else {
		http_response_code(400);
		echo json_encode(['error' => 'Missing Username or Password']);
	}
}

$connection->close();
