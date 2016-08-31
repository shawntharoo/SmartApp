<?php
include('includes/db.php');

//Asighn Data to the Variables
$addID = $_GET['Addid'];

//to check a field is exist with the ID
$check="SELECT status FROM postadvertiesement WHERE IDAdd = '$addID'";
$result = $mysqli->query($check) or die($mysqli->error . __LINE__);
$fav = array();
if ($result->num_rows >0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
      $status = $row["status"];
      if ($status == 0) {
        $fav[0] = 0;
      }elseif ($status == 1) {
        $fav[0] = 1;
      }
  }
}
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

echo $json_response = json_encode($fav[0]);
?>
