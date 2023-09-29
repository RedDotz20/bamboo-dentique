<?php

require_once "index.php";

$url = $_SERVER['REQUEST_URI'];

//? Delete Current Account
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  //? Get Query Params
  $query_str = parse_url($url, PHP_URL_QUERY);
  parse_str($query_str, $query_params);
  
  //? Check if 'usersid' is set in the query parameters
  if (isset($query_params['usersid'])) {
    $query_id = $query_params['usersid'];

    //? Destroy Access Token
    $tokenStmt = $connection->prepare('DELETE FROM access_tokens WHERE idusers = ?');
    $tokenStmt->bind_param('i', $query_id);
    $tokenStmt->execute();

    //? Delete User Account
    $stmt = $connection->prepare('DELETE FROM users WHERE idusers = ?');
    $stmt->bind_param('i', $query_id);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
      http_response_code(200);
      echo json_encode(['success' => 'Account Successfully Deleted']);
      $stmt->close();
      exit();
    } else {
      http_response_code(404);
      echo json_encode(['error' => 'No Matching Account Found']);
      exit();
    }
    
  } else {
    http_response_code(404);
    echo json_encode(['error' => 'Invalid Query']);
    exit();
  }
}

$connection->close();
