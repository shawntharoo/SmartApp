<?php
header('Access-Control-Allow-Origin:*');
$conn = mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$conn);
$sql = 'insert into user_family(userid,spouse_name,child_name,type,date_of_birth,school_name) values ("'.$_GET['id'].'","null","'.$_GET['cname'].'","c","'.$_GET['dob'].'","'.$_GET['royal'].'")';
$result = mysql_query($sql,$conn);



if($result){
echo "true";
}
else{
echo "false";
}
?>