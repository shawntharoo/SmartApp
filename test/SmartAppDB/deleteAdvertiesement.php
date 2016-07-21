  <?php
include('includes/db.php');

//Check that value is available for the delete_id
if (isset($_GET['delete_id'])) {
  //Delete data from the postadvertiesement from the smartapp database
    $sql_query = "DELETE FROM postadvertiesement WHERE IDAdd=" . $_GET['delete_id'];
    mysqli_query($mysqli, $sql_query);
    header("Location: showAdvertiesement.php");
    mysqli_close($mysqli);
} else {
    header("Location: showAdvertiesement.php");
}
?>
