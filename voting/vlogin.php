<?php
session_start();
include 'conn.php'; // your database connection

if(isset($_POST['login'])){
    $voter = $_POST['voter'];
    $password = $_POST['password'];

    // Fetch voter from database
    $sql = "SELECT * FROM voters WHERE voters_id = '$voter'";
    $query = $conn->query($sql);

    if($query->num_rows < 1){
        // Voter ID not found
        $_SESSION['error'] = 'Cannot find voter with the ID';
        header('location: index.html');
        exit();
    } else {
        $row = $query->fetch_assoc();
        if(password_verify($password, $row['password'])){
            // Successful login
            $_SESSION['voter'] = $row['id'];
            header('location: home.php'); // redirect to voter dashboard
            exit();
        } else {
            // Incorrect password
            $_SESSION['error'] = 'Incorrect password';
            header('location: index.html');
            exit();
        }
    }
} else {
    $_SESSION['error'] = 'Please enter your credentials';
    header('location: index.html');
    exit();
}
?>
