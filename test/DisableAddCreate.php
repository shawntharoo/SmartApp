<?php
include('includes/db.php');

//Asighn Data to the Variables
$CusID  = $_GET['CusID'];

$query="SELECT * FROM disableadd WHERE MemID = '$CusID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);;
$data = mysqli_fetch_array($result, MYSQLI_NUM);
if($data[0] >= 1) {

}else {
  //Insert Data to the businesscard table in the smartapp Database
  $query1 = "INSERT INTO disableadd(MemID)  VALUES ('$CusID')";
  $result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);
  $result1 = $mysqli->affected_rows;
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
?>
