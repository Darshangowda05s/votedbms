<?php
session_start();
if (!isset($_SESSION['voter'])) {
    header("Location: login.html");
    exit();
}

include 'includes/conn.php';

$voter_id = $_SESSION['voter'];

// Collect votes
$president = $_POST['president'] ?? null;
$vp = $_POST['vicepresident'] ?? null;
$sec = $_POST['secretary'] ?? null;
$tre = $_POST['treasurer'] ?? null;
$ga = $_POST['generalaffairs'] ?? null;

$sql = "INSERT INTO votes (voter_id, president, vicepresident, secretary, treasurer, generalaffairs)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("isssss", $voter_id, $president, $vp, $sec, $tre, $ga);

if ($stmt->execute()) {
    echo "Vote submitted successfully!";
} else {
    echo "Error submitting vote.";
}
