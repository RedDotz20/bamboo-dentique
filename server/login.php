<?php

require_once 'index.php';

//? Login Existing Account
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);

	if (isset($data['username']) && isset($data['password'])) {
		$username = $data['username'];
		$password = $data['password'];

		$stmt = $connection->prepare('SELECT * FROM users WHERE username = ?');
		$stmt->bind_param('s', $username);
		$stmt->execute();
		$result = $stmt->get_result();

		if ($result->num_rows === 1) {
			$row = $result->fetch_assoc();
			$userId = $row['idusers'];
			$hashedPassword = $row['password'];

			if (password_verify($password, $hashedPassword)) {
				//? Generate a new access token for the user
				$generatedToken =  bin2hex(random_bytes(16));
				$tokenStmt = $connection->prepare('INSERT INTO access_tokens (idusers, username, access_tokens) VALUES (?, ?, ?)');
				$tokenStmt->bind_param('iss', $userId, $username, $generatedToken);
				$tokenStmt->execute();
				$tokenStmt->close();

				//? Return the generated access token
				$getTokenStmt = $connection->prepare('SELECT * FROM access_tokens WHERE idusers = ?');
				$getTokenStmt->bind_param('i', $userId);
				$getTokenStmt->execute();
				$tokenResult = $getTokenStmt->get_result();

				if ($tokenResult->num_rows === 1) {
					$tokenRow = $tokenResult->fetch_assoc();
					$token = $tokenRow['access_tokens'];

					http_response_code(200);
					echo json_encode([
						'message' => 'Login Successful',
						'userId' => $userId,
						'username' => $username,
						'access_token' => $token,
					]);

					$getTokenStmt->close();
					exit();

				} else {
					http_response_code(404);
					echo json_encode(['error' => 'Access Token Not Found']);
					exit();
				}

			} else {
					http_response_code(401);
					echo json_encode(['error' => 'Invalid Credentials']);
					exit();
			}

		} else {
			http_response_code(404);
			echo json_encode(['error' => 'User Not Found']);
			exit();
		}

	} else {
			http_response_code(400);
			echo json_encode(['error' => 'Missing Username or Password']);
			exit();
	}
}


$connection->close();
