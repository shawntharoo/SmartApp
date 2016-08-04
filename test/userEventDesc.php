<?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");
$markers = array();
$sql = ' select * from events E, groups G, eventParticipants P 
		where E.organizerId = G.id AND E.id = P.eventId AND E.id = "'.$_GET['id'].'" AND P.userId = "'.$_GET['uid'].'" ';
$result = mysqli_query($con,$sql);
$i=0;

	while($row=mysqli_fetch_array($result))
	{
 
	  	$markers[$i] = array(
	  	'id' => $row['id'],
      	'name' => $row['eventName'],
	  	'date' => $row['date'],
	  	'venue' => $row['venue'],
      	'start_time' => $row['start_time'],
      	'end_time' => $row['end_time'],
      	'duration' => $row['duration'],
      	'organizer' => $row['group_name'],
      	'description' => $row['description'],
      	'status' => $row['status']
    	);
		$i=$i+1;
	


	}
	echo json_encode($markers);


?>