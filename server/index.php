<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

//? Database connection details
$host = 'localhost';
$database = 'react_php';
$username = 'root';
$password = 'admin';

//? Create a database connection
$connection = mysqli_connect($host, $username, $password, $database);

if (!$connection) {
	die('Couldn\'t connect to MySQL: ' . mysqli_connect_error());
}

$routes = [
	'/login' => 'login.php?action=login',
	'/logout' => 'login.php?action=logout',
	'/register' => 'register.php?action=register',
	'/delete' => 'register.php?action=delete',
	'/update' => 'update.php',
];

//? Check MySQL Connection
// if (mysqli_ping($connection)) {
// 	echo 'Connection is active.';
// } else {
// 	echo 'Connection is dead.';
// }
