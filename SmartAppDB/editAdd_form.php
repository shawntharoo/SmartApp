<?php

include('includes/db.php');
session_start();

//Asighn Data to the Variables
$id = $_SESSION['AddId'];
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
if ($source != "") {
    $input = $destination;
    $done  = move_uploaded_file($source, $destination);
} else {
    $input = $_SESSION["imagepath"];
}

//Update postadvertiesement table in the Smartapp database
$sql = "UPDATE postadvertiesement set Type='" . $type . "',Title='" . $title . "',Image='" . $input . "',Description='" . $description . "',ContactNo='" . $contact . "',Email='" . $email . "',StartDate='" . $sdate . "',EndDate='" . $edate . "',CDate='" . $today . "' WHERE IDAdd='" . $id . "'";

mysqli_query($mysqli, $sql);

//header('Location: showAdvertiesement.php');
mysqli_close($mysqli);
?>
