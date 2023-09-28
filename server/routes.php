<?php

$routes = [
    '/login' => '/controllers/login.php',
    '/about' => 'about',
    '/contact' => 'contact',
];

function route($uri, $routes) {
    // Remove the leading slash
    $uri = ltrim($uri, '/');

    // Check if the requested URI exists in the defined routes
    if (array_key_exists($uri, $routes)) {
        $function_name = $routes[$uri];
        if (function_exists($function_name)) {
            // Call the corresponding function
            call_user_func($function_name);
        } else {
            echo "Function not found: $function_name";
        }
    } else {
        echo "Route not found: $uri";
    }
}
