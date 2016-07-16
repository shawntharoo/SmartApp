<html>
<head>
  <?php
  session_start();
  $_SESSION["memberid"] = $_GET['memberid'];
  ?>
  <script type="text/javascript" src="http://platform.linkedin.com/in.js">
  api_key: 75zaxqxnhgxdet
  onLoad: OnLinkedInFrameworkLoad
  authorize: false
  </script>
</head>
<body background="images/body.jpg">
<script type="in/Login">
</script>
</body>
<script type="text/javascript">
function OnLinkedInFrameworkLoad() {
  IN.Event.on(IN, "auth", OnLinkedInAuth);
}

function OnLinkedInAuth() {
    IN.API.Profile("me").result(ShowProfileData);
}

function ShowProfileData(profiles) {
    var member = profiles.values[0];
    var id=member.id;
    var firstName=member.firstName;
    var lastName=member.lastName;
    var photo=member.pictureUrl;
    var headline=member.headline;
    var numConnections=member.numConnections;
  //  document.write("hy "+firstName);
    if(confirm('Are you sure want To Edit This Badge ?'))
    {
     window.location.href='linkedSecond.php?id='+id+'&firstName='+firstName+'&lastName='+lastName+'&headline='+headline+'&photo='+photo+'&numConnections='+numConnections;
    }
    //use information captured above
}

</script>

<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

//echo $json_response;
?>

</html>
