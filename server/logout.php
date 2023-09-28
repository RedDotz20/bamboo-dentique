<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

require_once 'index.php';

//? Logout Existing Account
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$json = file_get_contents('php://input');
	$data = json_decode($json, true);

	//? Check if the user is logged in before logging out
	if (isset($data['userId'])) {
		$userId = $data['userId'];

		//? Destroy Access Token
		$tokenStmt = $connection->prepare('DELETE FROM access_tokens WHERE idusers = ?');
		$tokenStmt->bind_param('i', $userId);
		$tokenStmt->execute();

		//? Destroy and Unset Current Session Id
		session_unset();
		session_destroy(); 

		http_response_code(200);
		echo json_encode([
			'message' => 'Logout Successful',
			'authenticated' => false,
			'location' => '/login'
		]);

		// header("location: /login");

		exit();
	} else {
		http_response_code(401);
		echo json_encode(['message' => 'User Not Logged In']);
	}
}

$connection->close();
