<?php
header('Access-Control-Allow-Origin:*');

$where="";
$name = $_GET['name'];
$profession = $_GET['profession'];
$country = $_GET['country'];

		//search according to the name, class, profession, country
		if(($_GET['name'])!="null" && ($_GET['class'])!="null" && ($_GET['profession'])!="null" && ($_GET['country'])!="null")
		{
			$where='where role="member" and name LIKE "%'.$name.'%" and class= "'+$_GET['class']+'" and profession LIKE "%'.$profession.'%" and address LIKE "%'.$country.'%"';
		}
		//search according to the name, class, profession
	    else if(($_GET['name'])!="null" &&($_GET['class'])!="null" && ($_GET['profession'])!="null" && ($_GET['country'])=="null")
		{
			$where='where role="member" and name LIKE "%'.$name.'%" and class= "'+$_GET['class']+'" and profession LIKE "%'.$profession.'%" ';
		}
		//search by both name and class
		else if(($_GET['name'])!="null" && ($_GET['class'])!="null"  && ($_GET['profession'])=="null" && ($_GET['country'])=="null")
		{
			$where='where role="member" and class="'.$_GET['class'].'" and name LIKE "%'.$name.'%" ';
		}
		//search according to the name
		else if(($_GET['name'])!="null" &&($_GET['class'])=="null" && ($_GET['profession'])=="null" && ($_GET['country'])=="null")
		{
			$where='where role="member" and name LIKE "%'.$name.'%" ';
		}
		//search according to the class, profession, country
		else if(($_GET['name'])=="null" &&($_GET['class'])!="null" && ($_GET['profession'])!="null" && ($_GET['country'])!="null")
		{
			$where='where role="member" and class= "'.$_GET['class'].'" and profession LIKE "%'.$profession.'%" and address LIKE "%'.$country.'%"';
		}
		//search by both profession and the class
		else if(($_GET['name'])=="null" && ($_GET['class'])!="null" && ($_GET['profession'])!="null" && ($_GET['country'])=="null")
		{
			$where='where role="member" and class="'.$_GET['class'].'" and profession LIKE "%'.$profession.'%" ';
		}
		//search by the class
		else if(($_GET['name'])=="null" && ($_GET['class'])!="null" && ($_GET['profession'])=="null" && ($_GET['country'])=="null")
		{
			$where='where role="member" and class="'.$_GET['class'].'" ';
		}
		//search according to the profession and country
		else if(($_GET['name'])=="null" && ($_GET['class'])=="null" && ($_GET['profession'])!="null" && ($_GET['country'])!="null")
		{
			$where='where role="member" and profession LIKE "%'.$profession.'%" and address LIKE "%'.$country.'%" ';
		}
		//search by profession
		else if(($_GET['name'])=="null" && ($_GET['class'])=="null"  && ($_GET['profession'])!="null" && ($_GET['country'])=="null")
		{
			$where='where role="member" and profession LIKE "%'.$profession.'%" ';
		}
		//search by country
		else if(($_GET['name'])=="null" && ($_GET['class'])=="null"  && ($_GET['profession'])=="null" && ($_GET['country'])!="null")
		{
			$where='where role="member" and address LIKE "%'.$country.'%" ';
		}
		
		else
		{
			$where='where role="member"';
		}
	  
$con= mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$con);
$markers = array();
$sql = ' select * from user '.$where;

$result = mysql_query($sql,$con);
$i=0;

if($result)
{
	while($row=mysql_fetch_array($result))
	{
 
	  $markers[$i] = array(
	  'id' => $row['id'],
      'name' => $row['name'],
	  'class' => $row['class'],
      'email' => $row['email'],
      
    );
	$i=$i+1;
	}
}
else{
	$markers[$i] = array( 'name' => "No results found" );
	
	}
echo json_encode($markers);

?>