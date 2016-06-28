<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp";
$unit = false;


$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp", $conn);


$query ='INSERT INTO group_participants(groupid,userid) VALUES ("'.$_GET['id'].'","'.$_GET['UID'].'")';
$ret = mysql_query($query,$conn);
if ($ret) {
	$unit = true;
    echo "true";
} else {
    echo "false";
}

$query3 ='select * from groups where id='.$_GET['id'];
$result = mysql_query($query3,$conn);

while($row = mysql_fetch_array($result)) {
$x=$row['num_participants'];
}
$y=$x+1;
$query2 ='UPDATE groups
SET num_participants='.$y.' WHERE id='.$_GET['id'] ;
$ret2 = mysql_query($query2,$conn);
if ($ret2) {
	$unit = true;
    echo "true";
} else {
    echo "false";
}
mysql_close($conn);

?>