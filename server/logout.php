<?php

require_once 'index.php';

//? Logout Existing Account

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	//? Check if the user is logged in before logging out
	if (isset($_SESSION['userId'])) {
		$userId = $_SESSION['userId'];

		//? Destroy Access Token
		$tokenStmt = $connection->prepare('DELETE FROM access_tokens WHERE idusers = ?');
		
		$tokenStmt->bind_param('i', $_SESSION['userId']);
		$tokenStmt->execute();
		
		if ($tokenStmt->affected_rows > 0) {
			//? Destroy and Unset Current Session Id
			session_destroy();
			unset($_SESSION['userId']);
			
			http_response_code(200);
			echo json_encode([
				'message' => 'Logout Successful',
				'authenticated' => false,
				'location' => '/login'
			]);
			
			echo "POST SESSION:  " . $_SESSION['userId'] . "<br/>";
		
			$tokenStmt->close();
			exit();

		} else {
			http_response_code(500);
			echo json_encode(['message' => 'Error while Logging Out']);
			exit();
		}

	} else {
		http_response_code(401);
		echo json_encode(['message' => 'User Not Logged In', "session" => $_SESSION['userId']]);
		exit();
	}
}

// //? Logout Existing Account
// if ($_SERVER['REQUEST_METHOD'] === 'GET') {
// 	//? Check if the user is logged in before logging out
// 	if (isset($_SESSION['userId'])) {
// 		$userId = $_SESSION['userId'];

// 		//? Destroy Access Token
// 		$tokenStmt = $connection->prepare('DELETE FROM access_tokens WHERE idusers = ?');
// 		$tokenStmt->bind_param('i', $userId);
// 		$tokenStmt->execute();

// 		//? Destroy and Unset Current Session Id
// 		session_unset();
// 		session_destroy(); 

// 		http_response_code(200);
// 		echo json_encode([
// 			'message' => 'Logout Successful',
// 			'authenticated' => false,
// 			'location' => '/login'
// 		]);

// 		exit();
// 	} else {
// 		http_response_code(401);
// 		echo json_encode(['message' => 'User Not Logged In']);
// 	}
// }

$connection->close();
