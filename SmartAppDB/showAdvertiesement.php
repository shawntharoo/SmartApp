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
      <center><font size="5px"> When the lock is enabled members will not be able to disable special advertisements </font></center><br/>
    <?php
      include('includes/db.php');
      if(mysqli_connect_errno()) {
      echo "failed to connect to MySQL.".mysqli_connect_error();
      }else {
      $query1 = "select Admin from disableadd";
      $result1=mysqli_query($mysqli,$query1);
      while($row=mysqli_fetch_array($result1)){
        $check = $row['Admin'];
        if ($check == -1) { ?>
          <p align="center">
            <font size="3px">Lock is enabled, Disable the Lock</font>
            <button class="btn btn-success" onclick="javascript:LockAdd(1)"> Disable Lock</button></p><br/><br/>
            <?php }else {?>
              <p align="center">
              <font size="3px"> Lock is disabled, Enable the Lock</font>
              <button class="btn btn-success" onclick="javascript:LockAdd(-1)"> Enable Lock</button></p><br/><br/>
              <?php }
        break;
      }
    }?>


    <center><font size="5px"> Currently Available Advertisements </font></center>
    <?php
      include('includes/db.php');

      if(mysqli_connect_errno()){
      echo "failed to connect to MySQL.".mysqli_connect_error();
      }
      $query = "select * from postadvertiesement GROUP BY IDAdd DESC";
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
        <a href="showAdd.php?sendId=<?= $row['IDAdd'] ?>" onclick="pop_up(this);return false;" class="btn btn-info" role="button">View</a>
        <button class="btn btn-warning" onclick="javascript:EditPage(<?php echo $row['IDAdd']; ?>)">Edit</button>
        <button class="btn btn-danger" onclick="javascript:DeletePage(<?php echo $row['IDAdd']; ?>)">Delete</button>

        <?php
        if($row['status'] == 1) {?>
        	  <button class="btn btn-success" onclick="javascript:markNormal(<?php echo $row['IDAdd']; ?>)">Mark as Normal</button><br/><br/>
      <?php }
        else{?>
            <button class="btn btn-success" onclick="javascript:markSpecial(<?php echo $row['IDAdd']; ?>)">Mark as Special</button><br/><br/>
        <?php
        }
        ?>
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
      function EditPage(id)
      {
        window.location.href='editAdvertiesement.php?Edit_id='+id;
      }

      function DeletePage(id)
      {
         if(confirm('Are you sure you want To Remove This Badge?'))
          {
            window.location.href='deleteAdvertiesement.php?delete_id='+id;
          }
      }

      function markSpecial(id)
      {
         if(confirm('Are you sure you want To Mark This special?'))
          {
            window.location.href='MarkSpecial.php?Addid='+id;
          }
      }

      function markNormal(id)
      {
         if(confirm('Are you sure you want To remove from special?'))
          {
            window.location.href='MarkNormal.php?Addid='+id;
          }
      }

      function LockAdd(id)
      {
         if(confirm('Are you sure you want To apply the changes?'))
          {
            window.location.href='LockAdvertisement.php?addStatus1='+id;
          }
      }
    </script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
