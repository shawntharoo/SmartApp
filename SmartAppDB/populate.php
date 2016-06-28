<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
   <link rel="stylesheet" href="css/bootstrap.min.css"></link>
   <link rel="stylesheet" href="css/style.css"></link>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
   <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
   <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>
   <script type="text/javascript">
    function inputalert()
	{
	  alert("Succesfully Exported the Data ");
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
        <li class=" navbar_margin"><a href="index.php">Member Request</a></li>
        <li class=" navbar_margin"><a href="#">Data Insertion</a></li>
           <li class=" navbar_margin"><a href="#">Profile Settings</a></li>
           <li class=" navbar_margin"><a href="committee.php">Committee Members</a></li>
     
      
      </ul>
     
     </div>
     </div>
    </nav>
  
    </div>
  </div>
 
<div class="container" id="body" style="height:465px">
        <div class="row centered-form">
        <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
        	<div class="panel panel-default">
        		<div class="panel-heading">
			    		<h3 class="panel-title">Browse The Excel Sheet here!</h3>
			 			</div>
			 			<div class="panel-body">
			    		<form role="form" action="" method="post" onsubmit="inputalert()">
			    			<div class="row">
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			                <input type="file" name="data" id="data" class="form-control input-sm" placeholder="Excel">
			    					</div>
			    				</div>
			    				
			    			</div>

			    		
			    			
			    			</div>
			    			
			    			<input type="submit" value="ADD" class="btn btn-info btn-block butn">
			    		
			    		</form>
			    	</div>
	    		</div>
    		</div>
    	</div>
    </div>
    </div
    ></body>
    </html>