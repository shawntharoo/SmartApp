<?php
require("dbconnect.php");
?>

<!doctype html>
<html>
    <head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
       
        <script type="text/javascript" src="js/jquery-2.2.0.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
     
        <!-- css files -->
        <link href="css/loginPage/css/style.css" rel='stylesheet' type='text/css' media="all" />
        <!-- /css files -->
    </head>
    <body>
        <h1></h1>
        <div class="log" >
            <div class="content1">
                <h2>Sign In Form</h2>
                <form id="loginform" method="post" action="login_action.php" onsubmit="">
                    <input type="text" name="username" id="username" placeholder="USERNAME" >
                    <input type="password" name="password" id="password" placeholder="PASSWORD" >
                    <div class="button-row" >
                        <input type="submit" class="sign-in" value="Sign In">

                        <div class="clear"></div>
                    </div>
                </form>
            </div>

            <div class="clear"></div>
        </div>


    </body>
</html>