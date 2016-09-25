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
    <script type="text/javascript">
      function validateform(){

       if (document.form1.title.value == "")
         {
            alert("Please enter the Title");
            document.form1.title.focus();
            return false;
         }
          if (document.form1.input.value == "")
         {
            alert("Please upload the Banner");
            document.form1.input.focus();
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
                <li class=" navbar_margin"><a href="repShowBusinessCard.php">View Businesscards</a></li>
                <li class=" navbar_margin"><a href="repFavAdd.php">View FavoriteAdd</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-5">
          <div>
            <br/><br><br>
          </div>
          <div class="jumbotron">
            <h2>Send Advertiesements</h2>
            <br/>
            <p><a class="btn btn-primary btn-lg" href="showAdvertiesement.php" role="button">Show Advertiesements</a></p>
            <img src="img/sendAdd.jpg" class="img-responsive" alt="">
          </div>
        </div>
        <div class="col-md-6">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title" align="center">Send Advertisement Form</h4>
            </div>
            <div class="panel-body">
              <form name="form1"  method="POST" action="repSendAdd_form.php" onSubmit="return validateform();" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="fnam">Title</label>
                  <input type="text" class="form-control" name="title" placeholder="Title of the Advertiesement">
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
                  <textarea class="form-control" name="dis" placeholder="Enter A Brief Description about the adveretiesement" rows="6"></textarea>
                </div>
                <div class="form-group">
                  <label for="ima">Upload The Banner</label>
                  <input type="file" name="input"/>
                  <p class="help-block">Make Sure your Banner is With Good Quality</p>
                </div>
                <div class="form-group">
                  <label for="fnam">Contact Number</label>
                  <input type="text" class="form-control" name="contact" placeholder="Conatct Details related to Advertisement">
                </div>
                <div class="form-group">
                  <label for="fnam">Email</label>
                  <input type="text" class="form-control" name="email" placeholder="Email related to Advertisement">
                </div>
                <div class="form-group">
                  <label for="fnam">Start Date</label>
                  <input type="date" class="form-control" name="sdate" value="<?php echo date('Y-m-d');?>"/>
                </div>
                <div class="form-group">
                  <label for="fnam">End Date</label>
                  <input type="date" class="form-control" name="edate" placeholder="End Date" value="<?php echo date('Y-m-d');?>"/>
                </div>
                <button type="submit" class="btn btn-info btn-block butn" name="btn-signup" value="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
