<?php
header('Access-Control-Allow-Origin:*');

$con= mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$con);
$sql = " select role from user where email= "'.$_GET['email'].'" ";
$result = mysql_query($sql,$con);
if($row=mysql_fetch_array($result,$con))
{
echo $row[0];
}
else{
echo "false";
}
?>