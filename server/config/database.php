<?php

//? Database connection details
$DB_HOST = 'localhost';
$DB_USERNAME = 'root';
$DB_NAME = 'react_php';
$DB_PASSWORD = 'admin';

//? Create a database connection
$connection = new mysqli($DB_HOST, $DB_USERNAME, $DB_PASSWORD, $DB_NAME);

if ($connection->connect_error) {
	die('Database Connection Failed: ' . mysqli_connect_error());
}

//? optional
// $connection->set_charset('utf8mb4');

// if (mysqli_ping($connection)) {
// 	echo 'Connection is active.';
// } else {
// 	echo 'Connection is dead.';
// }