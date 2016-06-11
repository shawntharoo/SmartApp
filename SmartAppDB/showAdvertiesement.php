<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
   <link rel="stylesheet" href="css/bootstrap.min.css"></link>
   <link rel="stylesheet" href="css/style.css"></link>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
   <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
   <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>
   <script type="text/javascript">
    function inputalert()
  {
    alert("Succesfully Exported the Data ");
  }
   </script>
</head>

<body background="img/body.jpg">
<div class="container-fluid" id="maincontainer">
 <div class="col-md-4 box1">
  <p class="smartappheading">SmartApp</p>


   <p>Admin Panel</p>
 </div>
  <div class="col-md-2">
 </div>
  <div class="col-md-2">
 </div>
  <div class="col-md-2">
 </div>
  <div class="col-md-2">
  <img src="img/oie_trans.gif" width="100" height="150" />
 </div>
 </div>
 <div class="container-fluid" id="middlecontainer">
  <div class="container">
 <div class="col-md-9">
            <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> 
      </button>

    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class=" navbar_margin"><a href="index.php">Member Request</a></li>
        <li class=" navbar_margin"><a href="postAdvertiesement.php">Post Advertisement</a></li>
           <li class=" navbar_margin"><a href="#">Profile Settings</a></li>
           <li class=" navbar_margin"><a href="committee.php">Committee Members</a></li>
     
      
      </ul>
     
     </div>
     </div>
    </nav>
  
    </div>
  </div>
 <br>

<?php
include('includes/db.php');

if(mysqli_connect_errno()){
echo "failed to connect to MySQL.".mysqli_connect_error();
}
$query = "select * from postadvertiesement";
$result=mysqli_query($mysqli,$query);

while($row=mysqli_fetch_array($result)){ 
  ?>

<div class="media">
  <div class="media-left">
    <a href="#">
     <img src="<?php echo $row['Image']?>" height="150px" width="250px" align="middle">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading"><?php echo $row['Title']?></h4>
    <?php echo $row['Description']?>
    <div>
     <button class="btn btn-primary" onclick="javascript:EditPage(<?php echo $row['IDAdd']; ?>)">Edit</button>
     </div>
     <div>
     <br/>
     </div>
       <div>
    <font color='red'> Posted on : <?php echo $row['CDate']?> </font>
    </div>
  </div>
</div>

<?php } ?>


<!--Delete from Here -->
<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="img/1EMAim3uSfm29w35E23g_ldaYK5wTq6GjoEcXZfvg_pizza.jpg" width="250px" height="150px" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">Media heading</h4>
    Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments. The term was first recorded in the 10th century, in a Latin manuscript from Gaeta in Central Italy.[1] The modern pizza was invented in Naples, Italy, and the dish and its variants have since become popular in many areas of the world.[2]
    <div>
     <button type="submit" name="submit" class="btn btn-primary">Edit</button>
     </div>
  </div>
</div>

<div class="media">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="img/1EMAim3uSfm29w35E23g_ldaYK5wTq6GjoEcXZfvg_pizza.jpg" width="250px" height="150px" alt="...">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">Media heading</h4>
    Pizza is a flatbread generally topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments. The term was first recorded in the 10th century, in a Latin manuscript from Gaeta in Central Italy.[1] The modern pizza was invented in Naples, Italy, and the dish and its variants have since become popular in many areas of the world.[2]
    <div>
     <button type="submit" name="submit" class="btn btn-primary">Edit</button>
     </div>
  </div>
</div>
<!--Delete To Here -->


<script type="text/javascript">

function EditPage(id)
{
  window.location.href='editAdvertiesement.php?Edit_id='+id;
}
</script>

<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>