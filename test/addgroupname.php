<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp";
$unit = false;


$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp", $conn);
$sql ='SELECT * FROM groups where group_name="'.$_GET['name'].'"';
$result = mysql_query($sql);
if (mysql_num_rows($result) > 0) {
	echo "false";
}
else{
$query ='INSERT INTO groups(group_name,image,category,description,num_participants) VALUES ("'.$_GET['name'].'","'.$_GET['image'].'","'.$_GET['category'].'","'.$_GET['Description'].'","0n")';
$ret = mysql_query($query,$conn);
if ($ret) {
	$unit = true;
    echo "true";
} else {
    echo "false";
}

mysql_close($conn);
}
?>