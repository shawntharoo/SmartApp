<?php
header('Access-Control-Allow-Origin:*');

$con= mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$con);
$markers = array();
$sql = ' select * from events';
$result = mysql_query($sql,$con);
$i=0;
while($row=mysql_fetch_array($result))
{
 
	  $markers[$i] = array(
      'name' => $row['eventName'],
	  'date' => $row['date'],
      
      
    );
	$i=$i+1;
	

}


echo json_encode($markers);
?>