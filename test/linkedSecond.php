<?php
include('includes/db.php');
//Start the Session
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
  //Select data from the LinkedIn table of the smartapp database
  $check="SELECT * FROM LinkedIn WHERE Mem_Id = '$Mem_Id'";
  $result = $mysqli->query($check) or die($mysqli->error . __LINE__);;
  $data = mysqli_fetch_array($result, MYSQLI_NUM);
  if($data[0] >= 1) {
  	//Update LinkedIn table in the Smartapp database
  	$query = "UPDATE LinkedIn set Mem_Id='" . $Mem_Id . "',LinkedId='" . $LinkedId . "',firstName='" . $firstName . "',lastName='" . $lastName . "',headline='" . $headline . "',photo='" . $photo . "',numConnections='" . $numConnections . "' WHERE Mem_Id='$Mem_Id'";
  	$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
  	$result = $mysqli->affected_rows;
  }
  else{
    //Insert data to the LinkedIn table in the Smartapp database
    $query = "INSERT INTO LinkedIn(Mem_Id,LinkedId,firstName,lastName,headline,photo,numConnections)  VALUES ('$Mem_Id','$LinkedId','$firstName','$lastName','$headline','$photo','$numConnections')";
    $result = $mysqli->query($query) or die($mysqli->error . __LINE__);
    $result = $mysqli->affected_rows;
  }
  echo "<font color=blue  size='5'>Your Details are Successfully Imported </font>";
}else {
  echo "<font color=red  size='5'>Error Occured Improting Data </font>";
}
?>
