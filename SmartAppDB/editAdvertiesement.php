
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width-device-width, initial-scale=1.0">
 <!-- <tilte><h4>Register Here</h4></tilte>-->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/ideacss.css" rel="stylesheet">


</head>
<body background="images/body.jpg">
<?php
if($_GET['Edit_id'])
{
$id = $_GET['Edit_id'];
}

include('includes/db.php');
session_start();
if(mysqli_connect_errno()){
echo "failed to connect to MySQL.".mysqli_connect_error();
}
$query = "select * from postadvertiesement where IDAdd='".$id."'";
$result=mysqli_query($mysqli,$query);

while($row=mysqli_fetch_array($result)){ 

$_SESSION['imagepath'] = $row['Image'];
$_SESSION['AddId'] = $row['IDAdd'];
?>

<div>
</div>
<div class="container">
<div class="row">
<div class="col-md-3">
</div>
<div class="col-md-6"><br/>
<div class="panel panel-default">
<div class="panel-heading">
<h4 class="panel-title" align="center">Advertiesement Form</h4>
</div>
<div class="panel-body">
<form name="form1"  method="POST" action="editAdd_form.php" onSubmit="return validateform();" enctype="multipart/form-data">
   <div class="form-group">
    <label for="fnam">Title</label>
    <input type="text" class="form-control" name="title" value="<?php echo $row['Title'] ?>">
  </div>
<div class = "form-group">
 <label for="list">Select the Category</label>
 <div>
<select name="type">
  <option value="Promote">Promote</option>
  <option value="Event">Event</option>
  <option value="Merchent">Merchent</option>
  </select>
</div>
</div>
    <div class="form-group">
    <label for="addr">Description</label>
    <textarea class="form-control" name="dis" rows="6"><?php echo $row['Description'] ?></textarea>
  </div>
  <div class="form-group">
    <label for="ima">Upload The Banner</label>
    <input type="file" name="input"/>
    <p class="help-block">Make Sure your Banner is With Good Quality</p>
  </div>
  <div class="form-group">
    <label for="fnam">Contact Number</label>
    <input type="text" class="form-control" name="contact" value="<?php echo $row['ContactNo'] ?>">
  </div>
  <div class="form-group">
    <label for="fnam">Email</label>
    <input type="text" class="form-control" name="email" value="<?php echo $row['Email'] ?>">
  </div>
  <div class="form-group">
    <label for="fnam">Start Date</label>
    <input type="date" class="form-control" name="sdate" >
  </div>
  <div class="form-group">
    <label for="fnam">End Date</label>
    <input type="date" class="form-control" name="edate" placeholder="End Date">
  </div>
  <button type="submit" class="btn btn-primary" name="btn-signup" value="submit">Post</button>
</form>

<?php } ?>
</div>
</div>
</div>
<div class="col-md-3"><br/>
</div>
</div>
</div>
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>

</html>