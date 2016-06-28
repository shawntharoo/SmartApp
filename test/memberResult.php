  <?php
header('Access-Control-Allow-Origin:*');

include("dbconnect.php");
$markers = array();
$sql = ' select * from user where request=0';
$result = mysql_query($sql,$con);
$i=0;
while($row=mysqli_fetch_array($result))
{
 
	  $markers[$i] = array(
      'name' => $row['name'],
	  'class' => $row['class'],
      'email' => $row['email'],
      
    );
	$i=$i+1;
	

}


echo json_encode($markers);
?>