<?php
include('includes/db.php');
//Asighn Data to the Variables
$addID = $_GET['Addid'];

//Dlete Data from postadvertiesement table in the Smartapp database
$query = "UPDATE postadvertiesement set status=0 WHERE IDAdd='$addID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = $mysqli->affected_rows;

header('Location: showAdvertiesement.php');
mysqli_close($mysqli);
?>
