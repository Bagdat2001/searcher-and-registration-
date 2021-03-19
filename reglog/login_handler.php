<?php
session_start();
require('connectdb.php');
require('functions.php');

$link = OpenCon();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //something was posted
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $sql = "SELECT * FROM users WHERE email = '$email' && pass='$pass'";
    $query = mysqli_query($link, $sql);

    if (mysqli_num_rows($query) == 0) {
        //This part displays errors if filled data doen't correspond data in the database
        echo "
        <script>
            alert('Email or password is wrong!');
            window.location.assign('login.php');
        </script>
        ";
    } else {
        $row = mysqli_fetch_array($query);
        $user_id = $row['role'];

        $_SESSION['user_id'] =     $user_id; //setting users id to $_SESSION
        $_SESSION['session_id'] = session_id();

        if ($row['role'] == 1) { // this part determines user's role
            $_SESSION['user_role'] = 'admin';
            $_SESSION['email'] = $email;

            header("Location: ../folder/add_product.php"); // if user is admin redirect him to add.product.php 
        } else {
            $_SESSION['user_role'] = 'user';
            header("Location: ../pages/pages/table.html"); // if user is user	redirect him to index.php which is main page 
        }
    }
}
