<?php
include('includes/db.php');

//Asighn Data to the Variables
$SID = $_GET['RejectID'];

//Update usendadvertiesement table in the Smartapp database
$query1 = "UPDATE usendadvertiesement
SET status= -1 WHERE SID='$SID'";
$result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);
header('Location: adminRecievedList.php');
?>
