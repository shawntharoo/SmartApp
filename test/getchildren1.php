<?php
header('Access-Control-Allow-Origin:*');

$con= mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$con);
$sql = ' select * from user_family where family_id= "'.$_GET['id'].'" and type="c"';
$result = mysql_query($sql,$con);
while($row=mysql_fetch_array($result))
{
 
 
	   $markers[] = array(
      'child_name' => $row['child_name'],
	  'date_of_birth' => $row['date_of_birth'],
	  'school_name' => $row['school_name'],
	  'family_id' => $row['family_id'],
      );
	  
}
echo json_encode($markers);
?>