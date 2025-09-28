<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['voter'])) {
    echo json_encode(["error" => "Not logged in"]);
    exit();
}

include 'includes/conn.php';

$voter_id = $_SESSION['voter'];
$sql = "SELECT name, usn FROM voters WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $voter_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(["error" => "User not found"]);
} else {
    echo json_encode($result->fetch_assoc());
}
