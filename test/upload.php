<?php
header('Access-Control-Allow-Origin:*');

    if(isset($_FILES['image'])){    
        $errors= array();        
        $file_name = $_FILES['image']['name'];
        $file_size =$_FILES['image']['size'];
        $file_tmp =$_FILES['image']['tmp_name'];
        $file_type=$_FILES['image']['type'];   
        $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
        $extensions = array("jpeg","jpg","png");        
        if(in_array($file_ext,$extensions )=== false){
             $errors[]="image extension not allowed, please choose a JPEG or PNG file.";
        }
        if($file_size > 2097152){
            $errors[]='File size cannot exceed 2 MB';
        }               
        if(empty($errors)==true){
            move_uploaded_file($file_tmp,"../../Img/PlayerAvatar/".$file_name);
            echo $fname . " uploaded file: " . "images/" . $file_name;
        }else{
            print_r($errors);
        }
  }
    else{
        $errors= array();
        $errors[]="No image found";
        print_r($errors);
}
?>