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
                <li class=" navbar_margin"><a href="repShowBusinessCard.php">View Businesscards</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <center><font size="5px"> Favorite Advertisements </font></center>
    <?php
      include('includes/db.php');

      if(mysqli_connect_errno()){
      echo "failed to connect to MySQL.".mysqli_connect_error();
      }
      $query = "select * from favouriteadd where MemId = 1";
      $result=mysqli_query($mysqli,$query);

      while($row=mysqli_fetch_array($result)){
        ?>

  <div class="row">
    <div class="col-md-1">

    </div>
    <div class="col-md-7">
    <div class="panel panel-info">
      <div class="panel-heading"><?php echo $row['Title']?></div>
      <div class="panel-body">
        <img src="<?php echo $row['Image']?>" height="100px" width="300px" align="middle">
        	  <button class="btn btn-success" onclick="javascript:markNormal(<?php echo $row['AddId']; ?>)">Remove from favorite</button><br/><br/>
        <div>
          <?php echo $row['Description']?>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">

  </div>

</div>
    <?php } ?>
    <!--Delete from Here -->
    <!--Delete To Here -->
    <script type="text/javascript">
      function markNormal(id)
      {
         if(confirm('Are you sure you want To remove from favorite?'))
          {
            window.location.href='FavoriteAddremove.php?Addid='+id;
          }
      }
    </script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
