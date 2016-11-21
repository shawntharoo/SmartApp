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
   <script>
      function check()
   {
    ok=true;
    var p = document.forms["comadd"]["position"].value;
      var q = document.forms["comadd"]["period"].value;

 
    if (p =="SelectOne" ||q=="SelectOne")
	{
        alert("please fill the all fields");
       ok = false;
    }
	else
	{
	 ok = true;
	}

	return ok;
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
			    		<form role="form" name="comadd" action="committee_action.php" method="post" onsubmit="return check()">
			    			    
                                  
                                   
			    				    
			    			<div class="form-group">
                                      
			                       <label for="uname">User Name</label>
                           
							        <select class="form-control" id="uname" name="uname">

                                <?php 
                                 include("dbconnect.php");
								 $sql= "SELECT email FROM user";
								 $result=mysqli_query($con,$sql);
                               while($row = mysqli_fetch_array($result))
                             {
                               echo "<option >" . $row['email'] . "</option>";
                                }
                                 ?>
                           </select>
			    					</div>
			    				
			    			

			    			<div class="form-group">
                            <label for="weight">Position</label>
			    				    <select class="form-control" id="position" name="position">
                                              <option>SelectOne</option>
             								 <option>committe member</option>
    										 <option>class representative</option>
											 <option>member</option>
											 <option>admin</option>
   											 <option>president</option>
   											
                                        
 										 </select>
			    			</div>
                            	<div class="form-group">
                                     <label for="weight">Period</label>
			    				    <select class="form-control" id="period" name="period">
                                              <option>SelectOne</option>
                                             <option>2016-2017</option>
    										 <option>2017-2018</option>
   											 <option>2018-2019</option>
             								
   											
                                        
 										 </select>
                               
			    			</div>
							  
			    		<input type="submit" name="add" id="add" value="ADD" class="btn btn-info btn-block butnadd">
						<input type="submit" name="update" id="update" value="UPDATE" class="btn btn-info btn-block butn">
						<input type="submit" name="delete" id="delete" value="DELETE" class="btn btn-info btn-block butndel">
			    		</form>
			    	</div>
	    		</div>
    		</div>
    	</div>
    </div>
    </div
    ></body>
    </html>