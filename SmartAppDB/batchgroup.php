
 <?php

  $a = -1;

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SmartApp</title>
  <link rel="stylesheet" href="css/bootstrap.min.css"></link>
    <link rel="stylesheet" href="css/newstyle.css"></link>
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
   <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
   <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>
   <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="http://cdn.jsdelivr.net/animatecss/2.1.0/animate.min.css">

<style type="text/css">
body, html {
    height: 100%;
    background-image:url(imag/flag.jpg);
    background-repeat: no-repeat;
    background-size: cover; 
    background-attachment: fixed;
    background-position: center;
    
}
input[type=text] {
    width: 250px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
   
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 5px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}
.search_btn
{
background-color:black;
color:white;
border:none;

height:24px;
width:26px;
 margin-top:2px;

  
}
.search_text
{
 
 width:200px;
 height:43px;
 padding:0.5em;
 margin-top:1px;
}
.searchgroup
{
  padding-top:1.2em;
}

.search_col
{
 padding-top:2px; 
} 

.card {
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  height: 400px;
  margin: 0.1rem;
  position: relative;
  width: 400px;
}

.card-1 {
width: 100%;
    border: 1px solid #2F2F31;
   border-radius: 10px;
    overflow: hidden;
    margin: 0 2% 25px 0;
    position: relative;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.28);
}

.card-1:hover {
  box-shadow: 0 20px 58px rgba(0,0,0,0.30), 0 20px 50px rgba(0,0,0,0.22);
  color: red;
  opacity: 0.5;
}

</style>


<?php
include('header.php');
?>


</head>
<body>


 <div style="background-color: #999999;opacity: 0.9;margin-left: 120px;margin-right: 120px">

<!-- search and sort posts -->

                  <div class="row" style="padding-left: 350px">
                      <table>
                        <tr>
                                <td style="width: 60%">
                                    <div class="row searchgroup" style="padding-left:20px;padding-bottom: 10px">
                                      <form method="post">
                                          <div class="row search_col">
                                                            <input type="text" class="search_text" placeholder="Search" name="searchkey3"/>
                                                            <select name="category" style="height:43px;border: 2px solid #ccc" >
                                                                <option value="searchval">Select the search category</option>                                                  
                                                                <option value="descriptions">Content</option>                                        
                                                                <option value="date">Date</option>
                                                            </select>
                                          
                                                           <button class="search_btn" name="searchkey4" style="height:39px;width:45px"><img src="imag/srch.png" width="25" height="25"/></button>
                                            </div>
                                       </form>
                                       </div>
                                </td>
                                <td style="width: 40%">
                                <form method="post">
                                                         <h5 style="padding-left: 100px">sort by
                                                         <select name="sortt" style="height:44px;border: 2px solid #ccc" >
                                                              <option value="sortval">Select</option>
                                                              <option value="date">Date</option>                                                          
                                                              <option value="descriptions">Title A-Z</option>                                                          
                                                                                                           
                                                        </select>
                                                        <button class="btn" name="sortkey" style="height:41px;width:45px"><img src="imag/sort.png" width="25" height="26"/></button>
                                                        </h5>
                                                        </form>
                                </td>
                      </tr>
                    </table>
               
                                   
                    </div>
                 
                             
           

<!-- end search and sort -->

