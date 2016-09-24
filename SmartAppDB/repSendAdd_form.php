<?php

include('includes/db.php');

//Asighn Data to the Variables
$title       = $_POST['title'];
$type        = $_POST['type'];
$description = $_POST['dis'];
$contact     = $_POST['contact'];
$email       = $_POST['email'];
$sdate       = $_POST['sdate'];
$edate       = $_POST['edate'];
$today = date('Y-m-d H:i:s');
$destination = "img/" . $_FILES["input"]["name"];
$source      = $_FILES["input"]["tmp_name"];
$input       = $destination;
$done        = move_uploaded_file($source, $destination);
if ($done) {
    echo "image Uploaded Successfully";
} else {

    echo "Error in Uploading Image";
}

//Insert Data to the postadvertiesement table in the smartapp Database
$sql = "INSERT INTO usendadvertiesement (MemberId,title,Selection,Image,Description,ContactNo,Email,StartDate,EndDate,sendDate)
VALUES ('1','$title','$type','$input','$description','$contact','$email','$sdate','$edate','$today')";
mysqli_query($mysqli, $sql);

header('Location: showAdvertiesement.php');
mysqli_close($mysqli);
?>
