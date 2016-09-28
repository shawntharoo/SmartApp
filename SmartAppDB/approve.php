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


<title>View Customized Business Card</title>
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
$result=mysqli_query($mysqli,"Select * from buissnescard where ID='".$sendID."' ");
if (!$result) {?>
  The user has no business card to display
<?php } else{
while($row=mysqli_fetch_array($result)){?>
<div class="panel-body">
<form name="form1"  method="POST" action="block.php">
<div class="form-group">
<label for="addr">Profession</label>
<input type="text" class="form-control" name="post" value="<?php echo $row['Profession']?>" disabled >
</div>
<div class="form-group">
<label for="lnam">Skills</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['Skills'] ?>" disabled>
</div>
<div class="form-group">
<label for="fnam">Awards</label>
<textarea class="form-control" name="faculty" disabled><?php echo $row['Awards'] ?></textarea>
</div>
<div class="form-group">
<label for="lnam">Work Place</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['WorkPlace'] ?>" disabled >
</div>
<div class="form-group">
<label for="lnam">Work Place Address</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['Address'] ?>" disabled >
</div>
<div class="form-group">
<label for="lnam">Work Place Contact</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['Contact'] ?>" disabled >
</div>
<div class="form-group">
<label for="lnam">Email</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['Email'] ?>" disabled >
</div>
<div class="form-group">
<label for="lnam">Work Hours</label>
<input type="text" class="form-control" name="department" value="<?php echo $row['WorkHour'] ?>" disabled >
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
