<?php
include('includes/db.php');
$Selected    = $_GET['Selected'];
$Title       = $_GET['Title'];
$Image       = $_GET['Image'];
$Description = $_GET['Description'];
$Contact     = $_GET['Contact'];
$Email       = $_GET['Email'];
$SDate       = $_GET['SDate'];
$EDate       = $_GET['EDate'];

$today = date('Y-m-d H:i:s');

$destination = "img/" . $_FILES["Image"]["name"];
$source      = $_FILES["Image"]["tmp_name"];
$Image       = $destination;
$done        = move_uploaded_file($source, $destination);
if ($done) {
    echo "image Uploaded Successfully";
} else {
    
    echo "Error in Uploading Image";
}

$query = "INSERT INTO postadvertiesement(Type,Title,Image,Description,ContactNo,Email,StartDate,EndDate,CDate)  VALUES ('$Selected','$Title','$Image','$Description','$Contact','$Email','$SDate','$EDate','$today')";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);

$result = $mysqli->affected_rows;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($result);
?>