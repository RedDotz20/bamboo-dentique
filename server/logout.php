<?php

require_once 'index.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	echo json_encode(['message' => 'Logout successful']);
}

$connection->close();

?>
