<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp2";
$unit = false;


$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp2", $conn);
$sql ='update user1 set notification=notification+1';
$result = mysql_query($sql);

if ($result) {
	$unit = true;
    echo "true";
} else {
    echo "false";
}

mysql_close($conn);

?>