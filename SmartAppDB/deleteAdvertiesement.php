  <?php
	include('includes/db.php');
	if(isset($_GET['delete_id']))
		{
 			$sql_query="DELETE FROM postadvertiesement WHERE IDAdd=".$_GET['delete_id'];
 			mysqli_query($mysqli,$sql_query);
 			//header("Location: showAdvertiesement.php");
	
	mysqli_close($mysqli);

}else{
	//header("Location: showAdvertiesement.php");
}
  ?>
