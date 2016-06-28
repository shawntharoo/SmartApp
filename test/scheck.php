<?php
header('Access-Control-Allow-Origin:*');

$con= mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$con);
$sql = 'select * from user_family where user_id="'.$_GET['id'].'" and spouse_name="'.$_GET['sname'].'"';
$result1 = mysql_query($sql,$con);
if(mysql_num_rows($result1) <= 0){
$sql1 = 'insert into user_family(user_id,spouse_name,child_name,type,date_of_birth,school_name) values ("'.$_GET['id'].'","'.$_GET['sname'].'","null","s","null",0)';
$result = mysql_query($sql1,$con);
}
else{
$sql2 = 'update user_family set spouse_name = "'.$_GET['sname'].'" where user_id="'.$_GET['id'].'"';
$result = mysql_query($sql2,$con);
}
if($result){
echo "true";
}
else{
echo "false";
}
?>