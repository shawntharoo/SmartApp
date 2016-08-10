<?php
include('includes/db.php');
//Start the Session
session_start();
$Mem_Id = $_SESSION["memberid"];
//Asighn Data to the Variables
if ( isset($_GET['id'])){
  $fbId= $_GET['id'];
  $Name= $_GET['name'];
  $picture= $_COOKIE["picture"];
  $gender= $_GET['gender'];
  $email= $_GET['email'];
  $age= $_GET['age'];
  $link= $_GET['link'];
  //Select data from the LinkedIn table of the smartapp database
  $check="SELECT * FROM facebookprof WHERE Mem_Id = '$Mem_Id'";
  $result = $mysqli->query($check) or die($mysqli->error . __LINE__);;
  $data = mysqli_fetch_array($result, MYSQLI_NUM);
  if($data[0] >= 1) {
  	//Update LinkedIn table in the Smartapp database
  	$query = "UPDATE facebookprof set Mem_Id='" . $Mem_Id . "',FBId='" . $fbId . "',Name='" . $Name . "'
    ,Picture='" . $picture . "',Gender='" . $gender . "',Email='" . $email . "',Age='" . $age . "'
    ,Link='" . $link . "' WHERE Mem_Id='$Mem_Id'";
  	$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
  	$result = $mysqli->affected_rows;
  }
  else{
    //Insert data to the LinkedIn table in the Smartapp database
    $query = "INSERT INTO facebookprof(Mem_Id,FBId,Name,Picture,Gender,Email,Age,Link)
    VALUES ('$Mem_Id','$fbId','$Name','$picture','$gender','$email','$age','$link')";
    $result = $mysqli->query($query) or die($mysqli->error . __LINE__);
    $result = $mysqli->affected_rows;
  }
  echo "<font color=blue  size='5'>Your Details are Successfully Imported </font>";
}else {
  echo "<font color=red  size='5'>Error Occured Improting Data </font>";
}
?>
