<?php
$data = json_decode(file_get_contents("php://input"));
$title= mysql_real_escape_string($data->title);
$email= mysql_real_escape_string($data->email);

mysql_connect("localhost","root","") or die(mysql_error());
mysql_select_db("smartapp") or die(mysql_error());
mysql_query("INSERT INTO advertiesement (title,email)VALUES('$title','$email')");
?>