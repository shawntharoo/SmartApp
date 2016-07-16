<?php
include('includes/db.php');
session_start();
$Mem_Id = $_SESSION["memberid"];
//Asighn Data to the Variables
if ( isset($_GET['id'])){
  $LinkedId= $_GET['id'];
  $firstName= $_GET['firstName'];
  $lastName= $_GET['lastName'];
  $headline= $_GET['headline'];
  $photo= $_GET['photo'];
  $numConnections= $_GET['numConnections'];
  $query = "INSERT INTO LinkedIn(Mem_Id,LinkedId,firstName,lastName,headline,photo,numConnections)  VALUES ('$Mem_Id','$LinkedId','$firstName','$lastName','$headline','$photo','$numConnections')";
  $result = $mysqli->query($query) or die($mysqli->error . __LINE__);
  $result = $mysqli->affected_rows;
}
?>
