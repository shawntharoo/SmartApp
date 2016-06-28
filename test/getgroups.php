<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp";
$unit = false;


$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp", $conn);
$a=$_GET['UID'];
$query ='select * from groups';
$result = mysql_query($query,$conn);
if (mysql_num_rows($result) > 0) {
    // output data of each row
    while($row = mysql_fetch_array($result)) {
      //  echo $row["id"]."-";
	  
	   $markers[] = array(
      'id' => $row['id'],
      'group_name' => $row['group_name'],
      'image' => $row['image']
    );
}

echo json_encode($markers);
}

?>