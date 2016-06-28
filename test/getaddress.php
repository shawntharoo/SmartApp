<?php
header('Access-Control-Allow-Origin:*');

$con= mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$con);
$markers = array();
$sql = ' select * from user where email= "'.$_GET['user'].'" ';
$result = mysql_query($sql,$con);
if($row=mysql_fetch_array($result))
{
 
	   $markers[] = array(
      'address' => $row['address'],
	  'home' => $row['home'],
      'contact_no' => $row['contact_no'],
      
    );
	echo json_encode($markers);

}
else{
echo "false";
}
?>