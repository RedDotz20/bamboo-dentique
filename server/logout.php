<?php

require_once 'index.php';

//? Logout Existing Account
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);

	//? Check if the user is logged in before logging out
	if (isset($data['access_token'])) {
		$check_stmt = $connection->prepare('SELECT * FROM access_tokens where access_tokens = ?');
		$check_stmt->bind_param('s', $data['access_token']);
		$check_stmt->execute();
		$check_stmt_result = $check_stmt->get_result();

		if ($check_stmt_result->num_rows > 0) {
			$tokenRow = $check_stmt_result->fetch_assoc();
			$id = $tokenRow['idusers'];
			
			//? Destroy Access Token (Logout)
			$tokenStmt = $connection->prepare('DELETE FROM access_tokens WHERE idusers = ?');
			$tokenStmt->bind_param('i', $id);
			$tokenStmt->execute();

			$check_stmt->close();

			if ($tokenStmt->affected_rows > 0) {
				$tokenStmt->close();
				http_response_code(200);
				echo json_encode(['success' => 'Logout Successful']);
				exit();
			} else {
				http_response_code(500);
				echo json_encode(['error' => 'Error while Logging Out']);
				exit();
			}

		} else {
			http_response_code(401);
			echo json_encode(['error' => 'Unauthorized: Access Token Not Found']);
			exit();
		}

	} else {
		http_response_code(401);
		echo json_encode(['error' => 'Unauthorized: User Not Logged In']);
		exit();
	}

}

$connection->close();
