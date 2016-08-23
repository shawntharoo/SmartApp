<?php
include('includes/db.php');

//Asighn Data to the Variables
$SID = $_GET['RejectID'];

//Update usendadvertiesement table in the Smartapp database
$query1 = "UPDATE usendadvertiesement
SET status= -1 WHERE SID='$SID'";
$result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);

//Select from usendadvertiesement table in the smartapp database
$query1 = "SELECT * FROM usendadvertiesement
WHERE SID='$SID'";
$result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);
$row1 = mysqli_fetch_array($result1);
$ATitle = $row1['title'];
$MemberID = $row1['MemberId'];
$status = $row1['status'];

//Current Date and Time of the System
$today = date('Y-m-d H:i:s');
//Insert Data to the notification table in the smartap database
$query2 = "INSERT INTO notification(MemberID,ATitle,Notification,ADate,status)  VALUES ('$MemberID','$ATitle','Your Advertisement is Rejected by the Admin','$today','$status')";
$result3 = $mysqli->query($query2) or die($mysqli->error . __LINE__);


header('Location: adminRecievedList.php');
?>
