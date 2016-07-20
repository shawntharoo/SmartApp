<html>
	<head>
		<title>LinkedIn Authenticatio</title>
		<?php
			session_start();
			$_SESSION["memberid"] = $_GET['memberid'];
		?>
    <font size="5"; color="black">Signing with your LinkedIn Account </font><br/><br/>
    <font size="4"; color="black">Click the Button Below </font><br/><br/>
		<script type="text/javascript" src="http://platform.linkedin.com/in.js">
			api_key: 75zaxqxnhgxdet
			onLoad: OnLinkedInFrameworkLoad
			authorize: false
		</script>
	</head>
	<body background="images/body.jpg">
		<script type="in/Login"></script><br/><br/>
    <img src="img/linkedin-business.png" width="400" height="250">
	</body>
	<script type="text/javascript">
		function OnLinkedInFrameworkLoad() {
		  IN.Event.on(IN, "auth", OnLinkedInAuth);
		}

		function OnLinkedInAuth() {
		  IN.API.Profile("me").fields([
            "firstName","lastName","headline","positions:(company,title,summary,startDate,endDate,isCurrent)","industry",
            "location:(name,country:(code))","pictureUrl","publicProfileUrl","emailAddress",
            "educations","dateOfBirth","summary","numConnections","phoneNumbers"]).result(ShowProfileData).error(onError);
		}

		function onError(error) {
        console.log(error);
    }

		function ShowProfileData(profiles) {
		  var member = profiles.values[0];
		  var id=member.id;
		  var firstName=member.firstName;
		  var lastName=member.lastName;
		  var photo=member.phoneNumbers;
		  var headline=member.headline;
		  var numConnections=member.numConnections;
			var phoneNumbers = member.phoneNumbers;
		  //document.write("hy "+photo);
		  window.location.href='linkedSecond.php?id='+id+'&firstName='+firstName+'&lastName='+lastName+'&headline='+headline+'&photo='+photo+'&numConnections='+numConnections;
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
