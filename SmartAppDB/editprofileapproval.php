<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SmartApp</title>
  <link rel="stylesheet" href="css/bootstrap.min.css"></link>
   <link rel="stylesheet" href="css/style.css"></link>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
   <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
   <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>
  <script type="text/javascript">
        var on=true;
        var x="Allow Alterations"
      function click()
      {
    alert("p");

    }
    </script>
</head>

<body>
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
  <img src="images/oie_trans.gif" width="100" height="150" />
 </div>
 </div>
 <div class="container-fluid" id="middlecontainer">
  <div class="container">
 <div class="col-md-10">
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
        <li class=" navbar_margin"><a href="populate.php">Data Insertion</a></li>
          
     
        <li class=" navbar_margin"><a href="postAdvertiesement.php">Post Advertisement</a></li>
         <li class=" navbar_margin"><a href="showAdvertiesement.php">Show Advertisement</a></li>
          <li class=" navbar_margin"><a href="#">View Profile Alteration</a></li>
      
      </ul>
     
     </div>
     </div>
    </nav>
  
    </div>
    <div class="col-md-2">
     <button class="btn-success btn" onclick="click()" id="profilesettings" id="altbtn"><script>
document.write(x);
</script></button>
    </div>

  </div>
  <div class="container">
  <?php
   	 include("dbconnect.php");
$sql='select * from useralterations';
$result=mysqli_query($con,$sql);
while($row=mysqli_fetch_array($result))
  {
  $id=$row['uid'];
 
  $sql2="select * from user where id=$id ";
  $result2=mysqli_query($con,$sql2);
  if($row2=mysqli_fetch_array($result2))
  {
   $img=$row2['image'];
  }
  ?>
  <div class="jumbotron viewblock">
   <div class="container">
    <div class="col-md-3">
    <img src=<?= $img ?> class="img img-thumbnail" />
    </div>
    <div class="col-md-6">
    <p><?php echo $row["name"]?></p>

    <p><?php echo $row["email"]?></p>
   
     </div>
     <div class="col-md-3 btngroup">
     <a class="btn btn-success btn" href="allowalter.php?id=<?=$row["uid"]?>&name=<?=$row["name"]?>&email=<?=$row["email"]?>">Approve</a>
     <a class="btn btn-danger btn" href="rejectalter.php?id=<?=$row["uid"]?>"> Reject </a>
     
     </div>
    </div>
  </div>
  <?php
  }
  ?>
   <div class="jumbotron viewblock">
   <div class="container">
    <div class="col-md-3">
    <img src="images/boy3.png" class="img img-thumbnail" />
    </div>
    <div class="col-md-6">
    <p>Kamal Peries</p>
    <p>Class - 13B2</p>
    <p>kamal@gmail.com</p>
    <label>Nickname : </label> : pina
    </div>
     <div class="col-md-3 btngroup">
     
     
     <a class="btn btn-success btn">Approve</a>
    
     
     </div>
    </div>
  </div>
    <div class="jumbotron viewblock">
   <div class="container">
    <div class="col-md-3">
    <img src="images/boy1.png" class="img img-thumbnail" />
    </div>
    <div class="col-md-6">
    <p>Namal mendis</p>
    <p>Class - 13B2</p>
    <p>Namal@gmail.com</p>
    <label>Nickname : </label> : pina
    </div>
     <div class="col-md-3 btngroup">
     
      <a class="btn btn-success btn">Approve</a>
   
    
     
     </div>
    </div>
  </div>
  </div>
 </div>
</body>
</html>