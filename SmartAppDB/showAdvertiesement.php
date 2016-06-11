<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width-device-width, initial-scale=1.0">
 <!-- <tilte><h4>Register Here</h4></tilte>-->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <style type="text/css"></style>
</head>

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