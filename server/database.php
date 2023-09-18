<?php

// Database connection details
$host = 'localhost';
$database = 'react_php';
$username = 'root';
$password = 'admin';

// Create a database connection
$connection = mysqli_connect($host, $username, $password, $database);

if (!$connection) {
	die('Could not connect to MySQL: ' . mysqli_connect_error());
}

if (mysqli_ping($connection)) {
	echo 'Connection is active.';
} else {
	echo 'Connection is dead.';
}

?>
