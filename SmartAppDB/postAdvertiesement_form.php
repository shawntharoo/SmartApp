<?php

include('includes/db.php');
$title =  $_POST['title'];
$type = $_POST['type'];
$description =  $_POST['dis'];
$destination="img/".$_FILES["input"]["name"];
$source = $_FILES["input"]["tmp_name"];
$input=$destination;
$done = move_uploaded_file($source,$destination);
  if($done)
   {
	   echo "image Uploaded Successfully";
   }
  else
   {
	  
     	echo "Error in Uploading Image";
   }

//echo $title ."<br/>";

$sql="INSERT INTO 
postadd (title,type,description,image)
VALUES ('$title','$type','$description','$input')";
mysqli_query($mysqli,$sql);

header('Location: showAdvertiesement.php');
mysqli_close($mysqli);
?>