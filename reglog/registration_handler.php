<?php
session_start();
require('connectdb.php');

$link = OpenCon();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //something was posted
    $email = $_POST['email'];
    $password = $_POST['password1'];
    $password2 = $_POST['password2'];

    if (empty($email) && empty($password) && is_numeric($email)) {
        //This part displays errors if no data was filled 
        echo "
        <script>
            alert('Please enter some valid information');
            window.location.assign('registration.php');
        </script>
        ";
    } else {
        //This part displays errors if filled data is too long 
        if (strlen($email) > 50 or strlen($password) > 100) {
            echo "
            <script>
                alert('Some inputs are too long!');
                window.location.assign('registration.php');
            </script>
            ";
        } else {
            if ($password != $password2) {
                echo "
                <script>
                    alert('Passwords are different!');
                    window.location.assign('registration.php');
                </script>
                ";
            } else {
                $sql = "INSERT INTO users(email, pass)
                    VALUES('$email', '$password')";

                mysqli_query($link, $sql);
				
                if (mysqli_error($link)) {
                    echo 'the problem with request ' . mysqli_error($link);
                } else {
                    $id = mysqli_insert_id($link);
                    echo 'the inserted value has id ' . $id;
                }
				
                header("Location: login.php");
                die;
            }
        }
    }
}

CloseCon($link);
