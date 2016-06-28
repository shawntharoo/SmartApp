<?php

header('Access-Control-Allow-Origin:*');
$conn = mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$conn);
$sql = 'update user_family set child_name="'.$_GET['cname'].'",date_of_birth = "'.$_GET['dob'].'",school_name = "'.$_GET['royal'].'"  where family_id="'.$_GET['id'].'"';
$result = mysql_query($sql,$conn);

if($result){
echo "true";
}
else{
echo "false";
}
?>