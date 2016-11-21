<?php
$db_host = 'localhost';
$db_user = 'root';
$db_pwd = '';

$database = 'smartapp';
$table = 'user';

if (!mysql_connect($db_host, $db_user, $db_pwd))
    die("Can't connect to database");

if (!mysql_select_db($database))
    die("Can't select database");


    if(isset($_POST['submit']))
    {
         $fname = $_FILES['sel_file']['name'];
         echo 'upload file name: '.$fname.' ';
         $chk_ext = explode(".",$fname);
        
         if(strtolower(end($chk_ext)) == "csv")
         {
        
             $filename = $_FILES['sel_file']['tmp_name'];
             $handle = fopen($filename, "r");
       
             while (($data = fgetcsv($handle, 1000, ",")) !== FALSE)
             {
                $sql = "INSERT into user(name,email,password,class,dob,address,contact_no,
				home,profession,office_address,office_phone,office_email,role,request,requestdate,reset,image) 
				values('$data[0]','$data[1]','$data[2]','$data[3]','$data[4]','$data[5]','$data[6]','$data[7]','$data[8]'
				,'$data[9]','$data[10]','$data[11]','$data[12]','$data[13]','$data[14]','$data[15]','$data[16]')";
                mysql_query($sql) or die(mysql_error());
             }
       
             fclose($handle);
             
                 echo '<script language="javascript">';
                 echo 'alert("Successfully Imported")';
                 echo '</script>';
 
   header( "refresh:0.00001; url=populate.php" );
            
         }
         else
         {
            
             echo '<script language="javascript">';
             echo 'alert("Incorrect File.Please choose a file")';
             echo '</script>';
			            
 
   header( "refresh:0.00001; url=populate.php" );
            
         }   
    }
 ?>
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
			    		<form action='<?php echo $_SERVER["PHP_SELF"];?>' method='post' enctype="multipart/form-data">
       
		<div class="row">
			    				<div class="col-xs-6 col-sm-6 col-md-6">
			    					<div class="form-group">
			                <input type="file" name="sel_file" id="sel_file" class="form-control input-sm" placeholder="Excel">
			    					</div>
			    				</div>
			    				
			    			</div>

			    		
			    			
			    			</div>
			    			
			    			<input type='submit' name='submit' value='SUBMIT' class="btn btn-info btn-block butn">
    </form>
			    	</div>
	    		</div>
    		</div>
    	</div>
    </div>
    </div
    ></body>
    </html>