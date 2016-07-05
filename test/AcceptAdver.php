<?php
header('Access-Control-Allow-Origin:*');
include('includes/db.php');
//Asighn Data to the Variables
$SID = $_GET['SID'];

//Select Data from usendadvertiesement table and 
//Insert them to the Pstadvertisement table in the smartap database
$query = "INSERT INTO postadvertiesement (Type, Title, Image, Description, ContactNo, Email, StartDate, EndDate, CDate)
SELECT Selection, title, Image, Description, ContactNo, Email, StartDate, EndDate, sendDate FROM usendadvertiesement  where SID= '$SID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

//Update usendadvertiesement table in the smartapp database
$query1 = "UPDATE usendadvertiesement
SET status= 1 WHERE SID='$SID'";
$result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);

//Select from usendadvertiesement table in the smartapp database
$query2 = "SELECT * FROM usendadvertiesement
WHERE SID='$SID'";
$result2 = $mysqli->query($query2) or die($mysqli->error . __LINE__);
$row2 = mysqli_fetch_array($result2);
$ATitle = $row2['title'];
$MemberID = $row2['MemberId'];
$status = $row2['status'];

//Current Date and Time of the System
$today = date('Y-m-d H:i:s');
//Insert Data to the notification table in the smartap database
$query3 = "INSERT INTO notification(MemberID,ATitle,Notification,ADate,status)  VALUES ('$MemberID','$ATitle','Your Advertisement is Now Available in the System','$today','$status')";
$result3 = $mysqli->query($query3) or die($mysqli->error . __LINE__);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
?>
