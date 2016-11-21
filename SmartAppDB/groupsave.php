<?php
include('database_connect.php');

$gname =  $_POST['gname'];


    $sql2="select * from groups where group_name='$gname'";
    $result2=mysqli_query($con,$sql2);
     if (mysqli_num_rows($result2)==0)
     {
     	
		$dis =  $_POST['dis'];
		$list = $_POST['list'];
		$destination="imag/".$_FILES["input"]["name"];
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
$sql="INSERT INTO groups(group_name,image,category,description)
				VALUES ('$gname','$input','$list','$dis')";
$result= mysqli_query($con,$sql);
		if (!$result) {
		printf("Error: %s\n", mysqli_error($con)); 
		exit();
		}
		header("Location: group.php");
    }else{   
      	$Message = urlencode("This name is already available so please add a new name ");
       header("Location:group.php?Message=".$Message);
      die;
}
mysqli_close($con);

?>

