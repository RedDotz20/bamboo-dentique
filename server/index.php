<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

require_once 'config/database.php';

$connection = new DatabaseConnection();
$connection->connect();

$routes = [
	'/login' => 'login.php?action=login',
	'/logout' => 'login.php?action=logout',
	'/register' => 'register.php?action=register',
	'/delete' => 'register.php?action=delete',
	'/update' => 'update.php',
];

//? Check MySQL Connection
// $connection->ping();