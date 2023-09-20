<?php

require_once "./config/database.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

$base_url = '/api/v1';

//? Get Request Method and Path
$request_method = $_SERVER['REQUEST_METHOD'];
$request_path = trim($_SERVER['REQUEST_URI'], '/');

//? Remove Base URL from Request Path
if (strpos($request_path, $base_url) === 0) {
	$request_path = substr($request_path, strlen($base_url));
}

//? Routes
//TODO: define routes


//? Check Request Routes Existence
if (isset($routes[$request_path])) {
	$controller_and_method = explode('@', $routes[$request_path]);
	$controller_name = $controller_and_method[0];
	$method_name = $controller_and_method[1];

	require_once("./controllers/" . $controller_name . ".php");
	$controller = new $controller_name($connection);

	//? Check Controller Method Exists
	if (method_exists($controller, $method_name)) {
		$controller->$method_name();
	} else {
		http_response_code(404);
		echo json_encode(['message' => 'Method Not Found']);
	}

} else {
	http_response_code(404);
	echo json_encode(['message' => 'Route Not Found']);
}

$connection->close();