
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SmartApp</title>
  <link rel="stylesheet" href="css/bootstrap.min.css"></link>
   <link rel="stylesheet" href="css/style.css"></link>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
   <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
   <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>


   <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="http://cdn.jsdelivr.net/animatecss/2.1.0/animate.min.css">

  <script type="text/javascript">

function validateform(){

 if (document.form1.gname.value == "")
   {
      alert("Please enter the group name");
      document.form1.gname.focus();
      return false;
   }
    if (document.form1.dis.value == "")
   {
      alert("Please enter the description");
      document.form1.dis.focus();
      return false;
   }
    
   if (document.form1.input.value == "")
   {
      alert("Please upload the Image");
      document.form1.input.focus();
      return false;
   }
return true;

}
</script>

<style type="text/css">
  .c{

background-color: #5DADE2;

  }

   .c2{

background-color: #D6EAF8;

  }

.floating-box {
    display: inline-block;
    width: 150px;
    height: 75px;
    margin: 50px;
 
}




.dd             { animation-delay:0.2s; -moz-animation-delay:0.2s; -webkit-animation-delay:0.2s; }
  .da             { animation-delay:0.8s; -moz-animation-delay:0.8s; -webkit-animation-delay:0.8s; }
  .dn             { animation-delay:0.6s; -moz-animation-delay:0.6s; -webkit-animation-delay:0.6s; }
  .dg             { animation-delay:1s; -moz-animation-delay:1s; -webkit-animation-delay:1s; }
  .de             { animation-delay:0.4s; -moz-animation-delay:0.4s; -webkit-animation-delay:0.4s; }
  .dr             { animation-delay:1.2s; -moz-animation-delay:1.2s; -webkit-animation-delay:1.2s; }
  .dp             { animation-delay:0.6s; -moz-animation-delay:0.6s; -webkit-animation-delay:0.4s; }
  .ds             { animation-delay:1.0s; -moz-animation-delay:1.0s; -webkit-animation-delay:1.2s; }


