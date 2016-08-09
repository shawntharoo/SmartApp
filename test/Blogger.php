<html>
	<head>
		<title>Blogger Authenticatio</title>
		<?php
			session_start();
		//	$_SESSION["memberid"] = $_GET['memberid'];
		?>
    <font size="5"; color="black">Signing with your Blogger Account </font><br/><br/>
    <font size="4"; color="black">Click the Button Below </font><br/><br/>
		<script type="text/javascript" src="https://www.google.com/jsapi">
		</script>
    <script type="text/javascript">
      google.load("gdata", "1.x");
      google.setOnLoadCallback(getMyBlogFeed);

      function logMeIn() {
      scope = "http://www.blogger.com/feeds/";
      var token = google.accounts.user.login(scope);
      }

      function setupMyService() {
        var myService =
          new google.gdata.blogger.BloggerService('exampleCo-exampleApp-1');
        logMeIn();
        return myService;
      }
    </script>
	</head>
	<body background="images/body.jpg">
		<script type="text/javascript">
    setupMyService();
    function bloggerAPI() {

  var api = "https://www.googleapis.com/blogger/v3/users/self/blogs";

  var headers = {
    "Authorization": "Bearer " + getService().getAccessToken()
  };

  var options = {
    "headers": headers,
    "method" : "GET",
    "muteHttpExceptions": true
  };

  var response = UrlFetchApp.fetch(api, options);

  var json = JSON.parse(response.getContentText());

  for (var i in json.items) {
    Logger.log("[%s] %s %s", json.items[i].id, json.items[i].name, json.items[i].url);
  }
}
    </script><br/><br/>
    <img src="img/linkedin-business.png" width="400" height="250">
	</body>

	<?php
		header('Access-Control-Allow-Origin: *');
		header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
		header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');
		//echo $json_response;
	?>
</html>
