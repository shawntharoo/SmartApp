<?php
header('Access-Control-Allow-Origin:*');

$where="";
$name = $_GET['name'];
$group = $_GET['group'];

//search according to the name, class, profession, country
		if(($_GET['name'])!="null" && ($_GET['class'])!="null" && ($_GET['group'])!="null" )
		{
			$where='where role="member" and name LIKE "%'.$name.'%" and class= "'+$_GET['class']+'" and group_name LIKE "%'.$group.'%" ';
		}
		else if(($_GET['name'])!="null" && ($_GET['class'])!="null" && ($_GET['group'])=="null" )
		{
			$where='where role="member" and name LIKE "%'.$name.'%" and class= "'+$_GET['class']+'"  ';
		}
		else if(($_GET['name'])!="null" && ($_GET['class'])=="null" && ($_GET['group'])!="null" )
		{
			$where='where role="member" and name LIKE "%'.$name.'%" and group_name LIKE "%'.$group.'%" ';
		}
		else if(($_GET['name'])!="null" && ($_GET['class'])=="null" && ($_GET['group'])=="null" )
		{
			$where='where role="member" and name LIKE "%'.$name.'%" ';
		}
		else if(($_GET['name'])=="null" && ($_GET['class'])!="null" && ($_GET['group'])!="null" )
		{
			$where='where role="member" and class= "'+$_GET['class']+'" and group_name LIKE "%'.$group.'%" ';
		}
		else if(($_GET['name'])=="null" && ($_GET['class'])!="null" && ($_GET['group'])=="null" )
		{
			$where='where role="member" and  class= "'+$_GET['class']+'"  ';
		}
		else if(($_GET['name'])!="null" && ($_GET['class'])!="null" && ($_GET['group'])=="null" )
		{
			$where='where role="member" and name LIKE "%'.$name.'%" and class= "'+$_GET['class']+'" ';
		}
		else 
		{
			$where='where role="member" ';
		}
		
$con= mysql_connect("localhost","root","");
$db = mysql_select_db("smartapp",$con);
$markers = array();
$sql = ' select U.id, U.name, U.class, U.email from user U, group_participants P, groups G where U.id = P.userid AND P.groupid = G.id'.$where;

$result = mysql_query($sql,$con);
$i=0;

if($result)
{
	while($row=mysql_fetch_array($result))
	{
 
	  $markers[$i] = array(
	  'id' => $row[0],
      'name' => $row[1],
	  'class' => $row[2],
      'email' => $row[3],
      
    );
	$i=$i+1;
	}
}
else{
	$markers[$i] = array( 'name' => "No results found" );
	
	}
echo json_encode($markers);

?>		
		