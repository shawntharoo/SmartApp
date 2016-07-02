<?php

include('includes/db.php');
$SID = $_GET['RejectID'];

$query1 = "UPDATE usendadvertiesement
SET status= -1 WHERE SID='$SID'";
$result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);
header('Location: adminRecievedList.php');
?>


