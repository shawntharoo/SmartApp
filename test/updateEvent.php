<?php
header('Access-Control-Allow-Origin:*');
include("dbconnect.php");

$sql = 'update events set eventName= "'.$_GET['title'].'" , date= "'.$_GET['date'].'" , start_time= "'.$_GET['stime'].'" , end_time= "'.$_GET['etime'].'" , duration= "'.$_GET['duration'].'" ,
  venue= "'.$_GET['location'].'" , organizerId= "'.$_GET['cohost'].'" , description="'.$_GET['desc'].'" where id=  "'.$_GET['id'].'" ';
$result = mysqli_query($con,$sql);

if($result){
	echo "true";
}
else{
	echo "false";
}

?>
