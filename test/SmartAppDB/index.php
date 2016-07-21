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
  
     function showalert()
  {
    alert("Error in the Removing processes");
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
        <li class=" navbar_margin"><a href="#">Member Request</a></li>
        <li class=" navbar_margin"><a href="populate.php">Data Insertion</a></li>
          
     
        <li class=" navbar_margin"><a href="postAdvertiesement.php">Post Advertisement</a></li>
         <li class=" navbar_margin"><a href="showAdvertiesement.php">Show Advertisement</a></li>
          <li class=" navbar_margin"><a href="editprofileapproval.php">View Profile Alteration</a></li>
      
      </ul>
     
     </div>
     </div>
    </nav>
  
    </div>
    <div class="col-md-2">
    <form role="form" action="" method="post" onsubmit="click()">
     
     <input type="submit" value="Allow Alterations" class="btn-success btn">
    </form>
    </div>

  </div>
  <div class="container">
  <div class="jumbotron viewblock">
   <div class="container">
    <div class="col-md-3">
    <img src="images/boy1.png" class="img img-thumbnail" />
    </div>
    <div class="col-md-6">
    <p>Saman Perera</p>
    <p>Class - 13B</p>
    <p>Saman@gmail.com</p>
     </div>
     <div class="col-md-3 btngroup">
     
      <a class="btn btn-primary">Pending</a>
     <a class="btn btn-danger btn disabled"> Reject </a>
    
     
     </div>
    </div>
  </div>
   <div class="jumbotron viewblock">
   <div class="container">
    <div class="col-md-3">
    <img src="images/boy3.png" class="img img-thumbnail" />
    </div>
    <div class="col-md-6">
    <p>Kamal Peries</p>
    <p>Class - 13B2</p>
    <p>kamal@gmail.com</p>
    </div>
     <div class="col-md-3 btngroup">
     
      <a class="btn btn-primary">Pending</a>
     <a class="btn btn-danger btn disabled"> Reject </a>
    
     
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
    </div>
     <div class="col-md-3 btngroup">
     
      <a class="btn btn-success btn disabled">Approved</a>
     <a class="btn btn-danger btn" onclick="showalert()"> Reject </a>
    
     
     </div>
    </div>
  </div>
  </div>
 </div>
</body>
</html>