</style>







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
  <img src="imag/oie_trans.gif" width="100" height="150" />
 </div>
 </div>
 <div class="container-fluid" id="middlecontainer">
  <div class="container">
 <div class="col-md-10">
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
        <li class=" navbar_margin"><a href="#">Member Request</a></li>
        <li class=" navbar_margin"><a href="populate.php">Data Insertion</a></li>
        
     
        <li class=" navbar_margin"><a href="postAdvertiesement.php">Post Advertisement</a></li>
         <li class=" navbar_margin"><a href="showAdvertiesement.php">Show Advertisement</a></li>
          <li class=" navbar_margin"><a href="editprofileapproval.php">View Profile Alteration</a></li>
          
        <li class=" navbar_margin"><a href="group.php">Groups</a></li>
      </ul>
     
     </div>
     </div>
    </nav>
  
    </div>
    <div class="col-md-2">
    <form role="form" action="" method="post" onsubmit="click()">
     
     <input type="submit" value="Allow Alterations" class="btn-success btn">
    </form>
    </div>

  </div>
  </div>

  <div class="c">

                        <div class="rw" style="padding-left: 180px;padding-bottom: 15px">

                          <div id="logo">
                            <span id="danger">
                              <h2 style="padding-left: 400px;color: white">
                              <span class="dd animated rotateIn">Let's</span>
                              <span class="da animated rotateIn">  give</span>
                              <span class="dn animated rotateIn">  a</span>
                              <span class="dg animated rotateIn">  chance</span>
                              <span class="de animated rotateIn">  for</span>
                              <span class="dr animated rotateIn">  users</span>
                                                
                              </h2>
                              <h2 style="padding-left: 300px;color: white">
                              <span class="dd animated rotateIn">to</span>
                              <span class="da animated rotateIn">  break</span>
                              <span class="dn animated rotateIn">  the</span>
                              <span class="dg animated rotateIn">  distance</span>
                              <span class="de animated rotateIn">  and</span>
                              <span class="dr animated rotateIn">  share</span>
                              <span class="dp animated rotateIn">  their</span>
                              <span class="ds animated rotateIn">  ideas</span>
                                                
                              </h2>
                              <h2 style="padding-left: 450px;color: white">
                              <span class="dd animated rotateIn">through</span>
                              <span class="da animated rotateIn">  groups.</span>
                              </h2>
                            </span>
                                      
                           </div>


                                           
                                              <!-- Trigger the modal with a button -->
                                              <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" style="margin-left: 500px;background-color: #190961">Create</button>
                                              <br/>
                                              <div style="padding-left: 300px;color: red;font-size: 150%;">
                                              <?php 
                                            if(isset($_GET['Message'])){
                                                echo $_GET['Message'];

                                            }
                                            ?>
                                                   </div>                                      
                        </div>
                                              <!-- Modal -->
                                              <div class="modal fade" id="myModal" role="dialog">
                                                <div class="modal-dialog">
                                                
                                                  <!-- Modal content-->
                                                  <div class="modal-content">
                                                    <div class="modal-header">
                                                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                      <h4 class="modal-title" style="color: red">Create groups</h4>
                                                    </div>
                                                    <div class="modal-body">



                                                                     <form name="form1"  method="POST" action="groupsave.php" onSubmit="return validateform();" enctype="multipart/form-data">
                                                                       <div class="form-group">
                                                                        <label for="gname">Group Name</label>
                                                                        <input type="text" class="form-control" id="f" name="gname" placeholder="Group Name">
                                                                      </div>

         
                                                                      <div class="form-group">
                                                                        <label for="dis">Discription</label>
                                                                        <input type="text" class="form-control" id="l" name="dis" placeholder="Discription">
                                                                      </div>
                                                                     
                                                                        <div class = "form-group">
                                                                         <label for="list">Select the Catagory</label>
                                                                         <div>
                                                                        <select name="list">
                                                                          <option name="s" value="Professinal">Professinal</option>
                                                                          <option name="l" value="Entertainment">Entertainment</option>
                                                                            </select>
                                                                        </div>
                                                                        </div>
                                                                       <div class="form-group">
                                                                        <label for="ima">Upload the group Image</label>
                                                                        <input type="file" name="input" id="i"/>
                                                                       
                                                                      </div>
                                              

                                                 
                                                                        </div>

                                                                        <div class="modal-footer">
                                                                          <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color: #190961;color: white">Close</button>
                                                                           <button type="submit" class="btn btn-default" data-dismiss="save" value="submit" style="background-color: #190961;color: white">Save</button>
                                                                        </div>
                                                                        
                                                                     </form>    
                                                              </div>
                                            </div>
                                 </div>


  </div>

  <div style="margin: 25px">
  

  </div>

  <div class="c2">
      <div class="container">
                          <h2 style="color: #C1B00B">Available groups </h2>
                          <?php
                              include("database_connect.php");

                              if(mysqli_connect_errno()){
                              echo "failed to connect to MySQL.".mysqli_connect_error();
                              }
                              $query = "select * from groups";
                              $result=mysqli_query($con,$query);
                               while($row = mysqli_fetch_array($result))//retrieve data one by one
                                  {
                                  
                              ?> 
                              <div class="floating-box">
                                  <div class="animated rotateInDownRight"> 
         
                                        <img src="<?php echo $row['image']; ?>" alt="profile-sample5" class="img-circle" alt="Cinque Terre" width="100" height="100" />
                                        <h2 style="text-align: center"><?php echo $row['group_name']; ?><span></h2>
                                        <h5 style="text-align: center"><?php echo $row['category']; ?> </h5>
                                        <h5 style="text-align: center"><?php echo $row['description']; ?> </h5>
                                       
                                        

                                   </div>
        
                              </div>
                         <?php } ?>   
                         <p style="margin-top: 30px"> </p>  
         </div>
     
  </div>
 

</div>
</div>

<footer>
<div class="footer" style="padding-top: 25px">
    
  <div class="container-fluid" id="maincontainer">
        <div class="col-md-4 box1">
             <p class="smartappheading">SmartApp</p>

                <p>Admin Panel</p>
         </div>
 </div>

</footer>
</body>

</html>