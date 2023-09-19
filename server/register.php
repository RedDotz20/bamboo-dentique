<?php

require_once 'index.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);

	if (isset($data['username']) && isset($data['password'])) {
		$username = $data['username'];
		$password = $data['password'];

		$stmt = $connection->prepare('INSERT INTO users (username, password) VALUES (?,?);');
		if ($stmt === false) {
			http_response_code(500);
			echo json_encode([
				'message' => 'Database error: Unable to prepare statement',
			]);
			exit();
		}

		$stmt->bind_param('ss', $username, $password);
		$result = $stmt->execute();

		if ($result) {
			http_response_code(201);
			echo json_encode(['message' => 'Account Successfully Registered']);
		} else {
			http_response_code(409);
			echo json_encode(['message' => 'Invalid Account Details']);
		}
		$stmt->close();
	} else {
		http_response_code(400);
		echo json_encode(['message' => 'Missing Username or Password']);
	}
  
} else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);

  if (isset($data['username']) && isset($data['password'])) {
    $username = $data['username'];
    $password = $data['password'];

    $stmt = $connection->prepare('DELETE FROM users WHERE username = ? AND password = ?;');
    if ($stmt === false) {
      http_response_code(500);
      echo json_encode([
        'message' => 'Database error: Unable to prepare statement',
      ]);
      exit();
    }

    $stmt->bind_param('ss', $username, $password);
    $stmt->execute();
    
    if ($stmt->affected_rows > 0) {
      http_response_code(200);
      echo json_encode(['message' => 'Account Successfully Deleted']);
    } else {
      http_response_code(404);
      echo json_encode(['message' => 'No matching account found']);
    }

    $stmt->close();

  } else {
    http_response_code(400);
    echo json_encode(['message' => 'Missing Username or Password']);
  }
}

$connection->close();
