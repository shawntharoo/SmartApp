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
            $query = "select * from postadvertiesement where status = 1 GROUP BY IDAdd DESC ";
            $result=mysqli_query($mysqli,$query);
              ?>
          <tr class="info">
            <div class="row">
              <?php while($row=mysqli_fetch_array($result)){ ?>
              <div class="col-xs-6 col-md-10">
                <div class="thumbnail">
                  <div class="caption" style="width:900px">
                    <img src="<?php echo $row['Image']?>" width="750px" height="150px" align="middle"><br/><br/>

                            <?php
                            if($row['status'] == 1) {?>
                            	  <button class="btn btn-success" onclick="javascript:markNormal(<?php echo $row['IDAdd']; ?>)">Mark as Normal</button><br/><br/>
                          <?php }
                            else{?>
                                <button class="btn btn-success" onclick="javascript:markSpecial(<?php echo $row['IDAdd']; ?>)">Mark as Special</button><br/><br/>
                            <?php
                            }
                            ?>
                    </p>
                  </div>
                </div>
              </div>
              <?php
                }
                ?>
            </div>
            <!--<button type="button" class="btn btn-primary" onclick="exefunction()"><center>Submit</center></button>-->
        </div>
      </div>
    </div>
    <!-- popup boxes-->
    <script type="text/javascript">
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
    </script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
  </body>
</html>
