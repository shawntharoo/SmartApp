<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="css/style.css">
    </link>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    </link>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Asul:400,700' rel='stylesheet' type='text/css'>
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
    <script>
      function pop_up(url){
      window.open(url,'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=500,height=500,directories=no,location=no')
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
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <ul class="nav nav-pills nav-stacked">
            <h3>Menu </h3>
            <br/>
            <div class="toggler" onClick="sideviewmenu.toggle()"></div>
          </ul>
        </div>
        <div class="col-md-10">
          <br/>
          <h3>All Pending Advertisements </h3>
          <br/>
          <?php
            include('includes/db.php');

            if(mysqli_connect_errno()){
            echo "failed to connect to MySQL.".mysqli_connect_error();
            }
            $query = "select * from usendadvertiesement where status = 0 GROUP BY SID DESC ";
            $result=mysqli_query($mysqli,$query);
              ?>
          <tr class="info">
            <div class="row">
              <?php while($row=mysqli_fetch_array($result)){ ?>
              <div class="col-xs-6 col-md-10">
                <div class="thumbnail">
                  <div class="caption" style="width:900px">
                    <img src="<?php echo $row['Image']?>" width="750px" height="150px" align="middle"><br/><br/>
                    <p>Title : <?php echo $row['title']; ?></p>
                    <p><a href="ViewAdd.php?sendId=<?= $row['SID'] ?>" onclick="pop_up(this);return false;" class="btn btn-info" role="button">View</a>
                      <button type="button" name="button" class="btn btn-success" onclick="javascript:AcceptAdd(<?php echo $row['SID']; ?>)">Accept</button>
                      <button type="button" name="button" class="btn btn-danger" onclick="javascript:RejectAdd(<?php echo $row['SID']; ?>)">Reject</button>
                    </p>
                  </div>
                </div>
              </div>
              <?php
                }
                ?>
            </div>
            <script type="text/javascript">
              function AcceptAdd(id)
              {
               if(confirm('Accept Advertisement?'))
               {
                window.location.href='AcceptAdd.php?AcceptID='+id;
               }
              }
            </script>
            <!--<button type="button" class="btn btn-primary" onclick="exefunction()"><center>Submit</center></button>-->
        </div>
      </div>
    </div>
    <!-- popup box of delete-->
    <script type="text/javascript">
      function RejectAdd(id)
      {
       if(confirm('Are you sure To Remove This Addvertisement ?'))
       {
        window.location.href='RejectAdd.php?RejectID='+id;
       }
      }
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
  </body>
</html>
