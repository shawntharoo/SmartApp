<?php
header('Access-Control-Allow-Origin: *');

include("dbconnect.php");


$fol = array();
$i=0;
$sql = ' SELECT followerid FROM followers where ownerid = "'.$_GET['id'].'"  ';
$result=mysqli_query($con,$sql);
if(mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_array($result)) {
	
	$query='select id, name, class, email from user where id = "'.$row[0].'" ';
	$result1=mysqli_query($con,$query);

		while($row2 = mysqli_fetch_array($result1)) {
		$fol[$i] = array( 
			'id' => $row2[0],
			'name' => $row2[1],
			'class' => $row2[2],
			'email' => $row2[3],
			);
			
		}
		$i = $i+1;
		
	}
}

$json_response = json_encode($fol);


echo $json_response;
?>


