<?php
include('includes/db.php');
//Asighn Data to the Variables
$SID = $_GET['AcceptID'];

//Insert Data to the postadvertiesement table in the smartapp Database
$query = "INSERT INTO postadvertiesement (Type, Title, Image, Description, ContactNo, Email, StartDate, EndDate, CDate)
SELECT Selection, title, Image, Description, ContactNo, Email, StartDate, EndDate, sendDate FROM usendadvertiesement  where SID= '$SID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

//Update usendadvertiesement table in the Smartapp database
$query1 = "UPDATE usendadvertiesement
SET status= 1 WHERE SID='$SID'";
$result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);
header('Location: adminRecievedList.php');
?>
