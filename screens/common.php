<?php
    $conn = mysqli_connect("localhost", "", "", "tourism") or die(mysqli_error($conn));


    if(!isset($_SESSION)){
        session_start();
    }
?>