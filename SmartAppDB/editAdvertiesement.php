
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width-device-width, initial-scale=1.0">
 <!-- <tilte><h4>Register Here</h4></tilte>-->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/ideacss.css" rel="stylesheet">


</head>
<body background="images/body.jpg">
<div>
</div>
<div class="container">
<div class="row">
<div class="col-md-3">
</div>
<div class="col-md-6"><br/>
<div class="panel panel-default">
<div class="panel-heading">
<h4 class="panel-title" align="center">Advertiesement Form</h4>
</div>
<div class="panel-body">
<form name="form1"  method="POST" action="register_form.php" onSubmit="return validateform();" enctype="multipart/form-data">
   <div class="form-group">
    <label for="fnam">Tile</label>
    <input type="text" class="form-control" id="f" name="fname" placeholder="Title of the Advertiesement">
  </div>
<div class = "form-group">
 <label for="list">Select the Category</label>
 <div>
<select name="list">
  <option value="Promote">Promote</option>
  <option value="Event">Event</option>
  <option value="Merchent">Merchent</option>
  </select>
</div>
</div>
    <div class="form-group">
    <label for="addr">Description</label>
    <textarea class="form-control" name="add" id="a" placeholder="Enter A Brief Description about the adveretiesement" rows="6"></textarea>
  </div>
  <div class="form-group">
    <label for="ima">Upload The Banner</label>
    <input type="file" name="input" id="i"/>
    <p class="help-block">Make Sure your Banner is With Good Quality</p>
  </div>
  <button type="submit" class="btn btn-primary" name="btn-signup" value="submit">Post</button>
</form>
</div>
</div>
</div>
<div class="col-md-3"><br/>
</div>
</div>
</div>
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>

</html>