<?php
session_start();
include 'conn.php';

if (isset($_POST['register'])) {
    $stdusn = strtoupper(trim($_POST['stdusn']));
    $name = trim($_POST['name']);
    $department = trim($_POST['department']);
    $semester = intval($_POST['semester']);
    $phone = trim($_POST['phone']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Check password match (security check even though JS validates)
    if ($password !== $confirm_password) {
        $_SESSION['error'] = "Passwords do not match";
        header("Location: register.html");
        exit();
    }

    // Check if voter already exists
    $check_sql = "SELECT * FROM voters WHERE stdusn = ?";
    $stmt = $conn->prepare($check_sql);
    $stmt->bind_param("s", $voter);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $_SESSION['error'] = "USN already registered";
        header("Location: register.html");
        exit();
    }

    // Hash password and insert
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $insert_sql = "INSERT INTO voters (stdusn, name, department, semester, phone, password)
                   VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($insert_sql);
    $stmt->bind_param("sssiss", $stdusn, $name, $department, $semester, $phone, $hashed_password);

    if ($stmt->execute()) {
        $_SESSION['success'] = "Registration successful! Please log in.";
        header("Location: index.html");
        exit();
    } else {
        $_SESSION['error'] = "Database error: " . $conn->error;
        header("Location: register.html");
        exit();
    }
} else {
    header("Location: register.html");
    exit();
}
?>
