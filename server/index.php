<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Credentials: true");

require_once 'config/database.php';

$connection = new DatabaseConnection();
$connection->connect();

//? Check MySQL Connection
// $connection->ping();