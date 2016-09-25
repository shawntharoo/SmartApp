<?php
include('includes/db.php');
//Asighn Data to the Variables
$addID = $_GET['Addid'];

//Dlete Data from postadvertiesement table in the Smartapp database
$query = "DELETE FROM favouriteadd WHERE AddId = '$addID' and MemId = 1";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
$result = $mysqli->affected_rows;

header('Location: repfavAdd.php');
mysqli_close($mysqli);
?>
