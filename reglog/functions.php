<?php

function check_login($link)
{
    if (isset($_SESSION['id'])) {
        $id = $_SESSION['id'];
        $query = "SELECT * FROM users WHERE id ='$id' limit 1";

        $result = mysqli_query($link, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $user_data = mysqli_fetch_assoc($result);
            return $user_data;
        }
    }
    header('Location: login.php');
    die;
}
