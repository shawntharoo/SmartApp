  <?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");
$markers = array();
$sql = ' select * from user where request=0 and role="member" order by requestdate desc ';
$result = mysqli_query($con,$sql);
$i=0;
while($row=mysqli_fetch_array($result))
{
 
	  $markers[$i] = array(
      'name' => $row['name'],
	  'class' => $row['class'],
      'email' => $row['email'],
      'id' => $row['id'],
    );
	$i=$i+1;
	

}


echo json_encode($markers);
?>