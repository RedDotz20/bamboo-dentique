<?php

session_start();

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

require_once 'config/database.php';

$connection = new DatabaseConnection();
$connection->connect();

//? Check MySQL Connection
// $connection->ping();