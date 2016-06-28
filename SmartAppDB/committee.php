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
        <li class=" navbar_margin"><a href="populate.php">Data Insertion</a></li>
          
           <li class=" navbar_margin"><a href="#">Committee Members</a></li>
             <li class=" navbar_margin"><a href="editprofileapproval.php">View Profile Alteration</a></li>
     
      
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
			    		<h3 class="panel-title"></h3>
			 			</div>
			 			<div class="panel-body">
			    		<form role="form" action="car_action.php" method="post" enctype="multipart/form-data">
			    			    
                                  
                                   
			    				    
			    			<div class="form-group">
                                      
			                       <label for="sel1">Name</label>
                                        <select class="form-control" id="sel1">
                                             <option>Select One</option>
             								 <option>Saman</option>
    										 <option>Kamal</option>
   											
 										 </select>
			    					</div>
			    				
			    			

			    			<div class="form-group">
                            <label for="weight">Position</label>
			    				    <select class="form-control" id="clarity">
                                              <option>Select One</option>
             								 <option>committe member</option>
    										 <option>class representative</option>
   											 <option>president</option>
   											 <option></option>
                                        
 										 </select>
			    			</div>
                            	<div class="form-group">
                                     <label for="weight">Period</label>
			    				    <select class="form-control" id="clarity">
                                              <option>Select One</option>
                                              <option></option> 
             								 <option>2016-2017</option>
    										 <option>2017-2018</option>
   											 <option>2018-2019</option>
   											 <option></option>
                                        
 										 </select>
                               
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