<?php

function OpenCon()
{
    $user = 'root';
    $pass = '';
    $db = 'finalproject';

    $link = new mysqli('localhost', $user, $pass, $db) or die("Unable to connect");

    return $link;
}

function CloseCon($link)
{
    $link->close();
}
