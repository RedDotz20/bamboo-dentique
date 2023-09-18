<?php

require_once 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	echo json_encode(['message' => 'Logout successful']);
}

$connection->close();

?>
