<?php
session_start(); 
if(isset($_SESSION))
{
    unset($_SESSION['userID']); //unset the user id variable

session_destroy();
header('Location:login.php');
}

?>