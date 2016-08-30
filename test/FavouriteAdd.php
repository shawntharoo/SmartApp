<?php
header('Access-Control-Allow-Origin:*');
include('includes/db.php');
//Asighn Data to the Variables
$addID = $_GET['Addid'];
$memID = $_GET['CusID'];

//Select Data from Pstadvertisement table
//Insert them to the favouriteAdd table in the smartap database
/**/
$query= "SELECT IDAdd, Type, Title, Image, Description, ContactNo, Email, StartDate, EndDate FROM postadvertiesement  where IDAdd= '$addID'";
$result = $mysqli->query($query) or die($mysqli->error . __LINE__);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $IDAdd = $row["IDAdd"];
        $Type = $row["Type"];
        $Title = $row["Title"];
        $Image = $row["Image"];
        $Description = $row["Description"];
        $ContactNo = $row["ContactNo"];
        $Email = $row["Email"];
        $StartDate = $row["StartDate"];
        $EndDate = $row["EndDate"];
        //Insert Data to the Favouriteadd table in the smartapp Database
        $query1 = "INSERT INTO favouriteadd (AddId, MemId, Type, Title, Image, Description, ContactNo, Email, StartDate, EndDate)
          VALUES ('$IDAdd','$memID','$Type','$Title','$Image','$Description','$ContactNo','$Email','$StartDate','$EndDate')";
        $result1 = $mysqli->query($query1) or die($mysqli->error . __LINE__);
        $result1 = $mysqli->affected_rows;
    }
} else {
    echo "0 results";
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
?>
