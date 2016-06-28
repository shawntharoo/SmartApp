<?php
header('Access-Control-Allow-Origin: *');
$hostname = "localhost";
$username = "root";
$password = "";
$db_name = "smartapp";
$unit = false;

$name = $_GET['name'];

$conn = mysql_connect("localhost", "root", "");
$db = mysql_select_db("smartapp", $conn);

$a=$_GET['UID'];
$b='0xx';
$query ='select * from groups where group_name like "%'.$name.'%" and id <> ALL
(select g.id from groups g,group_participants s 
where s.groupid=g.id and s.userid='.$a.')';
$result = mysql_query($query,$conn);
if (!$result) {
  printf("Error: %s\n", mysql_error($conn)); 
   exit();
    }
if (mysql_num_rows($result) > 0) {

    while($row = mysql_fetch_array($result)) {
     
	  
	   $markers[] = array(
      'id' => $row['id'],
      'xx' => $row['id'],
      'group_name' => $row['group_name'],
       'image' => $row['image']
    );
}

echo json_encode($markers);
}

?>