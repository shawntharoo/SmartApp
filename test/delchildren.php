<?php

header('Access-Control-Allow-Origin:*');
$conn = mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$conn);
$sql = 'delete from user_family where family_id="'.$_GET['id'].'"';
$result = mysql_query($sql,$conn);

if($result){
echo "true";
}
else{
echo "false";
}
?>