<?php
header('Access-Control-Allow-Origin:*');
include("dbconnect.php");
$markers = array();
$sql = 'select U.name from user U, eventparticipants P where U.id = P.userId AND P.eventId= "'.$_GET['id'].'" AND P.status="going" ';
$result = mysqli_query($con,$sql);
$i=0;

while($row=mysqli_fetch_array($result))
	{
 
	  	$markers[$i] = array(
	  	'name' => $row[0],
	  	);
		$i=$i+1;
	


	}
	echo json_encode($markers);


?>