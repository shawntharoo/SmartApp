<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

  <link rel="stylesheet" href="css/bootstrap.min.css"></link>
<!--Closes the new window-->
<script>
 function closeWin() {
 window.opener.location.href = window.opener.location.href;
 if (window.opener.progressWindow) {
    window.opener.progressWindow.close()

  }
window.close();
}
</script>


<title>View LinkedIn Business Card</title>
</head>

<body>
<!-- load the selected submission details to textboxes-->
 <?php
include('includes/db.php');
if(mysqli_connect_errno()){
echo "failed to connect to MySQL.".mysqli_connect_error();
}
if ( isset($_GET['sendId'])){
$sendID = $_GET['sendId'];
echo "<script> window.postid = ".$sendID." </script>";
$result=mysqli_query($mysqli,"Select * from linkedin where Mem_Id='".$sendID."' ");
if (!$result) {?>
The user has no business card to display
<?php } else{
while($row=mysqli_fetch_array($result)){?>
<div class="panel-body">
<form name="form1"  method="POST" action="block.php">
<div class="form-group">
<img src="<?php echo $row['photo']?>" height="100px" width="100px" align="middle">
</div>
<div class="form-group">
<label for="addr">Name</label>
<input type="text" class="form-control" name="post" value="<?php echo $row['firstName'] ." ".$row['lastName'] ?>" disabled >
</div>
<div class="form-group">
<label for="lnam">number of connections</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['numConnections'] ?>" disabled>
</div>
<div class="form-group">
<label for="fnam">Location</label>
<textarea class="form-control" name="faculty" disabled><?php echo $row['location'] ?></textarea>
</div>
<div class="form-group">
<label for="lnam">Work Place</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['industry'] ?>" disabled >
</div>
<div class="form-group">
<label for="lnam">Email</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['emailAddress'] ?>" disabled >
</div>
<div class="form-group">
<label for="lnam">summery</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['summary'] ?>" disabled >
</div>
<div class="form-group">
<label for="lnam">View Profile</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['publicProfileUrl'] ?>" >
</div>
<div class="form-group">
<!--<button type="submit" class="btn btn-danger"  name="confirm">Update</button>-->
<button type="button" class="btn btn-primary" onclick="closeWin()">Cancel </button>
</div>
</form>
<?php }
}
} ?>
</div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>
</body>
</html>
