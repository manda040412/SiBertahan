<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        // For preflight requests
        http_response_code(200);
        exit;
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405); // Method Not Allowed
        echo json_encode(["error" => "Only POST method allowed"]);
        exit;
    }

    $ghostBaseUrl = "https://cms.sibertahan.com";

    // Get raw POST data and decode JSON
    $rawBody = file_get_contents('php://input');
    $data = json_decode($rawBody, true);

    if (!isset($data['endpoint'])) {
        http_response_code(400);
        echo json_encode(["error" => "Missing 'endpoint' field in request body"]);
        exit;
    }

    $endpoint = $data['endpoint'];
    $method = isset($data['method']) ? strtoupper($data['method']) : 'GET';
    $params = isset($data['params']) ? $data['params'] : [];
    $headers = isset($data['headers']) ? $data['headers'] : [];

    $ghostQuery = http_build_query($params);
    $ghostApiUrl = $ghostBaseUrl . $endpoint . '?' . $ghostQuery;

    // Optional: log what’s being requested
    file_put_contents('debug_log.txt', print_r($ghostApiUrl, true), FILE_APPEND);

    // Build context with headers
    $opts = [
        "http" => [
            "method" => $method,
            "header" => "Content-Type: application/json\r\n",
        ]
    ];

    if (!empty($headers)) {
        foreach ($headers as $key => $value) {
            $opts['http']['header'] .= "$key: $value\r\n";
        }
    }

    $context = stream_context_create($opts);
    $response = file_get_contents($ghostApiUrl, false, $context);

    file_put_contents('debug_log.txt', print_r($response, true), FILE_APPEND);

    if ($response === false) {
        http_response_code(502);
        echo json_encode(["error" => "Failed to fetch data from Ghost"]);
        exit;
    }

    header("Content-Type: application/json");
    echo $response;
?>
