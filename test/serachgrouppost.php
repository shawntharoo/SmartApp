<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp";


$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp", $conn);
$a='-1';
$query ='select * from group_post p ,user u where p.userid=u.id and groupid='.$a;
$result = mysql_query($query,$conn);
if (!$result) {
  printf("Error: %s\n", mysql_error($conn)); 
   exit();
    }
if(mysql_num_rows($result) > 0) {
    // output data of each row
    while($row = mysql_fetch_array($result)) {
      //  echo $row["id"]."-";
	  
	   $markers[] = array(
      'id' => $row['groupid'],
       'name' => $row['name'],
       'description' => $row['descriptions'],
       'image' => $row['image'],
       'date' => $row['date'],
       'time' => $row['time'],
    );
}

echo json_encode($markers);
}

?>