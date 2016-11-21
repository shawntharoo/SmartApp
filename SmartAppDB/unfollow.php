<?php
include("database_connect.php");

$id = $_GET['id'];

$a='1';

$query ='DELETE FROM group_participants WHERE groupid='.$id.' AND userid='.$a;
$ret = mysqli_query($con,$query);
if ($ret) {
	$unit = true;
    echo "true";
} else {
    echo "false";
}

$query3 ='select * from groups where id='.$_GET['id'];
$result = mysqli_query($con,$query3);

while($row = mysqli_fetch_array($result)) {
$x=$row['num_participants'];
}
$y=$x-1;
$query2 ='UPDATE groups
SET num_participants='.$y.' WHERE id='.$_GET['id'] ;
$ret2 = mysqli_query($con,$query2);
header("location: groupMember.php");



?>