<!--posts-->
<br/>
<br/>

                           <div style="min-height: 100%;margin-left: 30px">


                                                               <?php
                                                                    include("database_connect.php");
                                                                 if(isset($_POST["sortkey"])){
                                                                                    
                                                                                                  $sort=$_POST["sortt"];
                                                                                                  if($sort=="sortval"){
                                                                                                      echo "<script type='text/javascript'>alert('Select the sort category')</script>"; 
                                                                                                       $sqlGetData="select groupid,postid,name,descriptions,p.image,date,time from group_post p ,user u where p.userid=u.id and groupid=".$a;                                               
                                                                                                      $result=mysqli_query($con,$sqlGetData);


                                                                                                  }else{
                                                                                                    if($sort=="descriptions"){

                                                                                                      $sqlGetData="select groupid,postid,name,descriptions,p.image,date,time from group_post p ,user u where p.userid=u.id and groupid=".$a." GROUP BY postid ORDER BY ".$sort." ASC";

                                                                                                  

                                                                                                    }else{
                                                                                                    $sqlGetData="select groupid,postid,name,descriptions,p.image,date,time from group_post p ,user u where p.userid=u.id and groupid=".$a." GROUP BY postid ORDER BY ".$sort." DESC";
                                                                                                    }
                                                                                                    $result=mysqli_query($con,$sqlGetData);




                                                                                                  }

                                                                  }elseif(isset($_POST["searchkey4"])){
                                                                              $search= $_POST["searchkey3"];
                                                                              $cat=$_POST["category"];
                                                                              $where= $cat." like '%$search%'";

                                                                              
                                                                              
                                                                              if($cat=="searchval" && $search==NULL){
                                                                               echo "<script type='text/javascript'>alert('Enter the search key & select the search category')</script>";
                                                                               
                                                                               $sqlGetData="select groupid,postid,name,descriptions,p.image,date,time from group_post p ,user u where p.userid=u.id and groupid=".$a;
                                                                               $result=mysqli_query($con,$sqlGetData);

                                                                              }else{
                                                                              
                                                                                                if($cat=="searchval"){ 
                                                                                                 
                                                                                                 echo "<script type='text/javascript'>alert('Select the search category')</script>"; 
                                                                                                 $sqlGetData="select groupid,postid,name,descriptions,p.image,date,time from group_post p ,user u where p.userid=u.id and groupid=".$a;
                                                                                                 $result=mysqli_query($con,$sqlGetData);
                                                                                                  
                                                                                                 }elseif($search==NULL){
                                                                                                 echo "<script type='text/javascript'>alert('Enter the search key')</script>";
                                                                                                 $sqlGetData="select groupid,postid,name,descriptions,p.image,date,time from group_post p ,user u where p.userid=u.id and groupid=".$a;
                                                                                                 $result=mysqli_query($con,$sqlGetData);
                                                                                                 }else{

                                                                                                 $sqlGetData="select groupid,postid,name,descriptions,p.image,date,time from group_post p ,user u where p.userid=u.id and groupid=$a and ".$where; 
                                                                                                 $result=mysqli_query($con,$sqlGetData);
                                                                                                 }
                                                                                                if (!$result) {
                                                                                                  printf("Error: %s\n", mysqli_error($con)); 
                                                                                                  exit();
                                                                                                }
                                                                                                                                                                              }
                                                                                                 if (mysqli_num_rows($result)==0)
                                                                                                 {
                                                                                                  ?>
                                                                                                        <div style="height: 300px;text-align: center;"><h2>
                                                                                                        <?php
                                                                                                        echo "No posts Found";  
                                                                                                 }
                                                                                                 ?></h2>
                                                                                  

                                                                                  <?php

                                                                                                 
                                                                            
                                                                                                

                                                                    }else{
    
    
                                                                               include("database_connect.php");
                                                                               if(mysqli_connect_errno()){
                                                                                   echo "failed to connect to MySQL.".mysqli_connect_error();
                                                                                   }






                                                                                                  
                                                                               $sqlGetData="select groupid,postid,name,descriptions,p.image,date,time from group_post p ,user u where p.userid=u.id and groupid=".$a;
                                                                             
                                                                               $result=mysqli_query($con,$sqlGetData);

                                                                                $numRows = mysqli_num_rows($result);

                                                                                          if($numRows <1)
                                                                                          {
                                                                                            ?>
                                                                                            <div style="height: 300px;text-align: center;"><h2>
                                                                                            <?php
                                                                                            echo "No posts to show";

                                                                                            ?>
                                                                                            </div></h2>
                                                                                            <?php

                                                                                          }                                                                        
                                                                             }
                                                                               while($row=mysqli_fetch_array($result)){?>
                                                                              <div class="card">                
                                                                                  <div class="card card-1">
                                                                                        <h3 style="padding-left: 10px"><?php echo $row['descriptions'];?></h3>
                                                                                          <img src=<?= $row["image"]?> width="500" style="min-height:350" class="img img-thumbnail"/>
                                                                                                <table style="color: #1aa3ff">
                                                                                                <tr>                                                               <td style="padding-left: 200px"><h5><?php echo $row['date'];?></h5></td>
                                                                                                <td style="padding-left: 20px"><h5><?php echo $row['time'];?></h5></td>
                                                                                                </tr>
                                                                                                </table>  
                                                                                  </div>
                                                                              </div>
                                                                           <?php } ?>                                                                    

                           </div>
      




<!--end posts -->


<br/>
</div>


</body>
<?php
include('footer.php');
?>
</html>