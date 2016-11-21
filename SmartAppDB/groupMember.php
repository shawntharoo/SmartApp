

<?php

 $b = 1;

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SmartApp</title>
  <link rel="stylesheet" href="css/bootstrap.min.css"></link>
  
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
   <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
   <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>

<link rel="stylesheet" href="css/newstyle.css"></link>
   <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="http://cdn.jsdelivr.net/animatecss/2.1.0/animate.min.css">

 <style>
body, html {
    height: 100%;
    background-image:url(imag/flag.jpg);
    background-repeat: no-repeat;
    background-size: cover; 
    background-attachment: fixed;
    background-position: center;
    
}

  .c2{

background-color: #D6EAF8;

  }

.floating-box {
    display: inline-block;
    width: 150px;
    height: 75px;
    margin: 50px;
 
}
</style>

    <?php
include('header.php');
?>

</head>
<body>


  <div class="c2"  style="padding: 10px;background-color: #999999;opacity: 0.98;margin-left: 100px;margin-right: 100px;min-height: 70%">
      <div class="container">
                          
                          <?php
                              include("database_connect.php");

                              if(mysqli_connect_errno()){
                              echo "failed to connect to MySQL.".mysqli_connect_error();
                              }
                              $query = "select * from groups g,group_participants s where s.groupid=g.id and s.userid=".$b;
                              $result=mysqli_query($con,$query);
                               while($row = mysqli_fetch_array($result))//retrieve data one by one
                                  {
                                  
                              ?> 
                              <div class="floating-box">
                                  <div class="animated rotateInDownRight"> 
                                        <a href="subgroup.php?gid=<?=$row["id"]?>">
                                        <img src="<?php echo $row['image']; ?>" alt="javascript button" class="img-circle" alt="Cinque Terre" width="120" height="120" /></a>
                                        <h2 style="text-align: center"><?php echo $row['group_name']; ?><span></h2>
                                        <h5 style="text-align: center"><?php echo $row['category']; ?> </h5>
                                                                            
                                 </div>
        
                              </div>
                         <?php } ?>   
                         <p style="margin-top: 30px"> </p>  
         </div>
     
  </div>




<!--<div style="height:10px;background-color:red">
<section>
  <img class="mySlides" src="imag/bday2.png" style="width:100%">
  <img class="mySlides" src="imag/ad1.png" style="width:100%">
  <img class="mySlides" src="imag/ad2.png" style="width:100%">
</section>

<script type="text/javascript">
  var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

</script>
</div>
-->

</body>
<div style="background-color: black">
<footer>
<div class="footer" style="padding-top: 25px">
    
  <div class="container-fluid" id="maincontainer">
        <div class="col-md-4 box1">
             <p class="smartappheading" style="color: white">SmartApp</p>

                <p style="color: white">Admin Panel</p>
         </div>
 </div>

</footer>
</div>
</html>