<?php 
include('../includes/db.php');
$Selected = $_GET['Selected'];
$Title = $_GET['Title'];
$Image = $_GET['Image'];
$Description = $_GET['Description'];
$Contact = $_GET['Contact'];
$Email = $_GET['Email'];
$SDate = $_GET['SDate'];
$EDate = $_GET['EDate'];

$query="INSERT INTO postadvertiesement(Type,Title,Image,Description,ContactNo,Email,StartDate,EndDate)  VALUES ('$Selected','$Title','$Image','$Description','$Contact','$Email','$SDate','$EDate')";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>