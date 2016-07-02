<?php
include('includes/db.php');

$MemberId    = $_GET['MemberId'];
$title       = $_GET['title'];
$Selected    = $_GET['Selected'];
$Image       = $_GET['Image'];
$description = $_GET['description'];
$contact     = $_GET['contact'];
$email       = $_GET['email'];
$SDate       = $_GET['SDate'];
$EDate       = $_GET['EDate'];
$today       = date('Y-m-d H:i:s');
$destination = "img/" . $_FILES["Image"]["name"];
$source      = $_FILES["Image"]["tmp_name"];
$Image       = $destination;
$done        = move_uploaded_file($source, $destination);
if ($done) {
    echo "image Uploaded Successfully";
} else {
    
    echo "Error in Uploading Image";
}

$query = "INSERT INTO usendadvertiesement (MemberId,title,Selection,Image,Description,ContactNo,Email,StartDate,EndDate,sendDate)  VALUES ('$MemberId','$title','$Selected','$Image','$description','$contact','$email','$SDate','$EDate','$today')";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>