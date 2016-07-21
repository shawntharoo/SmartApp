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
    </script>
    <script type="text/javascript">
      function validateform(){
      
       if (document.form1.title.value == "")
         {
            alert("Please enter the Title");
            document.form1.title.focus();
            return false;
         }
         if (document.form1.contact.value == "")
         {
            alert("Please enter the Conatct No");
            document.form1.contact.focus();
            return false;
         }
           if (document.form1.contact.value.length!=10)
         {
            alert("Contact number should contain 10 digits");
            document.form1.contact.focus();
            return false;
         }
         if (document.form1.email.value == "")
         {
            alert("Please enter the Email");
            document.form1.email.focus();
            return false;
         }
      return true;
      
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
    <body background="images/body.jpg">
      <?php
        if($_GET['Edit_id'])
        {
        $id = $_GET['Edit_id'];
        }
        
        include('includes/db.php');
        session_start();
        if(mysqli_connect_errno()){
        echo "failed to connect to MySQL.".mysqli_connect_error();
        }
        $query = "select * from postadvertiesement where IDAdd='".$id."'";
        $result=mysqli_query($mysqli,$query);
        
        while($row=mysqli_fetch_array($result)){ 
        
        $_SESSION['imagepath'] = $row['Image'];
        $_SESSION['AddId'] = $row['IDAdd'];
        ?>
      <div></div>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <ul class="nav nav-pills nav-stacked">
              <br><br>
              <h3>Menu </h3>
              <br/>
              <div class="toggler" onClick="sideviewmenu.toggle()"></div>
            </ul>
          </div>
          <div class="col-md-6">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title" align="center">Advertiesement Form</h4>
              </div>
              <div class="panel-body">
                <form name="form1"  method="POST" action="editAdd_form.php" onSubmit="return validateform();" enctype="multipart/form-data">
                  <div class="form-group">
                    <label for="fnam">Title</label>
                    <input type="text" class="form-control" name="title" value="<?php echo $row['Title'] ?>">
                  </div>
                  <div class = "form-group">
                    <label for="list">Select the Category</label>
                    <div>
                      <select name="type">
                        <option value="Promote">Promote</option>
                        <option value="Event">Event</option>
                        <option value="Merchent">Merchent</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="addr">Description</label>
                    <textarea class="form-control" name="dis" rows="6"><?php echo $row['Description'] ?></textarea>
                  </div>
                  <div class="form-group">
                    <label for="ima">Upload The Banner</label>
                    <input type="file" name="input"/>
                    <p class="help-block">Make Sure your Banner is With Good Quality</p>
                  </div>
                  <div class="form-group">
                    <label for="fnam">Contact Number</label>
                    <input type="text" class="form-control" name="contact" value="<?php echo $row['ContactNo'] ?>">
                  </div>
                  <div class="form-group">
                    <label for="fnam">Email</label>
                    <input type="text" class="form-control" name="email" value="<?php echo $row['Email'] ?>">
                  </div>
                  <div class="form-group">
                    <label for="fnam">Start Date</label>
                    <input type="date" class="form-control" name="sdate" value="<?php echo date('Y-m-d');?>"/>
                  </div>
                  <div class="form-group">
                    <label for="fnam">End Date</label>
                    <input type="date" class="form-control" name="edate" value="<?php echo date('Y-m-d');?>"/>
                  </div>
                  <button type="submit" class="btn btn-primary" name="btn-signup" value="submit">Post</button>
                </form>
                <?php } ?>
              </div>
            </div>
          </div>
          <div class="col-md-3"><br/></div>
        </div>
      </div>
      <script src="js/jquery.js"></script>
      <script src="js/bootstrap.min.js"></script>
  </body>
</html>