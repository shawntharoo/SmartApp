<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Untitled Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    </link>
    <link rel="stylesheet" href="css/style.css">
    </link>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <link type="text/css" rel="stylesheet" href="sideviewmenu.css" />
    <script src="sideviewmenu.js"></script>
    <script>
      jQuery(function(){ // on DOM Load
        sideviewmenu({ // call sideviewmenu() function
          menuid: 'sideviewmenu',
          onopenclose:function(state){ // state is either "open" or "closed"
            // custom code
          }
        })
      })

      jQuery(function(){ // on DOM Load
        sideviewmenu() // call sideviewmenu() function
      })
</script>
    <script type="text/javascript">
      function inputalert()
      {
      alert("Succesfully Exported the Data ");
      }
    </script>
    <script>
      function pop_up(url){
      window.open(url,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=400,height=500,directories=no,location=no')
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
                <li class="toggler" onClick="sideviewmenu.toggle()"></li>
                <li class=" navbar_margin"><a href="repSendAdd.php">Send Advertisement</a></li>
                <li class=" navbar_margin"><a href="repFavAdd.php">View FavoriteAdd</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
<div class="row">
<div class="col-md-12">
<br/>
<h3>Business Cards of Users </h3>
<br/>
<?php
include("database_connect.php");

if(mysqli_connect_errno()){
echo "failed to connect to MySQL.".mysqli_connect_error();
}
$query = "select * from user where request='1' ";
$result=mysqli_query($con,$query);
?>

<div class="row">
<?php while($row=mysqli_fetch_array($result)){ ?>
  <div class="col-xs-6 col-md-3">
    <div class="thumbnail" style="background: white">
      <div class="caption">
        <h3><?php echo $row['name']; ?></h3>
		    <p>Email         : <?php echo $row['email']; ?></p>
        <p><a href="approve.php?sendId=<?= $row['id'] ?>" onclick="pop_up(this);return false;" class="btn btn-info" role="button">Customized BusinessCard</a><br/>
        <p><a href="approveL.php?sendId=<?= $row['id'] ?>" onclick="pop_up(this);return false;" class="btn btn-primary" role="button">LinkedIn Business Card</a><br/>
        <p><a href="approveF.php?sendId=<?= $row['id'] ?>" onclick="pop_up(this);return false;" class="btn btn-primary" role="button">Facebook Business Card</a><br/>
      </div>
    </div>
  </div>
  <?php
}
?>
</div>
</div>
</div>
</div>
</div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
</body>
</html>
