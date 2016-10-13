angular.module('app.controllers', ['ngOpenFB','ngCordova'])
  
.controller('orderPizzaCtrl', function($scope,$state) {
  //$tbit= false;
  //$gbit=true;

  $scope.show = function(s){
      if(s=='Advanced'){  $tbit=false;}
      if(s=='By Group'){  $gbit=false;}
  }

	$scope.search = function(name, class1, profession, country){

     if(angular.isUndefined(name))
         {
            name = "null";
         }
      if(angular.isUndefined(class1))
         {
            class1 = "null";
         }
      if(angular.isUndefined(profession))
         {
            profession = "null";
         }
      if(angular.isUndefined(country))
         {
            country = "null";
         } 
      /* if(group=="default" || (angular.isUndefined(group)))
         {
            group = "null";
         }    */
      //$state.go('result' ,{name:name, class:class});
     window.localStorage.setItem("name",name);
     window.localStorage.setItem("class",class1);
     window.localStorage.setItem("profession",profession);
     window.localStorage.setItem("country",country);
     //window.localStorage.setItem("group",group);
      // alert("hello");
    
   }

   $scope.searchGroup = function(name, class1, group){

     if(angular.isUndefined(name))
         {
            name = "null";
         }
      if(angular.isUndefined(class1))
         {
            class1 = "null";
         }
      if(group=="default" || (angular.isUndefined(group)))
         {
            group = "null";
         }

     window.localStorage.setItem("name",name);
     window.localStorage.setItem("class",class1); 
     window.localStorage.setItem("group",group); 


       }


})
.controller('slider',function($scope,$ionicSlideBoxDelegate){

   
})
   
.controller('cartCtrl', function($scope) {

})
      
.controller('start', function($scope) {

})
.controller('welcomeCtrl', function($scope,$state,$http,$ionicPopup,$ionicModal, $timeout, ngFB,$ionicLoading,$ionicPlatform) {
       $scope.fbLogin = function () {
   // alert('1');
    ngFB.login({scope: 'email,user_posts,publish_actions'}).then( //nvalid Scopes: read_stream. 
        function (response) {

            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                alert('Facebook login successful');

                ngFB.api({
                path: '/me',
                params: {fields: 'email'}
                }).then(
                function (user) {
                  $scope.userFB = user;


                  var fbEmail = angular.toJson($scope.userFB);
                  var emailVal = fbEmail.split("\"");
                  //alert(emailVal[3]);
                  //var fbEmail = $scope.fbEmail;
                  $http.get('http://teamsoft.tk/logcheckFB.php?email='+emailVal[3]).then(function(response){
                    var names = response.data;
                    var role , id;
                    if(names=="false"){
                        alert('This user is not signed into Royalists94. \n Please try again!');
                    }
                    else{
                    for (var i = 0; i < names.length; i++) {

                      var name = names[i];
                      role = name.role;
                      id= name.id;                
                      
                    }
                    window.localStorage.setItem("username",emailVal[3]);//set username to localstorage
                    window.localStorage.setItem("id",id);//set username to localstorage
                    window.localStorage.setItem("role",role);//set username to localstorage
                    var stat ="fb";
                    if(role=="admin"){
                    $state.transitionTo('AdmintabsController.mainprofile',{name:role, type:stat});  }
                    else if(role=="member"){
                      $state.go('tabsController.mainprofile',{name: role,type:stat});
                    }

                  }
                  });
                },
                function (error) {
                  alert('Facebook error: ' + error.error_description);
                });

                //$scope.closeLogin();
            } 
            else {
                alert('Facebook login failed');
            }
        });
}; 
  $scope.googleSignIn = function() {
    $ionicLoading.show({
      template: 'Logging in...'
    });


    window.plugins.googleplus.login(
      {},
      function (user_data) {
        // For the purpose of this example I will store user data on local storage
        UserService.setUser({
          userID: user_data.userId,
          name: user_data.displayName,
          email: user_data.email,
          picture: user_data.imageUrl,
          accessToken: user_data.accessToken,
          idToken: user_data.idToken
        });

        $ionicLoading.hide();
        $state.go('app.home');
      },
      function (msg) {
        $ionicLoading.hide();
      }
    );
  };

})


.controller('loginCtrl', function($scope,$state,$http,$ionicPopup,$ionicModal, $timeout, ngFB) {

  $scope.toSignup = function(){
    state.transitionTo('signup');
  }

  $scope.fbLogin = function () {
   // alert('1');
    ngFB.login({scope: 'email,user_posts,publish_actions'}).then( //nvalid Scopes: read_stream. 
        function (response) {

            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                alert('Facebook login successful');

                ngFB.api({
                path: '/me',
                params: {fields: 'email'}
                }).then(
                function (user) {
                  $scope.userFB = user;


                  var fbEmail = angular.toJson($scope.userFB);
                  var emailVal = fbEmail.split("\"");
                  //alert(emailVal[3]);
                  //var fbEmail = $scope.fbEmail;
                  $http.get('http://teamsoft.tk/logcheckFB.php?email='+emailVal[3]).then(function(response){
                    var names = response.data;
                    var role , id;
                    if(names=="false"){
                        alert('This user is not signed into Royalists94. \n Please try again!');
                    }
                    else{
                    for (var i = 0; i < names.length; i++) {

                      var name = names[i];
                      role = name.role;
                      id= name.id;                
                      
                    }
                    window.localStorage.setItem("username",emailVal[3]);//set username to localstorage
                    window.localStorage.setItem("id",id);//set username to localstorage
                    window.localStorage.setItem("role",role);//set username to localstorage
                    var stat ="fb";
                    if(role=="admin"){
                    $state.transitionTo('AdmintabsController.mainprofile',{name:role, type:stat});  }
                    else if(role=="member"){
                      $state.go('tabsController.mainprofile',{name: role,type:stat});
                    }

                  }
                  });
                },
                function (error) {
                  alert('Facebook error: ' + error.error_description);
                });

                //$scope.closeLogin();
            } 
            else {
                alert('Facebook login failed');
            }
        });
}; 
  /*
The code below will get the username 
and the password from the login form and 
perform the login funtion
*/
   $scope.login= function(email,password){
    

 $http.get('http://teamsoft.tk/logcheck.php?email='+email+'&password='+password).then(function(response){
  var names = response.data;
    var role , id,reset;
   for (var i = 0; i < names.length; i++) {

    var name = names[i];
    role = name.role;
    reset=name.reset;
    id= name.id;                
                      
    }
 var stat = "local";
 if(role=="admin")
 {
   window.localStorage.setItem("username",email);//set username to localstorage
   window.localStorage.setItem("id",id);//set username to localstorage
   window.localStorage.setItem("role",role);//set username to localstorage
   var alertPopup = $ionicPopup.alert({
  title:'login',
  template:'login successfully '

  
 });

   var CusID = window.localStorage.getItem("id");
    $http.post("http://teamsoft.tk/DisableAddCreate.php?CusID="+CusID);
      if(reset==0)
   {
       $state.transitionTo('resetpassword');
    
   }
  else
  {
  $state.transitionTo('AdmintabsController.mainprofile',{name:role,type:stat});
   }

  }
   else if(role=="member")
 {
   window.localStorage.setItem("username",email);//set username to localstorage
   window.localStorage.setItem("id",id);//set id to localstorage
    window.localStorage.setItem("role",role);//set user role to localstorage
   var alertPopup = $ionicPopup.alert({
  title:'login',
  template:'login successfully '
  
 });
   var CusID = window.localStorage.getItem("id");
    $http.post("http://teamsoft.tk/DisableAddCreate.php?CusID="+CusID);
        if(reset==0)
   {
       $state.transitionTo('resetpassword');
    
   }
  else
  {

     $state.go('tabsController.mainprofile',{name: role,type:stat});
   }

  }

  else
  {
  var alertPopup = $ionicPopup.alert({ //this message will show if the login details are incorrect
  title:'login',
  template:'Incorrect Username or password '
  
 });

  }

 });
 };
   

})



.controller('timelineCtrl', function($scope,$state) {

             $scope.navigate= function(){
      var stat = "local";
      var role = window.localStorage.getItem("role");
      if(role=="admin")
      {
       $state.go('AdmintabsController.mainprofile',{name: role,type:stat}); 
      }
      else{
    $state.go('tabsController.mainprofile',{name: role,type:stat});
  }
  }

})
.controller('resetpasswordCtrl', function($scope,$state,$http,$ionicPopup) {
          $scope.continue= function(){
      var stat = "local";
      var role = window.localStorage.getItem("role");

      if(role=="admin")
      {
       $state.go('AdmintabsController.mainprofile',{name: role,type:stat}); 
      }
      else{
    $state.go('tabsController.mainprofile',{name: role,type:stat});
  }
  }

  $scope.reset=function(password)
  {
     var x = window.localStorage.getItem("id");
     var stat = "local";
     var role = window.localStorage.getItem("role");
    $http.get('http://teamsoft.tk/reset.php?password='+password+'&id='+x).then(function(response){

 if(response.data=="true"){

    var alertPopup = $ionicPopup.alert({
    title:'SmartApp',
    template:'successfully change the password'
  
 });
      if(role=="admin")
      {
       $state.go('AdmintabsController.mainprofile',{name: role,type:stat}); 
      }
      else{
    $state.go('tabsController.mainprofile',{name: role,type:stat});
  }
 

 }

 else {
//this message will show if the email already used 
   var alertPopup = $ionicPopup.alert({
   title:'SmartApp',
   template:'Error in Process'
  
    });
 

   }

 });
  }

  

})

.controller('signupCtrl', function($scope,$http,$ionicPopup,$state,ngFB) {
    var Check=0;

    $scope.widget = {name: "Enter name", email: "Enter email"};
 /*
The code below will check the 
in put field for incorrect
input 
eg-numbers for the name
*/
    $scope.namecheck = function () {
                    var name, i, len;
                  
                    var namearray = document.getElementById('name').value;
                    len = namearray.length;
                    for (i = 0; i < len; i++) {

                        name = namearray.charCodeAt(i);

                        if ((name > 64 && name < 91) || (name > 96 && name < 123)||(name=32))
                        {


                         Check=0;

                        } else
                        {
                            
                            Check=1; 
                            return true;
                            break;
                        }
                    }
                };
 $scope.fbsignup=function()
 {
     ngFB.login({scope: 'email,user_posts,publish_actions'}).then( //nvalid Scopes: read_stream. 
        function (response) {

            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                alert('Facebook login successful');

                ngFB.api({
                path: '/me',
                params: {fields: 'id,name,email'}
                }).then(
                function (user) {
                  $scope.userFB = user;


                  var fbDetails = angular.toJson($scope.userFB);
                  var details = fbDetails.split("\"");
                 // alert(details);
                  //var fbEmail = $scope.fbEmail;
                 // $scope.name = ;
                 // $scope.email = ;

                  alert(details[7]);
                  alert(details[11]);
                  $scope.name = details[7];
                  $scope.email = details[11];

                },
                function (error) {
                  alert('Facebook error: ' + error.error_description);
                });

                //$scope.closeLogin();
            } 
            else {
                alert('Facebook login failed');
            }
        });

 };
                                                            
  /*
The code below will check the 
input field and perform the 
sign up function
*/

 $scope.signup = function(name,myclass,email){
  if(angular.isUndefined(name) || name === null ||angular.isUndefined(myclass) || myclass === null || email === null )
   {

var alertPopup = $ionicPopup.alert({
    title:'Error',
    template:'Plese enter all the fiedls' //this message will show if the details are empty
 
  
   });

   }
   else if(angular.isUndefined(email)) 
   {
   var alertPopup = $ionicPopup.alert({
    title:'Error',
    template:'Plese enter valid email'//this message will show if the email not in correct format
      });

   } 
   else if(Check==1) 
   {
     
    Check=0; 
    var alertPopup = $ionicPopup.alert({
    title:'Error',
    template:'Plese enter valid name'
      });
   
   } 
   
 

 else
 {
//following code will perform the sending http request.
 $http.get('http://teamsoft.tk/signup.php?name='+name+'&class='+myclass+'&email='+email).then(function(response){

 if(response.data=="true"){

    var alertPopup = $ionicPopup.alert({
    title:'SmartApp',
    template:'your request has successfully sent to the system.Check mail for the confirmation'
	
 });
 

 }

 else if(response.data=="exists"){
//this message will show if the email already used 
   var alertPopup = $ionicPopup.alert({
   title:'SmartApp',
   template:'Email has already being used in the system.If you have already signed up please login .Or else try another email address'
  
    });
 

   }

 });

 }

 };
    
 

})
 .controller('profileCtrl', function($scope,$ionicActionSheet,$timeout,$state,$http,$rootScope) {
   // Triggered on a button click, or some other target

   $scope.bg = $rootScope.bgImage;
 $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
      
       { text: 'Logout'},
        { text: 'Theme'},
          { text: 'Reset Password'},
      
     ],
    
     titleText: 'Settings',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
      if(index===0){
            $state.transitionTo('login');
          }
           if(index===1){
            $state.transitionTo('theme');
          }
            if(index===2){
            $state.transitionTo('resetpassword');
          }
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);

 };
       var x = window.localStorage.getItem("id");
            $http.get('http://teamsoft.tk/getname.php?id='+x).then(function (response) {

          

                    var records = response.data;


                    for (var i = 0; i < records.length; i++) {

                        var record = records[i];
                        
                      $scope.name=record.name;
                      $scope.class=record.class;
                      $scope.email=record.email;
                      $scope.address=record.address;
                      $scope.image=record.image;
                      $scope.contact_no=record.contact_no;
               }
            });
             $http.get('http://teamsoft.tk/getspouse.php?id='+x).then(function (response) {


                    var records = response.data;


                    for (var i = 0; i < records.length; i++) {

                        var record = records[i];
                        
                      $scope.spouse=record.sname;
                   
               }
            });
              $http.get('http://teamsoft.tk/getchildcount.php?id='+x).then(function (response) {


                    var records = response.data;


                   for (var i = 0; i < records.length; i++) {

                        var record = records[i];
                        
                      $scope.childcount=record.count;
                   
               }
            });
      $scope.nextpage = function(){

    $state.transitionTo("profileEdit");
  }
     $scope.navigate= function(){
      var stat = "local";
      var role = window.localStorage.getItem("role");
      if(role=="admin")
      {
       $state.go('AdmintabsController.mainprofile',{name: role,type:stat}); 
      }
      else{
    $state.go('tabsController.mainprofile',{name: role,type:stat});
  }
  }



})
 .controller('addressCtrl', function($scope,$http,$ionicPopup,$state) {
    /*
The code below will check the 
in put field for incorrect
input 
eg-letters for numbers
*/

    var Check1=0;
    var Check2=0;
    //check the home contact number
    $scope.alert = function () {
                    var code, i, len;
                    var TCode = document.getElementById('fCode1').value;
                    len = TCode.length;
                    for (i = 0; i < len; i++) {

                        code = TCode.charCodeAt(i);

                        if (code > 47 && code < 58)
                        {

                         Check1=0;

                        } else 
                        {
                          Check1=1;
                            return true;
                            break;
                        }
                    
                  }
                };
  //check the mobile contact number
  $scope.alert4 = function () {
                    var code, i, len;
                    var TCode = document.getElementById('fCode2').value;
                    len = TCode.length;
                    for (i = 0; i < len; i++) {

                        code = TCode.charCodeAt(i);

                        if (code > 47 && code < 58)
                        {

                          Check2=0;

                        } else 
                        {

                           Check2=1;
                            return true;
                            break;
                        }
                    
                  }
                };


var z = window.localStorage.getItem("username");
$http.get('http://teamsoft.tk/getaddress.php?user='+z).then(function(response){
  $scope.mydetails = response.data;
  for (var i = 0; i < mydetails.length; i++) {

                        var mydetail = mydetails[i];
                        
                      $scope.address=mydetail.address;
                      $scope.contact_no=mydetail.contact_no;
                      $scope.home=mydetail.home;
               }

});
    /*
The code below will check the 
in put fields and add personal
details of the user.

*/

  $scope.addpersonaldetails=function(address,home,mobile){
   
    var y = window.localStorage.getItem("id");
      if(angular.isUndefined(address) || address === null ||angular.isUndefined(home) || home=== null || angular.isUndefined(mobile) ||mobile === null )
   {

var alertPopup = $ionicPopup.alert({
    title:'Error',
    template:'Plese enter all the fiedls'
 
  
   });

   }
   else if(Check1==1||Check2==1) 
   {
     
    
    var alertPopup = $ionicPopup.alert({
    title:'Error',
    template:'Plese enter valid number'
      });
   
   } 

    else
    {
      //add personal details 
 $http.get('http://teamsoft.tk/personal.php?address='+address+'&home='+home+'&mobile='+mobile+'&id='+y).then(function(response){
 
 if(response.data=="true"){
 var alertPopup = $ionicPopup.alert({
  title:'SmartApp',
  template:'successfully added'//this message will show if the details are successfully added
  
 });

$state.transitionTo("profile");
 }
  else if(response.data=="false"){
 var alertPopup = $ionicPopup.alert({
  title:'SmartApp',
  template:'fail'//this message will show if error occured
  
 });
 
 }

 });
}
  };

 
  


})
  .controller('mainprofileCtrl', function($scope,$state, $stateParams,$http, ngFB, $rootScope) {

    $scope.bg = $rootScope.bgImage;
   $scope.type = $stateParams.type;

    if( $scope.type=="fb"){ 

  ngFB.api({
        path: '/me',
        params: {fields: 'id,name,email'}
    }).then(
        function (user) {
            $scope.user = user;

/*Setting the image to local storage (for sanda)*/
             var fbImg = angular.toJson($scope.user);
             var imgVal = fbImg.split("\"");

             window.localStorage.setItem("image",imgVal[3]);
           //  window.localStorage.setItem("image",imgVal[3]);
            // window.localStorage.setItem("image",imgVal[3]);


        },
        function (error) {
            alert('Facebook error: ' + error.error_description);
        });

  }

  else if( $scope.type=="local"){



    $scope.n = $stateParams.name;
    if($scope.n == 'rep'){
      $scope.rep="true";
      $scope.admin="false";
    }
    else if($scope.n == 'admin'){
      $scope.rep="false";
      $scope.admin="true";
    }

    else{
      $scope.admin="false";
      $scope.rep="false";
    }

   
                  
           
            var x = window.localStorage.getItem("id");
            $http.get('http://teamsoft.tk/getname.php?id='+x).then(function (response) {

           

                  // $scope.user = response.data;
                   var records = response.data;
                   var test="this";
                   $scope.test=test;

                    for (var i = 0; i < records.length; i++) {

                        var record = records[i];
                        
                      $scope.name=record.name;
                      $scope.class=record.class;
                      $scope.email=record.email;
                      $scope.image=record.image;

               }
            });
                                         
       }   


     
      $scope.swichtobusiness= function(){

    $state.transitionTo("tabsController2.showAdvertiesement");
  }

})

    .controller('requestCtrl', function($scope,$http,$ionicPopup,$state,$window) {

       $http.get('http://teamsoft.tk/memberRequest.php').then(function(response){
          

          $scope.request = response.data;
      
      });
           /*
The code below will approve
the member request

*/

       $scope.approve=function(id)
       {
         $http.get('http://teamsoft.tk/acceptRequest.php?id='+id).then(function(response){
          

          if(response.data=="true")
          {
            
           var alertPopup = $ionicPopup.alert({
            title:'SmartApp',
            template:'successfully approved the request'
  
            });
            $state.go($state.current, {}, {reload: true});
          
          }
          else
          {
            var alertPopup = $ionicPopup.alert({
            title:'Error',
            template:'Error in process'
  
            });

          }
      
       });


       };
                 /*
The code below will reject
the member request

*/
        $scope.reject=function(id)
       {
         $http.get('http://teamsoft.tk/rejectRequest.php?id='+id).then(function(response){
          

          if(response.data=="true")
          {
            
           var alertPopup = $ionicPopup.alert({
            title:'SmartApp',
            template:'successfully reject the request'
  
            });
            $state.go($state.current, {}, {reload: true});
          
          }
          else
          {
            var alertPopup = $ionicPopup.alert({
            title:'Error',
            template:'Error in process'
  
            });

          }
      
       });


       };
           $scope.navigate= function(){
      var stat = "local";
      var role = window.localStorage.getItem("role");
      if(role=="admin")
      {
       $state.go('AdmintabsController.mainprofile',{name: role,type:stat}); 
      }
      else{
    $state.go('tabsController.mainprofile',{name: role,type:stat});
  }
  }






})
        .controller('profileEditCtrl', function($scope,$http,$ionicPopup,$window,$state,$rootScope,$cordovaCamera, $ionicActionSheet, $cordovaFileTransfer) {
           /*
The code below will check the 
in put field for incorrect
input 
eg-numbers for the name
*/
// open PhotoLibrary
    $scope.openPhoto = function() {
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {

            //console.log(imageData);
            //console.log(options);   
            var image = document.getElementById('tempImage');
            image.src = imageData;  

            var server = "http://teamsoft.tk/image/",
                filePath = imageData;

            var date = new Date();

            var options = {
                fileKey: "file",
                fileName: imageData.substr(imageData.lastIndexOf('/') + 1),
                chunkedMode: false,
                mimeType: "image/jpg"
            };

            $cordovaFileTransfer.upload(server, filePath, options).then(function(result) {
                console.log("SUCCESS: " + JSON.stringify(result.response));
                console.log('Result_' + result.response[0] + '_ending');
                alert("success");
                alert(JSON.stringify(result.response));

            }, function(err) {
                console.log("ERROR: " + JSON.stringify(err));
                //alert(JSON.stringify(err));
            }, function (progress) {
                // constant progress updates
            });


        }, function(err) {
            // error
            console.log(err);
        });
    }
          var Check=0;
             $scope.namecheck = function () {
                    var name, i, len;
                   
                    var namearray = document.getElementById('name').value;
                    len = namearray.length;
                    for (i = 0; i < len; i++) {

                        name = namearray.charCodeAt(i);

                        if ((name > 64 && name < 91) || (name > 96 && name < 123))
                        {

                         Check=0;

                        } else
                        {
                       
                            Check=1;
                            return true;
                            break;
                        }
                    }
                };
          $scope.profileEdit=function(name,email)
          {
                
               if(angular.isUndefined(name) || name === null || email === null )

               {
                var alertPopup = $ionicPopup.alert({
                title:'Error',
                template:'Plese enter all the fiedls'
 
  
                });
              }
                else if(angular.isUndefined(email))

                {
                   var alertPopup = $ionicPopup.alert({
                   title:'Error',
                   template:'Plese enter valid email'
                });


                }
                   else if(Check==1) 
                 {
     
               Check=0; 
              var alertPopup = $ionicPopup.alert({
                title:'Error',
               template:'Plese enter valid name'
            });
   
            } 

               
              else
{


                var x = window.localStorage.getItem("id");
                
                $http.get('http://teamsoft.tk/profileEdit.php?id='+x+'&name='+name+'&email='+email).then(function(response){
          

          if(response.data=="true")
          {
            
           var alertPopup = $ionicPopup.alert({
            title:'SmartApp',
            template:'successfully update the details'
  
            });
         
           $state.go("profile", {}, {reload: true});
          }
          else if(response.data=="exists"){

            var alertPopup = $ionicPopup.alert({
            title:'SmartApp',
            template:'Email has already being used in the system.try another email address'
  
             });
 
 
            }
          else
          {
            var alertPopup = $ionicPopup.alert({
            title:'Error',
            template:'Error in process'
  
            });

          }
      
       });



 }
          };
        

      

})
     .controller('request1Ctrl', function($scope) {

})
     .controller('occupationCtrl', function($scope) {

})
          .controller('uploadCtrl', function($scope, $cordovaCamera, $cordovaFile, $cordovaFileTransfer, $cordovaDevice, $ionicPopup, $cordovaActionSheet) {
            // Present Actionsheet for switch beteen Camera / Library
$scope.loadImage = function() {
  var options = {
    title: 'Select Image Source',
    buttonLabels: ['Load from Library', 'Use Camera'],
    addCancelButtonWithLabel: 'Cancel',
    androidEnableCancelButton : true,
  };
  $cordovaActionSheet.show(options).then(function(btnIndex) {
    var type = null;
    if (btnIndex === 1) {
      type = Camera.PictureSourceType.PHOTOLIBRARY;
    } else if (btnIndex === 2) {
      type = Camera.PictureSourceType.CAMERA;
    }
    if (type !== null) {
      $scope.selectPicture(type);
    }
  });
};
// Take image with the camera or from library and store it inside the app folder
// Image will not be saved to users Library.
$scope.selectPicture = function(sourceType) {
  var options = {
    quality: 100,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: sourceType,
    saveToPhotoAlbum: false
  };
 
  $cordovaCamera.getPicture(options).then(function(imagePath) {
    // Grab the file name of the photo in the temporary directory
    var currentName = imagePath.replace(/^.*[\\\/]/, '');
 
    //Create a new name for the photo
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
 
    // If you are trying to load image from the gallery on Android we need special treatment!
    if ($cordovaDevice.getPlatform() == 'Android' && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
      window.FilePath.resolveNativePath(imagePath, function(entry) {
        window.resolveLocalFileSystemURL(entry, success, fail);
        function fail(e) {
          console.error('Error: ', e);
        }
 
        function success(fileEntry) {
          var namePath = fileEntry.nativeURL.substr(0, fileEntry.nativeURL.lastIndexOf('/') + 1);
          // Only copy because of access rights
          $cordovaFile.copyFile(namePath, fileEntry.name, cordova.file.dataDirectory, newFileName).then(function(success){
            $scope.image = newFileName;
          }, function(error){
            $scope.showAlert('Error', error.exception);
          });
        };
      }
    );
    } else {
      var namePath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      // Move the file to permanent storage
      $cordovaFile.moveFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function(success){
        $scope.image = newFileName;
      }, function(error){
        $scope.showAlert('Error', error.exception);
      });
    }
  },
  function(err){
    // Not always an error, maybe cancel was pressed...
  })
};

// Returns the local path inside the app for an image
$scope.pathForImage = function(image) {
  if (image === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + image;
  }
};
$scope.uploadImage = function() {
  // Destination URL
  var url = "http://teamsoft.tk/upload.php";
 
  // File for Upload
  var targetPath = $scope.pathForImage($scope.image);
 
  // File name only
  var filename = $scope.image;;
 
  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': filename}
  };
 
  $cordovaFileTransfer.upload(url, targetPath, options).then(function(result) {
    $scope.showAlert('Success', 'Image upload finished.');
  });
}

})
       .controller('familyCtrl', function($scope,$http,$ionicPopup,$state){
         /*
The code below will check the 
in put field for incorrect
input 
eg-numbers for the name
*/
            var Check=0;
            var Check2=0;

           $scope.namecheck = function () {
                    var name, i, len;
                   
                    var namearray = document.getElementById('name').value;
                    len = namearray.length;
                    for (i = 0; i < len; i++) {

                        name = namearray.charCodeAt(i);

                        if ((name > 64 && name < 91) || (name > 96 && name < 123))
                        {

                          Check=0;

                        } else
                        {
                       
                              Check=1;
                            return true;
                            break;
                        }
                    }
                };
              $scope.cnamecheck = function () {
                    var name, i, len;
                 
                    var namearray = document.getElementById('c_name').value;
                    len = namearray.length;
                    for (i = 0; i < len; i++) {

                        name = namearray.charCodeAt(i);

                        if ((name > 64 && name < 91) || (name > 96 && name < 123))
                        {

                         Check2=0;

                        } else
                        {
                       
                           Check2=1;
                            return true;
                            break;
                        }
                    }
                };
        var x;
        $scope.changesname = function(sname){

        var r = window.localStorage.getItem("id");
         if(angular.isUndefined(sname) || sname == null||document.getElementById('name').value===null)
        {
           var alertPopup = $ionicPopup.alert({
           title:'SmartApp',
           template:'Please enter the spouse name'
  
         });

        }
           else if(Check==1)
        {
           var alertPopup = $ionicPopup.alert({
           title:'SmartApp',
           template:'Please enter the valid name'
  
         });

        }
        else
        {
        $http.get('http://teamsoft.tk/schange.php?id='+r+'&sname='+sname).then(function (response) {

          if(response.data=="true"){
           var alertPopup = $ionicPopup.alert({
           title:'SmartApp',
           template:'successfully Changed'

  
         });
             $state.go("profile", {}, {reload: true});

         }
          
          else{
           var alertPopup = $ionicPopup.alert({
           title:'Error',
           template:'Error in the process'
  
         });

         }
       })
      }

        }

        $scope.checked = function(checkschool){
        if(checkschool == true)//get the check button value
     
        x=1;
        else {
      
         x=0;
        }
        }


        $scope.add = function(cname,c){
            var date = new Date(c);
            var month = date.getMonth()+1;
            var day = date.getDate();
            var year = date.getFullYear();
            var date1 = year+"-"+month+"-"+day;
        var r = window.localStorage.getItem("id");
        if((angular.isUndefined(cname) || cname === null || angular.isUndefined(c) || c=== null ))
        {
           var alertPopup = $ionicPopup.alert({
           title:'SmartApp',
           template:'Please enter all the fields'
  
         });

        }
        else if(Check2==1)
        {
           var alertPopup = $ionicPopup.alert({
           title:'SmartApp',
           template:'Please enter the valid name'
  
         });

        }
        else
        {
        $http.get('http://teamsoft.tk/childadd.php?id='+r+'&cname='+cname+'&dob='+date1+'&royal='+x).then(function (response) {
           if(response.data=="true"){
           var alertPopup = $ionicPopup.alert({
           title:'SmartApp',
           template:'successfully added'
  
         });
         }
         });
         $state.go($state.current, {}, {reload: true});
        }
        }
        //table show edit delete
        
          var x;
    var u = window.localStorage.getItem("id");
    var select;
    $scope.edit = function(a){
    
    select = a;
    $http.get('http://teamsoft.tk/getchildren1.php?id='+a).then(function (response) {
    var children = response.data;


                    for (var i = 0; i < children.length; i++) {

                        var child = children[i];
                        
                      document.getElementById("c_name").value=child.child_name;
                      document.getElementById("d_date").value=child.date_of_birth;
                  
                      var royal1 = child.school_name;
            if(royal1 == "1"){
            $scope.royal = true;
            }
            else{
            $scope.royal = false;
            }
               }
    });
    }
    
    
    $scope.delete = function(b){
    
    $http.get('http://teamsoft.tk/delchildren.php?id='+b).then(function (response) {
    $http.get('http://teamsoft.tk/getchildren.php?id='+u).then(function (response) {
    $scope.childlist = response.data;
    });
    });
    
    }
    
    
    
    $http.get('http://teamsoft.tk/getchildren.php?id='+u).then(function (response) {
    $scope.childlist = response.data;
    });
      $scope.editchild = function(a,b){
    var r = window.localStorage.getItem("id");

    var date = new Date(b);
    var month = date.getMonth()+1;
    var day = date.getDate();
    var year = date.getFullYear();
    var date1 = year+"-"+month+"-"+day;
         if((angular.isUndefined(a) || b=== null || angular.isUndefined(b) || b=== null ))
        {
           var alertPopup = $ionicPopup.alert({
           title:'SmartApp',
           template:'Please enter all the fields'
  
         });

        }
        else
        {   
   
        $http.get('http://teamsoft.tk/childupd.php?id='+select+'&cname='+a+'&dob='+date1+'&royal='+x).then(function (response) {
           if(response.data=="true"){
           var alertPopup = $ionicPopup.alert({
           title:'SmartApp',
           template:'successfully edited'
  
         });
     alertPopup.then(function(res) {
    
  
      $http.get('http://teamsoft.tk/getchildren.php?id='+u).then(function (response) {
    $scope.childlist = response.data;
    });
    document.getElementById("c_name").value="";
    document.getElementById("d_date").value="";
    $scope.royal = false;
    });
         }
         });
      }
    
    }

})
      
       //panchali controllers
.controller('cricketPostCtrl', function($scope,$state,$http,$ionicActionSheet,$timeout,$ionicPopup,$ionicSideMenuDelegate,$ionicModal,$ionicPopover) {

var UID=window.localStorage.getItem("id");



                $scope.$on('$ionicView.enter', function() {

                            //catch the group id sent from group.html page or followCricket.html page and retrive the group post details from the database.
                            $http.get('http://teamsoft.tk/subposts.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID).then(function(response)
                            {
                                  $scope.names = response.data;
                                 
                                  
                            })
                            //catch the group id sent from group.html page or followCricket.html page and retrive the group details from the database.
                            $http.get('http://teamsoft.tk/subgrp.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID).then(function(response)
                            {
                                  $scope.gp = response.data;


                            
                            })
                              $http.get('http://teamsoft.tk/subgrpmember.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID).then(function(response)
                                {
                                      $scope.n = response.data;
                                     
                                  
                                })
                              $http.get('http://teamsoft.tk/subpostsFilter.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID).then(function(response)
                            {
                                  $scope.names2 = response.data;
                                 
                                  
                            })


                });



                //template for add a post

                $ionicModal.fromTemplateUrl('templates/modal.html', {
                    scope: $scope
                  }).then(function(modal) {
                    $scope.modal = modal;
                  });

                  //template for about

                $ionicModal.fromTemplateUrl('templates/modal2.html', {
                    scope: $scope
                  }).then(function(modal2) {
                    $scope.modal2 = modal2;

                  });


                    $ionicModal.fromTemplateUrl('templates/modal3.html', {
                    scope: $scope
                  }).then(function(modal3) {
                    $scope.modal3 = modal3;

                  });

                  $ionicModal.fromTemplateUrl('templates/modal4.html', {
                                              scope: $scope
                                            }).then(function(modal4) {
                                              $scope.modal4 = modal4;

                                            });

                  
                  
                //add a new post throught the template      
                   $scope.addpost = function(a,b){
                          if(a != null || b != null ){// check that post details are added or not
                             $http.get('http://teamsoft.tk/addpost.php?id='+window.localStorage.getItem("selectitemid")+'&description='+a+'&image='+b+'&UID='+UID).then(function(response){

                             
                             var alertPopup = $ionicPopup.alert({
                              title:'User -add new posts',
                              template:'New post has been added successfully'
                              
                             });
                             $http.get('http://teamsoft.tk/updatenot.php').then(function(response){
                              
                             });
                             $state.go($state.current, {}, {reload: true});

 $scope.modal.hide();

                             });
                         }else{

                                    var alertPopup = $ionicPopup.alert({
                                    title:'Add a new post',
                                    template:'    Please fill the  group post details    '
                                    
                                   });
                                   $http.get('http://teamsoft.tk/updatenot.php').then(function(response){
                                    
                                   });
                                  
                                 }


                        

                   

                  };



  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });



 $scope.unfollow = function () {
                                  
                                   
                                      $http.get('http://teamsoft.tk/unfollow.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID).then(function(response){

             
                                       var alertPopup = $ionicPopup.alert({
                                        title:'Unfollow a group',
                                        template:'You have successfully unfollw the group'
                                        
                                       });
                                       $http.get('http://teamsoft.tk/updatenot.php?').then(function(response){
                                        
                                       });
                                       $scope.popover.hide();
                                     



                                       });
                                    
                                  };






$scope.closepopover  = function () {
 $scope.popover.hide();
   }; 



$scope.modal4hide  = function () {
 $scope.modal4.hide();
 $scope.modal3.show();
 $scope.popover.hide();
   }; 


$scope.modal2hide  = function () {
 $scope.modal2.hide();

 $scope.popover.hide();
   };

   $scope.modal3hide  = function () {
 $scope.modal3.hide();

 $scope.popover.hide();
   };  

$scope.filter  = function () {
 $scope.popover.hide();
   }; 


                //send the id to selectedGroupPost page
              //   $scope.descriptions = function (x) {
           //  $scope.modal3.hide();
                //       window.localStorage.setItem("selectitemgropid", x);    
                        //$scope.popover.hide(); 
                         //   };

              //model for a single post
  $scope.description = function (x) {
   window.localStorage.setItem("selectitemgropid", x);
           $http.get('http://teamsoft.tk/selectedgroppost.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID+'&postid='+x).then(function(response)
                            {
                                  $scope.names = response.data;
                            })
                            $http.get('http://teamsoft.tk/selectedgroppostcomment.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID+'&postid='+x).then(function(response)
                            {
                                  $scope.comment = response.data;
                                 
                                  
                            })
                            $scope.modal3.hide();
                      $scope.modalpost.show();
                       
                            };



                $ionicModal.fromTemplateUrl('templates/modalpost.html', {
                    scope: $scope
                  }).then(function(modalpost) {
                    $scope.modalpost = modalpost;
                 
                  
                  });
                  $scope.modalposthide  = function () {
                   $scope.modalpost.hide();
                   $state.go($state.current, {}, {reload: true});
                    $scope.modal3.show();
                     };

                          $scope.addcomment = function(a){
                          var PID=window.localStorage.getItem("selectitemgropid");
                          if(a != null ){ // check that post details are added or not
                                

                          

                                $http.get('http://teamsoft.tk/addcomment.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID+'&postid='+PID+'&comment='+a).then(function(response){

                                 $scope.description(PID);

                                 });


                              
                             }
                        };
                         $scope.deletecomment = function(a){
                           var GPID=window.localStorage.getItem("selectitemgropid");
                          $http.get('http://teamsoft.tk/deletecomments.php?id='+window.localStorage.getItem("selectitemid")+'&postid='+GPID+'&commentid='+a).then(function(response)
                                                                             {
                                 
                             $scope.description(GPID);
                                  
                                                    })
                                                    };

                  // Show the action sheet
                  $scope.show = function(pid) {

                       // Show the action sheet
                       var hideSheet = $ionicActionSheet.show({
                         buttons: [
                           { text: '<b>Edit</b>' },
                          { text: '<b>Delete</b>' },
                         ],
                         
                         cancelText: 'Cancel',
                         cancel: function() {
                              // add cancel code..
                            },

                            buttonClicked: function(index) {
                                    switch (index){
                                          case 0 :
                                            //Handle edit Button
                                          
                                           
                                         $scope.modal4.show();
                                         $scope.modal3.show();
                                           $http.get('http://teamsoft.tk/subpostsEdit.php?id='+window.localStorage.getItem("selectitemid")+'&pid='+pid+'&UID='+UID).success(function(data)
                                                   {
                                                       
                                      
                var markers = [];
                markers = data;
                $scope.postid = markers[0].postid;
                $scope.groupid = markers[0].groupid;
                $scope.descriptions = markers[0].descriptions;
                $scope.image = markers[0].image;
               
            
                                                    })
$scope.editpost  = function (descriptions,image,a) {
  $http.post("http://teamsoft.tk/editposts.php?id="+window.localStorage.getItem("selectitemid")+"&description="+descriptions+"&image="+image+"&UID="+UID+"&pid="+a).success(function(
                            data){

                               $scope.modal4.hide();
                           $scope.modal3.show();

                             });
   }; 
                                           
                                            return true;
                                          case 1 :
                                            //Handle delete Button
                                              var confirmPopup = $ionicPopup.confirm({
                                               title: 'Delete',
                                               template: 'Are you sure you want to delete this?'
                                             });
                                           
                                             confirmPopup.then(function(res) {
                                               if(res) {
                                                  $http.get('http://teamsoft.tk/deleteposts.php?id='+window.localStorage.getItem("selectitemid")+'&pid='+pid).then(function(response)
                                                   {
                                 
                                                       $scope.popover.hide();
                                    $state.go($state.current, {}, {reload: true});
                                  
                                                    })
                                                  
                                                 console.log('Deleted !');
                                               } else {
                                                 console.log('Deletion canceled !');
                                               }
                                             });
                                            return true;
                                        }
                                            //Close the model?
                                        }
                       });

                       // For example's sake, hide the sheet after two seconds
                       $timeout(function() {
                         hideSheet();
                       }, 10000);

                     };



})














.controller('groupCtrl', function($http,$scope,$state) {
var UID=window.localStorage.getItem("id");
//pass the group id to the cricketPost.html page
             $scope.getid = function (x) {
                        
                            window.localStorage.setItem("selectitemid", x);
                          
                        };
//pass the group id to the followCricket.html page
             $scope.getid2 = function (x) {
                        
                            window.localStorage.setItem("selectitemiid", x);
                          
                        };

//serch new groups
            $scope.searchlist = function(searching){
                if(searching == null){

                      $http.get('http://teamsoft.tk/getgroups5.php?UID='+UID).then(function(response)
                      {
                            $scope.names = response.data;
                            
                      })
                }else{
                      $http.get('http://teamsoft.tk/getgroups3.php?name='+searching+'&UID='+UID).then(function(response)
                      {
                            $scope.names = response.data;
                            
                      })
                }
            }

//get the sub group details which user following from the database
                      $scope.$on('$ionicView.enter', function() {
                      $http.get('http://teamsoft.tk/getgroups5.php?UID='+UID).then(function(response)
                      {
                            $scope.names = response.data;
                           
                            
                      })

            });

//direct to adminGroup.html page
            $scope.backTogroup = function(){
                    $state.transitionTo("adminGroup");
                }
})
  
 








.controller('adminGroupCtrl', function($http,$scope,$state) {
var UID=window.localStorage.getItem("id");
//search groups
          $scope.searchlist = function(searching){
                if(searching == null){

                $http.get('http://teamsoft.tk/getgroups.php?UID='+UID).then(function(response)
                {
                      $scope.names = response.data;
                      
                })
                }else{
                $http.get('http://teamsoft.tk/serachgroup.php?name='+searching+'&UID='+UID).then(function(response)
                {
                      $scope.names = response.data;
                      
                })
                }
          }

//load the all current groups to the admin page
          $scope.$on('$ionicView.enter', function() {
                $http.get('http://teamsoft.tk/getgroups.php?UID='+UID).then(function(response)
                {
                      $scope.names = response.data;
                     
                      
                })

          });


//derect to the group.html page
          $scope.backTogroup = function(){
                  $state.transitionTo("group");
              }

//derect to the adminCreateGroup.html page
          $scope.createGroup = function(){
                  $state.transitionTo("adminCreateAGroup");
              }

})
   










   

   
.controller('followCricketCtrl', function($scope,$state,$http,$ionicPopup) {
 var UID=window.localStorage.getItem("id");
//load group details
            $scope.$on('$ionicView.enter', function() {

//get the details about the group members from the details
                  $http.get('http://teamsoft.tk/subgrpmember.php?id='+window.localStorage.getItem("selectitemiid")+'&UID='+UID).then(function(response)
                  {
                        $scope.names = response.data;
                       
//get the details about the group from the details                        
                  })
                  $http.get('http://teamsoft.tk/subgrp.php?id='+window.localStorage.getItem("selectitemiid")+'&UID='+UID).then(function(response)
                  {
                        $scope.gp = response.data;
                       
                        
                  })

            });

//pass the group id to the cricketPost.html page and save the follow details in the database
             $scope.getid = function (x) {
                        
                            window.localStorage.setItem("selectitemid", x);

                            $http.get('http://teamsoft.tk/follow.php?id='+x+'&UID='+UID).then(function(response){

             
                           var alertPopup = $ionicPopup.alert({
                            title:'Follow group',
                            template:'Now you are a member of this group'
                            
                           });
                           $http.get('http://teamsoft.tk/updatenot.php').then(function(response){
                            
                           });
                           $state.transitionTo('cricketPost');



                           });
                          
                        };

//direct to the group page
             $scope.backTogroup = function(){
                    $state.transitionTo("group");
                }


})














.controller('adminCreateAGroupCtrl', function($scope,$http,$ionicPopup,$state) {
var UID=window.localStorage.getItem("id");
          $scope.createGroup = function(){
                  $state.transitionTo("adminCreateCommittee");
              }
//save the new group details in the database
           $scope.create = function(a,b,c,d){
                if(a != null && b != null && c != null && d != null){// check that post details are added or not
           //check group name is already avilable
                    $http.get('http://teamsoft.tk/checkgroupname.php?name='+a+'&UID='+UID).then(function(response){
                      
                       $scope.id = response.data; 
                       if (Array.isArray($scope.id)) {  //check group name is already avilable
                         var alertPopup = $ionicPopup.alert({
                          title:'Admin -Create a group',
                          template:'    The name of the new group is already available. Please add a new name for the group    '
                          
                         });
                         $http.get('http://teamsoft.tk/updatenot.php').then(function(response){
                          
                         });



                       }else{
                           $http.get('http://teamsoft.tk/addgroupname.php?name='+a+'&Description='+b+'&category='+c+'&image='+d+'&UID='+UID).then(function(response){
                           if(response.data=="true"){
                           var alertPopup = $ionicPopup.alert({
                            title:'Admin -Create a group',
                            template:'New group has been created successfully'
                            
                           });
                           $http.get('http://teamsoft.tk/updatenot.php').then(function(response){
                            
                           });
                           $state.transitionTo('adminGroup');

                           }

                           });
                         }
                         })
                 }else{

                    var alertPopup = $ionicPopup.alert({
                    title:'Admin -Create a group',
                    template:'    Please fill all fields to create a new group    '
                    
                   });
                   $http.get('http://teamsoft.tk/updatenot.php').then(function(response){
                    
                   });
                  
                 }
           };

})








.controller('groupPostCtrl', function($scope,$http,$ionicPopup,$state,$ionicModal) {
var UID=window.localStorage.getItem("id");
    
                      $scope.$on('$ionicView.enter', function() {
                      $http.get('http://teamsoft.tk/serachgrouppost.php?UID='+UID).then(function(response)
                      {
                         

                        $scope.names = response.data;                      
                       
                                             
                      })


                      });
//model for a single post
  $scope.description = function (x) {
   window.localStorage.setItem("grouppostid", x);
           $http.get('http://teamsoft.tk/selectedgroppost.php?id='+"-1"+'&UID='+UID+'&postid='+x).then(function(response)
                            {
                                  $scope.names = response.data;
                            })
                            $http.get('http://teamsoft.tk/selectedgroppostcomment.php?id='+"-1"+'&UID='+UID+'&postid='+x).then(function(response)
                            {
                                  $scope.comment = response.data;
                                 
                                  
                            })
                      $scope.modal.show();
                       
                            };



                $ionicModal.fromTemplateUrl('templates/modal.html', {
                    scope: $scope
                  }).then(function(modal) {
                    $scope.modal = modal;
                 
                  
                  });
                  $scope.modalhide  = function () {
                   $scope.modal.hide();
                   $state.go($state.current, {}, {reload: true});
                     };

                          $scope.addcomment = function(a){
                          var PID=window.localStorage.getItem("grouppostid");
                          if(a != null ){ // check that post details are added or not
                                

                          

                                $http.get('http://teamsoft.tk/addcomment.php?id='+"-1"+'&UID='+UID+'&postid='+PID+'&comment='+a).then(function(response){

                                 $scope.description(PID);

                                 });


                              
                             }
                        };
                         $scope.deletecomment = function(a){
                           var GPID=window.localStorage.getItem("grouppostid");
                          $http.get('http://teamsoft.tk/deletecomments.php?id='+"-1"+'&postid='+GPID+'&commentid='+a).then(function(response)
                                                                             {
                                 
                             $scope.description(GPID);
                                  
                                                    })
                                                    };
//direct to the calender
                        $scope.addCalendar = function(){
                              $state.transitionTo("calendar");
                          }
//direct to the message page
                        $scope.addMsg = function(){
                              $state.transitionTo("allmsg");
                        }
//direct to the notification page
                        $scope.addNotif = function(){
                              $state.transitionTo("notifications");
                        }

//add a new post to the batch group
                         $scope.addpost = function(a,b){
                          if(a == "Say something" && b == "Image" ){ // check that post details are added or not
                                

                                  var alertPopup = $ionicPopup.alert({
                                title:'Add a new post',
                                template:'    Please add the new group post details    '
                                
                               });
                               $http.get('http://teamsoft.tk/updatenot.php?').then(function(response){
                                
                               });


                          }else{

                                $http.get('http://teamsoft.tk/addpost2.php?description='+a+'&image='+b+'&UID='+UID).then(function(response){

                                 
                                 var alertPopup = $ionicPopup.alert({
                                  title:'User -add new posts',
                                  template:'New post has been added successfully'
                                  
                                 });
                                 $http.get('http://teamsoft.tk/updatenot.php').then(function(response){
                                  
                                 });
                                 $state.transitionTo('groupPost');

                                 });


                              
                             }
                       };
})












.controller('inviteFriendsCtrl', function($scope) {


})







   
.controller('followAGroupCtrl', function($scope,$state) {
 $scope.addPost = function(){
        $state.transitionTo("addAPost");
    }


})
   




.controller('NotificationsCtrl', function($scope) {



})

































































 
 //sanda controllers

  //User Controllers

    //Display Slider Controller.
    .controller('slider', function($scope, $ionicSlideBoxDelegate, $http,
        $state) {
        var role = window.localStorage.getItem("role");
        var CusID = window.localStorage.getItem("id");
        //Check whether the disable button is on or off
        $http.get("http://teamsoft.tk/getDisableadd.php?CusID="+CusID).success(
                  function(data) {
          $scope.addStatus = data[0].Status;
          $scope.adminStatus = data[0].Admin;
          if(role=="member" || role=="rep"){
            if($scope.addStatus == 1 && $scope.adminStatus == 1){
              $scope.slide = 1;
              $scope.slideSpecial = -1;
            }else if($scope.addStatus == -1 && $scope.adminStatus == 1){
              $scope.slideSpecial = -1;
              $scope.slide = -1;
            }else if($scope.addStatus == 1 && $scope.adminStatus == -1){
              $scope.slide = 1;
              $scope.slideSpecial = -1;
            }else if($scope.addStatus == -1 && $scope.adminStatus == -1){
              $scope.slide = -1;
              $scope.slideSpecial = 1;
            }
          }else if(role=="admin"){
            if($scope.addStatus == 1 && $scope.adminStatus == 1){
              $scope.slide = 1;
              $scope.slideSpecial = -1;
            }else if($scope.addStatus == -1 && $scope.adminStatus == 1){
              $scope.slide = -1;
              $scope.slideSpecial = -1;
            }else if($scope.addStatus == 1 && $scope.adminStatus == -1){
              $scope.slide = 1;
              $scope.slideSpecial = -1;
            }else if($scope.addStatus == -1 && $scope.adminStatus == -1){
              $scope.slide = -1;
              $scope.slideSpecial = -1;
            }
          }
        });
        /*Enter this inside the above if statements*/
        //Show all the banners in the slider
        $http.get("http://teamsoft.tk/showBanner.php").success(function(
            data) {
            $scope.Banner = data;
            $ionicSlideBoxDelegate.update();
        });

        $http.get("http://teamsoft.tk/showBannerSpecila.php").success(function(
            data) {
            $scope.BannerSpecial = data;
            $ionicSlideBoxDelegate.update();
        });

        $scope.gotoSlideAdd = function(IDAdd) {
          if(role=="admin"){
            $state.go('AdmintabsController.slideAdd', {
                idA: IDAdd
            });
          }
          else if(role=="member" || role=="rep"){
            $state.go('tabsController.slideAdd', {
                idA: IDAdd
            });
          }
      };
    })

    //Show the favourite advertisement to corresponding users
    .controller('favAddListCntrl', function($scope, $http, $ionicPopup) {
        var CusID = window.localStorage.getItem("id");
        loaddata();
        //Show the advertisement
        function loaddata() {
            //Get the advertisment from the table
            $http.get(
                "http://teamsoft.tk/showFavourite.php?CusID=" +
                CusID).success(function(data) {
                $scope.items = data;
            });
        };
        //refresh the item list by pulling
        $scope.doRefresh = function() {
          //Load the advertisement
          $http.get(
                "http://teamsoft.tk/showFavourite.php?CusID=" +
                CusID).success(function(data) {
                $scope.items = data;
          })
         .finally(function() {
           // Stop the ion-refresher from spinning
           $scope.$broadcast('scroll.refreshComplete');
         })
        };

        $scope.deleteFavourite = function(thissID) {
          //Delete the Advertisment
          var confirmPopup = $ionicPopup.confirm({
                title: 'Remove Advertisement'
            });
            confirmPopup.then(function(res) {
                if (res) {
                  //delete the current advertisment data from the table
                    $http.post(
                        "http://teamsoft.tk/deletefavouriteAdd.php?thissID=" +
                        thissID+"&CusID=" +CusID).success(function(data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Advertiesement Removed'
                        });
                        window.location.reload(true);
                    });
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Advertisement remove failed'
                    });
                }
            });
        } 
    })


    //Controller for facebook card in the search
    .controller('facebookProfSearchCtrl', function($timeout, $state, $time$scope, $http, $ionicActionSheet) {
      var CusID = window.localStorage.getItem("id");
        //Get the business card details from the table
        $http.get("http://teamsoft.tk/showfacebookProf.php?CusID=" +
            CusID).success(function(data) {
            var card = [];
            card = data;
            if(card[0]=="null")
            {
              $scope.check = -1;
            }else{
              $scope.check = 1;
              $scope.FBId = card[0].FBId;
              $scope.Name = card[0].Name;
              $scope.Picture = card[0].Picture;
              $scope.Gender = card[0].Gender;
              if (card[0].Email=="undefined") {
                $scope.Email = "No Email is given";
              }else{
                $scope.Email = card[0].Email;
              }
              $scope.Age = card[0].Age;
              $scope.Link = card[0].Link;
          }
        })

          $scope.show = function() {
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
              buttons: [
                { text: 'LinkedIn Business Card' },
                { text: 'Manual Business Card' }
              ],
              titleText: 'Select Business card',
              cancelText: 'Cancel',
              cancel: function() {
                  // add cancel code..
              },
              buttonClicked: function(index) {
                if (index==0) {
                  $state.go("tabsController2.linked", {}, {reload: true});
                }else{
                  $state.go("tabsController2.buissnessCardsearch", {}, {reload: true});
                }
                console.log('BUTTON CLICKED', index);
                 return true;
              }
            });
            //hide the sheet after two seconds
            $timeout(function() {
              hideSheet();
            }, 4000);
          }


         //Redirrect to the facebook Profile
          $scope.FacebookUrl = function(Link){
            window.open(Link, "_system", "location=yes");
          }     
    })

    //Controller for facebook card method
    .controller('facebookProfPageCtrl', function($timeout, $state, $scope, $http, $ionicActionSheet) {
      var CusID = window.localStorage.getItem("id");
        //Get the business card details from the table
        $http.get("http://teamsoft.tk/showfacebookProf.php?CusID=" +
            CusID).success(function(data) {
            var card = [];
            card = data;
            if(card[0]=="null")
            {
              $scope.check = -1;
            }else{
              $scope.check = 1;
              $scope.FBId = card[0].FBId;
              $scope.Name = card[0].Name;
              $scope.Picture = card[0].Picture;
              $scope.Gender = card[0].Gender;
              if (card[0].Email=="undefined") {
                $scope.Email = "No Email is given";
              }else{
                $scope.Email = card[0].Email;
              }
              $scope.Age = card[0].Age;
              $scope.Link = card[0].Link;
          }
        })

          $scope.show = function() {
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
              buttons: [
                { text: 'LinkedIn Business Card' },
                { text: 'Manual Business Card' }
              ],
              titleText: 'Select Business card',
              cancelText: 'Cancel',
              cancel: function() {
                  // add cancel code..
              },
              buttonClicked: function(index) {
                if (index==0) {
                  $state.go("tabsController2.linked", {}, {reload: true});
                }else{
                  $state.go("tabsController2.buissnessCard", {}, {reload: true});
                }
                console.log('BUTTON CLICKED', index);
                 return true;
              }
            });
            //hide the sheet after two seconds
            $timeout(function() {
              hideSheet();
            }, 4000);
          }


         //Redirrect to the facebook Profile
          $scope.FacebookUrl = function(Link){
            window.open(Link, "_system", "location=yes");
          }     
    })

    //Controller for Search page of Linkedin Profile
    .controller('linkedinPageSearchCtrl', function($timeout, $state, $scope, $http, $ionicActionSheet) {
        var CusID = window.localStorage.getItem("id");
        //Get the business card details from the table
        $http.get("http://teamsoft.tk/showLinkedin.php?CusID=" +
            CusID).success(function(data) {
            var card = [];
            card = data;
            if(card[0]=="null")
            {
              $scope.check = -1;
            }else{
              $scope.check = 1;
              $scope.Linkedid = card[0].Linkedid;
              $scope.firstName = card[0].firstName;
              $scope.lastName = card[0].lastName;
              if (card[0].headline=="undefined") {
                $scope.headline = "No Profession is given";
              }else{
                $scope.headline = card[0].headline;
              }
              $scope.photo = card[0].photo;
              $scope.numConnections = card[0].numConnections;
              $scope.industry = card[0].industry;
              $scope.emailAddress = card[0].emailAddress;
              if (card[0].summary=="undefined") {
                $scope.summary = "No Summery is given";
              }else{
                $scope.summary = card[0].summary;
              }
              $scope.location = card[0].location;
              if (card[0].specialties=="undefined") {
                $scope.specialties = "No Specialties are given";
              }else{
                $scope.specialties = card[0].specialties;
              }
              $scope.publicProfileUrl = card[0].publicProfileUrl;
              if (card[0].positions=="undefined") {
                $scope.positions = "No positions are given";
              }else{
                $scope.positions = card[0].positions;
              }
          }
        })

          $scope.show = function() {
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
              buttons: [
                { text: 'Manual Business Card' },
                { text: 'Facebook Business Card' }
              ],
              titleText: 'Select Business card',
              cancelText: 'Cancel',
              cancel: function() {
                  // add cancel code..
              },
              buttonClicked: function(index) {
                if (index==0) {
                  $state.go("tabsController2.buissnessCardsearch", {}, {reload: true});
                }else{
                  $state.go("tabsController2.facebookProfSearch", {}, {reload: true});
                }
                console.log('BUTTON CLICKED', index);
                 return true;
              }
            });
            //hide the sheet after two seconds
            $timeout(function() {
              hideSheet();
            }, 4000);
          }


    })

    //Controller for Search page of businesscard
    .controller('buissnessCardSearchCtrl', function($timeout, $state, $scope, $http, $ionicActionSheet) {
        var CusID = window.localStorage.getItem("id");
        //Get the business card details from the table
        $http.get("http://teamsoft.tk/showBuissnessCard.php?CusID=" +
            CusID).success(function(data) {
            var card = [];
            card = data;
            if(card[0]=="null")
            {
              $scope.check = -1;
            }else{
              $scope.check = 1;
              $scope.ID = card[0].ID;
              $scope.Image = card[0].Image;
              if (card[0].Profession=="undefined") {
                $scope.Profession = "No Profession is given";
              }else{
                $scope.Profession = card[0].Profession;
              }
              if (card[0].Skills=="undefined") {
                $scope.Skills = "No Skills are given";
              }else{
                $scope.Skills = card[0].Skills;
              }
              if (card[0].Awards=="undefined") {
                $scope.Awards = "No Awards are given";
              }else{
                $scope.Awards = card[0].Awards;
              }
              if (card[0].WorkPlace=="undefined") {
                $scope.WorkPlace = "No WorkPlace is given";
              }else{
                $scope.WorkPlace = card[0].WorkPlace;
              }
              if (card[0].Address=="undefined") {
                $scope.Address = "No workplace Address is given";
              }else{
                $scope.Address = card[0].Address;
              }
              if (card[0].Contact==0) {
                $scope.Contact = "No workplace Contact is given";
              }else{
                $scope.Contact = card[0].Contact;
              }
              if (card[0].Email=="undefined") {
                $scope.Email = "No Email is given";
              }else{
                $scope.Email = card[0].Email;
              }
              if (card[0].WorkHour=="undefined") {
                $scope.WorkHour = "No WorkHours are given";
              }else{
                $scope.WorkHour = card[0].WorkHour;
              }
          }
        })

          $scope.show = function() {
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
              buttons: [
                { text: 'LinkedIn Business Card' },
                { text: 'Facebook Business Card' }
              ],
              titleText: 'Select Business card',
              cancelText: 'Cancel',
              cancel: function() {
                  // add cancel code..
              },
              buttonClicked: function(index) {
                if (index==0) {
                  $state.go("tabsController2.linkedSearch", {}, {reload: true});
                }else{
                  $state.go("tabsController2.facebookProfSearch", {}, {reload: true});
                }
                console.log('BUTTON CLICKED', index);
                 return true;
              }
            });
            //hide the sheet after two seconds
            $timeout(function() {
              hideSheet();
            }, 4000);
          }


    })


    //Display LinkedIn profile card Controller
    .controller('linkedinPageCtrl', function($timeout, $state, $scope, $http, $ionicActionSheet) {
      var CusID = window.localStorage.getItem("id");
        //Get the business card details from the table
        $http.get("http://teamsoft.tk/showLinkedin.php?CusID=" +
            CusID).success(function(data) {
            var card = [];
            card = data;
            if(card[0]=="null")
            {
              $scope.check = -1;
            }else{
              $scope.check = 1;
              $scope.Linkedid = card[0].Linkedid;
              $scope.firstName = card[0].firstName;
              $scope.lastName = card[0].lastName;
              if (card[0].headline=="undefined") {
                $scope.headline = "No Profession is given";
              }else{
                $scope.headline = card[0].headline;
              }
              $scope.photo = card[0].photo;
              $scope.numConnections = card[0].numConnections;
              $scope.industry = card[0].industry;
              $scope.emailAddress = card[0].emailAddress;
              if (card[0].summary=="undefined") {
                $scope.summary = "No Summery is given";
              }else{
                $scope.summary = card[0].summary;
              }
              $scope.location = card[0].location;
              if (card[0].specialties=="undefined") {
                $scope.specialties = "No Specialties are given";
              }else{
                $scope.specialties = card[0].specialties;
              }
              $scope.publicProfileUrl = card[0].publicProfileUrl;
              if (card[0].positions=="undefined") {
                $scope.positions = "No positions are given";
              }else{
                $scope.positions = card[0].positions;
              }
          }
        });

          $scope.show = function() {
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
              buttons: [
                { text: 'Manual Business Card' },
                { text: 'Facebook Business Card' }
              ],
              titleText: 'Select Business card',
              cancelText: 'Cancel',
              cancel: function() {
                  // add cancel code..
              },
              buttonClicked: function(index) {
                if (index==0) {
                  $state.go("tabsController2.buissnessCard", {}, {reload: true});
                }else{
                  $state.go("tabsController2.facebookProf", {}, {reload: true});
                }
                console.log('BUTTON CLICKED', index);
                 return true;
              }
            });
            //hide the sheet after two seconds
            $timeout(function() {
              hideSheet();
            }, 4000);
          }


            //Redirrect to the Linkedin Profile
            $scope.linkedinUrl = function(publicProfileUrl){
              window.open(publicProfileUrl, "_system", "location=yes");
            }
    })

    
    //User Settings Controller
    .controller('settingsBCtrl', function($scope,$http,$state,$ionicPopup) {
      var CusID = window.localStorage.getItem("id");
      //Check whether the Disabled button is on or off
      $http.get("http://teamsoft.tk/getDisableadd.php?CusID="+CusID).success(function(
            data) {
            $scope.getdata = data[0].Status;
            if($scope.getdata == -1) {
              $scope.addSwitch = true;
            }
            else if ($scope.getdata == 1){
              $scope.addSwitch = false;
            }
      });
      //Action of the toggle change button
      $scope.toggleChange = function(){
        if($scope.addSwitch == false) {
          $scope.addSwitch = true;
          var addStatus = -1;
          //Update the the status to enable
          $http.post("http://teamsoft.tk/DisableAddUpdate.php?CusID="+CusID+"&addStatus="+addStatus).success(
                function(data) {
                  var alertPopup = $ionicPopup.alert({
                    title: 'The Changes will be apply from the next login'
                });
          });
        }
        else{
          $scope.addSwitch = false;
          var addStatus = 1;
          //Update the the status to disable
          $http.post("http://teamsoft.tk/DisableAddUpdate.php?CusID="+CusID+"&addStatus="+addStatus).success(
                function(data) {
                  var alertPopup = $ionicPopup.alert({
                    title: 'The Changes will be apply from the next login'
                });
          });
        }
      }

      $scope.launch = function() {
        window.open("http://teamsoft.tk/LinkedIn.php?memberid="+CusID, "_system", "location=yes");
      }

      $scope.launchfb = function() {
        window.open("http://teamsoft.tk/facebookprof.php?memberid="+CusID, "_system", "location=yes");
      }
    })

    //Controller for notifications
    .controller('notifyCtrl',function($scope,$http,$state,$ionicPopup) {
      var CusID = window.localStorage.getItem("id");
      //Get all the notifications
      $http.get("http://teamsoft.tk/notificationUser.php?CusID="+CusID).success(
                function(data) {
                    $scope.notifications = data;
                });
      //Action for clear the notification 
      $scope.ClearNotifications = function() {
        var confirmPopup = $ionicPopup.confirm({
        title: 'You want to CLear all the Notifications?'
        });
        confirmPopup.then(function(res) {
          if (res) {
            $http.post(
              //Delete all the notifications in the table
            "http://teamsoft.tk/deleteNotifications.php").success(function(data) {
              var alertPopup = $ionicPopup.alert({
              title: 'Notifications Cleared'
              });
            });
            window.location.reload(true);
            $state.go("tabsController2.addlist", {}, {reload: true});
          } else {
            var alertPopup = $ionicPopup.alert({
            title: 'Error'
            });
          }
        });
      }
      //Action to refresh by pull
      $scope.doRefresh = function() {
        //Load new notifications
        $http.get("http://teamsoft.tk/notificationUser.php?CusID="+CusID).success(
                function(data) {
                    $scope.notifications = data;
        })
         .finally(function() {
           // Stop the ion-refresher from spinning
           $scope.$broadcast('scroll.refreshComplete');
         });
      };
    })


    //Show full view of the Advertisement on the sliders
    .controller('slideAddCtrl', function($state, $scope, $http, $stateParams, $ionicPopup) {
        var CusID = $stateParams.idA;
        var CusID1 = window.localStorage.getItem("id");
        //Load the advertisement
        $http.get("http://teamsoft.tk/addFullShow.php?CusID=" + CusID).success(
            function(data) {
                var card = [];
                card = data;
                $scope.IDAdd = card[0].IDAdd;
                $scope.Selected = card[0].Type;
                $scope.Title = card[0].Title;
                $scope.Image = card[0].Image;
                $scope.Description = card[0].Description;
                $scope.Contact = card[0].ContactNo;
                $scope.Email = card[0].Email;
                $scope.SDate = card[0].StartDate;
                $scope.EDate = card[0].EndDate;
                $scope.CurrentDate = card[0].CDate;
        });

          //Check the logged user
          var role = window.localStorage.getItem("role");
          if(role=="admin"){
            $scope.mem = 0;
          }else if(role=="member" || role=="rep"){
            $scope.mem = 1;
          }

        //Set the advretisement status
        $http.get("http://teamsoft.tk/checkFavouriteadd.php?CusID="+CusID1+"&Addid="+CusID).success(
            function(data) {
                var fav = [];
                fav = data;
                if (fav[0] == 1) {
                  $scope.check = 1;
                }else{
                  $scope.check = 0;
                }
        });

        $scope.favourite=function(){
          var confirmPopup = $ionicPopup.confirm({
                title: 'Add to favourite'
            });
            confirmPopup.then(function(res) {
                if (res) {
                  //Add to favourite
                    $http.post(
                        "http://teamsoft.tk/FavouriteAdd.php?CusID=" +
                        CusID1+"&Addid="+CusID).success(function(data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Added to favourite'
                        });
                        window.location.reload(true);
                    });
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Retry Adding'
                    });
                }
            });
        }

        $scope.favouriteRemove=function(){
          var confirmPopup = $ionicPopup.confirm({
                title: 'Remove from favourite'
            });
            confirmPopup.then(function(res) {
                if (res) {
                  //Add to favourite
                    $http.post(
                        "http://teamsoft.tk/FavouriteAddRemove.php?CusID=" +
                        CusID1+"&Addid="+CusID).success(function(data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Removed from favourite'
                        });
                        window.location.reload(true);
                    });
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Retry Removing'
                    });
                }
            });
        }
    })


    //Send advertisement to the admin Controller
    .controller('sendAdvertisementPageCtrl', function($scope, $http, $state,
        $ionicPopup) {
        var CusID = window.localStorage.getItem("id");
        $scope.date = new Date();
        //Action for sending advertisment
        $scope.sendAdvertiesement = function(title, Selected, Image,
            description, contact, email, SDate, EDate) {
          //Validation part
            if (title == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter The title'
                });
            }
            /*else if(Image == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Upload the Banner'
      });
    }*/
            else if (description == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'say something about the Advertiesement'
                });
            } else if (contact == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Contact no'
                });
            } else if (contact.charAt(0) != 0) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Contact should begins with 0'
                });
            }else if (email == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter the Email'
                });
            } else {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Send the Advertisement'
                });
                confirmPopup.then(function(res) {
                    if (res) {
                        $http.post(
                          //Send the posted advertisment to the table
                            "http://teamsoft.tk/sendUserAdvertisement.php?title=" +
                            title + "&Selected=" + Selected +
                            "&Image=" + Image +
                            "&description=" + description +
                            "&contact=" + contact +
                            "&email=" + email + "&SDate=" +
                            SDate + "&EDate=" + EDate +
                            "&MemberId=" + CusID).success(
                            function(data) {
                                var alertPopup =
                                    $ionicPopup.alert({
                                        title: 'Successfully Send'
                                    });
                                window.location.reload(true);
                                $state.go("tabsController2.addlist", {}, {reload: true});
                            });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Sending Failed'
                        });
                    }
                });
            }
        };
    })

    //Show the advertisement to each user that each user has posted respectively
    .controller('AddUserListCntrl', function($scope, $http, $ionicPopup, $ionicSideMenuDelegate) {
        var CusID = window.localStorage.getItem("id");
        loaddata();
        //Show the advertisement
        function loaddata() {
            //Get the advertisment from the table
            $http.get(
                "http://teamsoft.tk/addUserListView.php?CusID=" +
                CusID).success(function(data) {
                $scope.items = data;
            });
        };
        //refresh the item list by pulling
        $scope.doRefresh = function() {
          //Load the advertisement
          $http.get(
                "http://teamsoft.tk/addUserListView.php?CusID=" +
                CusID).success(function(data) {
                $scope.items = data;
          })
         .finally(function() {
           // Stop the ion-refresher from spinning
           $scope.$broadcast('scroll.refreshComplete');
         })
        };

        $scope.deletetheAdd = function(thissID) {
          //Delete the Advertisment
          var confirmPopup = $ionicPopup.confirm({
                title: 'Remove Advertisement'
            });
            confirmPopup.then(function(res) {
                if (res) {
                  //delete the current advertisment data from the table
                    $http.post(
                        "http://teamsoft.tk/deleteUserAddvertisement.php?thissID=" +
                        thissID).success(function(data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Advertiesement Removed'
                        });
                        window.location.reload(true);
                    });
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Advertisement remove failed'
                    });
                }
            });
        }

        $scope.toggleLeftSideMenu = function() {
          $ionicSideMenuDelegate.toggleLeft();
        }
    })

    //Show Business card Details Controller
    .controller('buissnessCardCtrl', function($scope, $http, $state, $ionicActionSheet, $timeout) {
        var CusID = window.localStorage.getItem("id");
        //Get the business card details from the table
        $http.get("http://teamsoft.tk/showBuissnessCard.php?CusID=" +
            CusID).success(function(data) {
            var card = [];
            card = data;
            if(card[0]=="null")
            {
              $scope.check = -1;
            }else{
              $scope.check = 1;
              $scope.ID = card[0].ID;
              $scope.Image = card[0].Image;
              if (card[0].Profession=="undefined") {
                $scope.Profession = "No Profession is given";
              }else{
                $scope.Profession = card[0].Profession;
              }
              if (card[0].Skills=="undefined") {
                $scope.Skills = "No Skills are given";
              }else{
                $scope.Skills = card[0].Skills;
              }
              if (card[0].Awards=="undefined") {
                $scope.Awards = "No Awards are given";
              }else{
                $scope.Awards = card[0].Awards;
              }
              if (card[0].WorkPlace=="undefined") {
                $scope.WorkPlace = "No WorkPlace is given";
              }else{
                $scope.WorkPlace = card[0].WorkPlace;
              }
              if (card[0].Address=="undefined") {
                $scope.Address = "No workplace Address is given";
              }else{
                $scope.Address = card[0].Address;
              }
              if (card[0].Contact==0) {
                $scope.Contact = "No workplace Contact is given";
              }else{
                $scope.Contact = card[0].Contact;
              }
              if (card[0].Email=="undefined") {
                $scope.Email = "No Email is given";
              }else{
                $scope.Email = card[0].Email;
              }
              if (card[0].WorkHour=="undefined") {
                $scope.WorkHour = "No WorkHours are given";
              }else{
                $scope.WorkHour = card[0].WorkHour;
              }
          }

          $scope.show = function() {
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
              buttons: [
                { text: 'LinkedIn Business Card' },
                { text: 'Facebook Business Card' }
              ],
              titleText: 'Select Business card',
              cancelText: 'Cancel',
              cancel: function() {
                  // add cancel code..
              },
              buttonClicked: function(index) {
                if (index==0) {
                  $state.go("tabsController2.linked", {}, {reload: true});
                }else{
                  $state.go("tabsController2.facebookProf", {}, {reload: true});
                }
                console.log('BUTTON CLICKED', index);
                 return true;
              }
            });
            //hide the sheet after two seconds
            $timeout(function() {
              hideSheet();
            }, 4000);
          }

        });

        $scope.print = function() {
          if($cordovaPrinter.isAvailable()) {
            $cordovaPrinter.print("http://www.nraboy.com");
          } else {
            alert("Printing is not available on device");
          }
        }
            //refresh the Businesscard by pulling
            $scope.doRefresh = function() {
              //Load the businesscard
              $http.get("http://teamsoft.tk/showBuissnessCard.php?CusID=" +
            CusID).success(function(data) {
            var card = [];
            card = data;
            if(card[0]=="null")
            {
              $scope.check = -1;
            }else{
              $scope.check = 1;
              $scope.ID = card[0].ID;
              $scope.Image = card[0].Image;
              $scope.Profession = card[0].Profession;
              $scope.Skills = card[0].Skills;
              $scope.Awards = card[0].Awards;
              $scope.WorkPlace = card[0].WorkPlace;
              $scope.Address = card[0].Address;
              $scope.Contact = card[0].Contact;
              $scope.Email = card[0].Email;
              $scope.WorkHour = card[0].WorkHour;
          }
        })
               .finally(function() {
                 // Stop the ion-refresher from spinning
                 $scope.$broadcast('scroll.refreshComplete');
               });
            };
    })


    //Edit BusinessCard Controller
    .controller('editProfilePageCtrl', function($scope, $http, $ionicPopup,
        $state) {
        var CusID = window.localStorage.getItem("id");
        //Load the businesscard values to edit page
        $scope.BuissnessCardValues = function() {
          //Get the businesscard values
            $http.get(
                "http://teamsoft.tk/showBuissnessCard.php?CusID=" +
                CusID).success(function(data) {
                var card = [];
                card = data;
                $scope.Profession = card[0].Profession;
                $scope.Skills = card[0].Skills;
                $scope.Awards = card[0].Awards;
                $scope.WorkPlace = card[0].WorkPlace;
                $scope.Address = card[0].Address;
                $scope.Contact = card[0].Contact;
                $scope.Email = card[0].Email;
                $scope.WorkHour = card[0].WorkHour;
            })
        }
        //Confirm the editings of the businesscard
        $scope.BuissnessCardEdit = function(Profession, Skills, Awards,
            WorkPlace, Address, Contact, Email, WorkHour) {
            if (Profession == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Profession'
                });
            } else if (WorkPlace == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Work Place Name'
                });
            } else if (Address == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Work Place Address'
                });
            } else if (Contact == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Work Place Contact Details'
                });
            } else if (Contact.charAt(0) != 0) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Contact should begins with 0'
                });
            } else if (Email == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Work Place Email'
                });
            } else {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Your Current Details Will Be Changed'
                });
                confirmPopup.then(function(res) {
                    if (res) {
                      //Send the edited values to the business card
                        $http.get(
                            "http://teamsoft.tk/buissnessCardEdit.php?Profession=" +
                            Profession + "&Skills=" +
                            Skills + "&Awards=" + Awards +
                            "&WorkPlace=" + WorkPlace +
                            "&Address=" + Address +
                            "&Contact=" + Contact +
                            "&Email=" + Email +
                            "&WorkHour=" + WorkHour +
                            "&CusID=" + CusID).success(
                            function(data) {
                              var alertPopup =
                                $ionicPopup.alert({
                                  title: 'Successfully Changed'
                                });
                              $state.go("tabsController2.buissnessCard", {}, {reload: true});
                            });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                          title: 'Error Occurs'
                        });
                    }
                });
            }
        }
    })


    //First Registration form Of the Business Profile 
    .controller('about2PageCtrl', function($scope, $http, $state, $ionicPopup) {
        var CusID = window.localStorage.getItem("id");
        //Action for registering the professional details
        $scope.about2add = function(profession, skills, awards) {
            if (profession == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Profession'
                });
            } else {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Proceed with the Registration'
                });
                confirmPopup.then(function(res) {
                    if (res) {
                      //Send the details to the table
                        $http.post(
                            "http://teamsoft.tk/about2Add.php?ID=" +
                            CusID + "&profession=" +
                            profession + "&skills=" +
                            skills + "&awards=" + awards).success(
                            function(data) {
                                var alertPopup =
                                    $ionicPopup.alert({
                                        title: 'Successfully Registerd'
                                    });
                                $state.go("tabsController2.buissnessCard", {}, {reload: true});
                                $state.transitionTo("tabsController2.about3");
                            });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Registration ended with an Error'
                        });
                    }
                });
            }
        };
    })


    //Second Registration form Of the Business Profile
    .controller('about3PageCtrl', function($scope, $http, $state, $ionicPopup) {
        var CusID = window.localStorage.getItem("id");
        //Action for registering the working place details
        $scope.about3add = function(workPlace, address, contact, email,
            workHour) {
          //Validation process
            if (workPlace == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Working Place'
                });
            } else if (address == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Work Place Address'
                });
            } else if (contact == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter work place Contact'
                });
            } else if (contact.charAt(0) != 0) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Contact should begins with 0'
                });
            }else if (email == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Email'
                });
            } else {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Proceed with the Registration'
                });
                confirmPopup.then(function(res) {
                    if (res) {
                      //Sending registered data to the table
                        $http.post(
                            "http://teamsoft.tk/about3Add.php?workPlace=" +
                            workPlace + "&address=" +
                            address + "&contact=" + contact +
                            "&email=" + email +
                            "&workHour=" + workHour +
                            "&CusID=" + CusID).success(
                            function(data) {
                                var alertPopup =
                                    $ionicPopup.alert({
                                        title: 'Business Card Completed'
                                    });
                                $state.go("tabsController2.buissnessCard", {}, {reload: true});
                                window.location.reload(true);
                                $state.transitionTo("tabsController2.buissnessCard");
                            });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Registration ended with an Error'
                        });
                    }
                });
            }
        };
    })


    //Admin  

  //Show the advertisement to each user that each user has posted respectively
    .controller('AdminSpecialListCtrl', function($scope, $http, $ionicPopup, $ionicSideMenuDelegate) {
        var CusID = window.localStorage.getItem("id");
        loaddata();
        //Show the advertisement
        function loaddata() {
            //Get the advertisment from the table
            $http.get(
                "http://teamsoft.tk/adminSpecialList.php").success(function(data) {
                $scope.items = data;
            });
        };
        //refresh the item list by pulling
        $scope.doRefresh = function() {
          //Load the advertisement
          $http.get(
                "http://teamsoft.tk/adminSpecialList.php").success(function(data) {
                $scope.items = data;
          })
         .finally(function() {
           // Stop the ion-refresher from spinning
           $scope.$broadcast('scroll.refreshComplete');
         })
        };

        $scope.RemoveSpecial=function(IDAdd){
          var confirmPopup = $ionicPopup.confirm({
                title: 'Remove Speciality'
            });
            confirmPopup.then(function(res) {
                if (res) {
                  //Add to favourite
                    $http.post(
                        "http://teamsoft.tk/SpecialAddRemove.php?Addid="+IDAdd).success(function(data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Marked as Normal'
                        });
                        window.location.reload(true);    
                        $state.transitionTo("AdmintabsController.ushow");
                    });
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Retry Adding'
                    });
                }
            });
        }
    })


    //Show full view of the Advertisement of the pending advertisements
    .controller('pendingAddDetailCtrl', function($state, $scope, $http, $stateParams) {
        var CusID = $stateParams.idS;
        //Load the advertisement
        $http.get("http://teamsoft.tk/pendingAddDetails.php?CusID=" + CusID).success(
            function(data) {
                var card = [];
                card = data;
                $scope.SID = card[0].SID;
                $scope.Selection = card[0].Selection;
                $scope.title = card[0].title;
                $scope.Image = card[0].Image;
                $scope.Description = card[0].Description;
                $scope.Contact = card[0].ContactNo;
                $scope.Email = card[0].Email;
                $scope.SDate = card[0].StartDate;
                $scope.EDate = card[0].EndDate;
                $scope.sendDate = card[0].sendDate;
            });
    })


    //Admin settings controller
    .controller('settingsACtrl', function($scope, $http, $state, $ionicPopup) {
      var CusID = window.localStorage.getItem("id");
      //Check whether the Disabled button is on or off
      $http.get("http://teamsoft.tk/getDisableadd.php?CusID="+CusID).success(function(
            data) {
            $scope.getdata = data[0].Status;
            if($scope.getdata == -1) {
              $scope.addSwitch = true;
            }
            else if ($scope.getdata == 1){
              $scope.addSwitch = false;
            }
      });
      //Check whether the system add Disabled button is on or off
      $http.get("http://teamsoft.tk/getDisableadd.php?CusID="+CusID).success(function(
            data) {
            $scope.getdata1 = data[0].Admin;
            if($scope.getdata1 == -1) {
              $scope.addLock = true;
            }
            else if ($scope.getdata1 == 1){
              $scope.addLock = false;
            }
      });
      //Action of the toggle change button
      $scope.toggleChange = function(){
        if($scope.addSwitch == false) {
          $scope.addSwitch = true;
          var addStatus = -1;
          //Update the the status to enable
          $http.post("http://teamsoft.tk/DisableAddUpdate.php?CusID="+CusID+"&addStatus="+addStatus).success(
                function(data) {
                  var alertPopup = $ionicPopup.alert({
                    title: 'The Changes will be apply from the next login'
                });
          });
        }
        else{
          $scope.addSwitch = false;
          var addStatus = 1;
          //Update the the status to disable
          $http.post("http://teamsoft.tk/DisableAddUpdate.php?CusID="+CusID+"&addStatus="+addStatus).success(
                function(data) {
                  var alertPopup = $ionicPopup.alert({
                    title: 'The Changes will be apply from the next login'
                });
          });
        }
      }

      //Action of the toggle change button of the system add
      $scope.toggleLock = function(){
        if($scope.addLock == false) {
          $scope.addLock = true;
          var addStatus1 = -1;
          //Update the the status to enable
          $http.post("http://teamsoft.tk/DisableAddUpdate2.php?addStatus1="+addStatus1).success(
                function(data) {
                  var alertPopup = $ionicPopup.alert({
                    title: 'The Changes have been applied(The changes will appear on the admin profile from the next login)'
                });
          });
        }
        else{
          $scope.addLock = false;
          var addStatus1 = 1;
          //Update the the status to disable
          $http.post("http://teamsoft.tk/DisableAddUpdate2.php?addStatus1="+addStatus1).success(
                function(data) {
                  var alertPopup = $ionicPopup.alert({
                    title: 'The Changes have been applied(The changes will appear on the admin profile from the next login)'
                });
          });
        }
      }

      //Redirrect to google drive openning page
      $scope.openGoogleDrive = function(){
        window.open("http://teamsoft.tk/GoogleDrive.php", "_system", "width=400, height=350");
      }
    })


    //show list of pending Advertisement controller
    .controller('adminAddListCtrl', function($scope, $http, $state, $ionicPopup ,$window) {
        loadtable();
        //Load all the pending advertisment
        function loadtable() {
          //Get all the pending advertisment
            $http.get("http://teamsoft.tk/adminAddverList.php").success(
                function(data) {
                    $scope.advertiesement = data;
                });
        };
        //Accept advertisement
        $scope.AcceptAdd = function(SID) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Accept'
            });
            confirmPopup.then(function(res) {
                if (res) {
                  //Send the accepted advertisment data to table
                    $http.post(
                        "http://teamsoft.tk/AcceptAdver.php?SID=" +
                        SID).success(function(data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Advertiesement Accepted'
                        });
                    });
                    window.location.reload(true);
                    $state.transitionTo("AdmintabsController.ushow");
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Reject Acceptence'
                    });
                }
            });
        }
        //rejected advertisment
        $scope.RejectAdd = function(SID) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Reject'
                });
                confirmPopup.then(function(res) {
                    if (res) {
                      //Send the rejected advertisment data to table
                        $http.post(
                            "http://teamsoft.tk/RejectAdver.php?SID=" +
                            SID).success(function(data) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Advertiesement Rejected'
                            });
                        });
                        window.location.reload(true);
                        $state.transitionTo("AdmintabsController.ushow");
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Reject Rejection'
                        });
                    }
                });
            }

            //Goto the detail view page
            $scope.showDetails = function(SID) {
              $state.go('AdmintabsController.pendingAddDetail', {
                idS: SID
              });
            }

            //refresh the list by pulling
            $scope.doRefresh = function() {
              //Load the pending advertisment
            $http.get("http://teamsoft.tk/adminAddverList.php").success(
                function(data) {
                    $scope.advertiesement = data;
                })
             .finally(function() {
               // Stop the ion-refresher from spinning
               $scope.$broadcast('scroll.refreshComplete');
             });
  };
    })

    //Post advertisement Controller
    .controller('upostAdvertiesementCtrl', function($scope, $http, $state,
        $ionicPopup) {
        $scope.date = new Date();
      //post advertisment
        $scope.postAdvertiesement = function(Selected, Title, Image,
            Description, Contact, Email, SDate, EDate) {
          //Validation process
            if (Selected == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Select the type'
                });
            } else if (Title == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter The title'
                });
            }else if(Image == null){
                var alertPopup = $ionicPopup.alert({
                  title: 'Upload the Banner'
                });
              }
            else if (Description == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'say something about the Advertiesement'
                });
            } else if (Contact == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Contact no'
                });
            } else if (Contact.charAt(0) != 0) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Contact should begins with 0'
                });
            }else if (Email == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter the Email'
                });
            } else {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Proceed with the Registration'
                });
                confirmPopup.then(function(res) {
                    if (res) {
                      //Send posted advertisment data to the database
                        $http.post(
                            "http://teamsoft.tk/postAdvertiesement.php?Selected=" +
                            Selected + "&Title=" + Title +
                            "&Image=" + Image +
                            "&Description=" + Description +
                            "&Contact=" + Contact +
                            "&Email=" + Email + "&SDate=" +
                            SDate + "&EDate=" + EDate).success(
                            function(data) {
                                var alertPopup =
                                    $ionicPopup.alert({
                                        title: 'Advertiesement Posted'
                                    });
                                $state.go("AdmintabsController.ushow", {}, {reload: true});
                            });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Advertisement fail'
                        });
                    }
                });
            }
        };
    })


    //Admin Show Advertisement in a list view Controller
    .controller('ushowadvertiesementCtrl', function($scope, $http, $state,
        $ionicPopup) {
        loadtable();
        //Load the advertisment list
        function loadtable() {
          //Get the advertisment list
            $http.get("http://teamsoft.tk/showAdvertiesement.php").success(
                function(data) {
                    $scope.advertiesement = data;
                });
        };
        //Go to detail view page
        $scope.gotoFullEditShow = function(IDAdd) {
            $state.go('AdmintabsController.ufullEditShow', {
                id: IDAdd
            });
        };
        //get the id of current advertisment
        function Currentadvetisment($scope, Addvertisement) {
            $scope.cAdd = Addvertisement.cAdd;
        }
        //refresh the list by pulling
        $scope.doRefresh = function() {
          //Get the advertisment list
          $http.get("http://teamsoft.tk/showAdvertiesement.php").success(
                function(data) {
            $scope.advertiesement = data;
          })
           .finally(function() {
             // Stop the ion-refresher from spinning
             $scope.$broadcast('scroll.refreshComplete');
           });
        };
    })


    //Admin View the Detail View page of the Advertisement Controller
    .controller('ufullEditShowCtrl', function($scope, $http, $state,
        $ionicPopup, $stateParams, $ionicActionSheet) {
        //delete the current advertisment
        $scope.deleteAdvertiesement = function(IDAdd) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Remove Advertisement'
            });
            confirmPopup.then(function(res) {
                if (res) {
                  //delete the current advertisment data from the table
                    $http.post(
                        "http://teamsoft.tk/deleteAddvertisement.php?thissID=" +
                        IDAdd).success(function(data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Advertiesement Removed'
                        });
                        $state.go("AdmintabsController.ushow", {}, {reload: true});
                    });
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Advertisement remove failed'
                    });
                }
            });
        }
        //Go to edit advertisement page
        $scope.gotoEditAdd = function(IDAdd) {
            $state.go('AdmintabsController.uedit', {
                Eid: IDAdd
            });
        };
        var CusID = $stateParams.id;
        //get the details of the advertisement
        $http.get("http://teamsoft.tk/addFullShow.php?CusID=" + CusID).success(
            function(data) {
                var card = [];
                card = data;
                $scope.IDAdd = card[0].IDAdd;
                $scope.Selected = card[0].Type;
                $scope.Title = card[0].Title;
                $scope.Image = card[0].Image;
                $scope.Description = card[0].Description;
                $scope.Contact = card[0].ContactNo;
                $scope.Email = card[0].Email;
                $scope.SDate = card[0].StartDate;
                $scope.EDate = card[0].EndDate;
                $scope.CurrentDate = card[0].CDate;
            });
        //Get the id of the current advertisement
        function ufullEditShowCtrl($scope, Advertisement) {
            $scope.cAdd = Advertisement.cAdd;
        }

                //Set the advretisement status
        $http.get("http://teamsoft.tk/checkSpecialadd.php?Addid="+CusID).success(
            function(data) {
                var fav = [];
                fav = data;
                console.log(fav);
                if (fav[0] == 1) {
                  $scope.special = 1;
                }else{
                  $scope.special = 0;
                }
        });

        $scope.Special=function(IDAdd){
          var confirmPopup = $ionicPopup.confirm({
                title: 'Add to special'
            });
            confirmPopup.then(function(res) {
                if (res) {
                  //Add to favourite
                    $http.post(
                        "http://teamsoft.tk/SpecialAdd.php?Addid="+IDAdd).success(function(data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Added to special'
                        });
                        window.location.reload(true);
                    });
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Retry Adding'
                    });
                }
            });
        }

        $scope.SpecialRemove=function(IDAdd){
          var confirmPopup = $ionicPopup.confirm({
                title: 'Remove Speciality'
            });
            confirmPopup.then(function(res) {
                if (res) {
                  //Add to favourite
                    $http.post(
                        "http://teamsoft.tk/SpecialAddRemove.php?Addid="+IDAdd).success(function(data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Marked as Normal'
                        });
                        window.location.reload(true);
                    });
                } else {
                    var alertPopup = $ionicPopup.alert({
                        title: 'Retry Adding'
                    });
                }
            });
        }
    })


    //Admin Edit the Advertisement Controller
    .controller('ufullEditCtrl', function($scope, $http, $state, $ionicPopup,
        $stateParams) {
        $scope.date = new Date();
      //Load the current advertisement data to the fields
        $scope.EidtAddValues = function() {
            var CusID = $stateParams.Eid;
            //get the advertisment data
            $http.get(
                "http://teamsoft.tk/showEditAddvertiesement.php?CusID=" +
                CusID).success(function(data) {
                var card = [];
                card = data;
                $scope.Selected = card[0].Type;
                $scope.Title = card[0].Title;
                $scope.Image = card[0].Image;
                $scope.Description = card[0].Description;
                $scope.Contact = card[0].ContactNo;
                $scope.Email = card[0].Email;
                $scope.SDate = card[0].StartDate;
                var breakvalue = $scope.SDate.split(' ');
                var day = breakvalue[0];
                var date = breakvalue[1];
                var mon = breakvalue[2];
                var yer = breakvalue[3];
                $scope.startdate = new Date(day + " " + mon + " " + date +
                    " " + yer);

                $scope.EndD = card[0].EndDate;
                var breakvalue1 = $scope.EndD.split(' ');
                var day1 = breakvalue1[0];
                var date1 = breakvalue1[1];
                var mon1 = breakvalue1[2];
                var yer1 = breakvalue1[3];
                $scope.EDate = new Date(day1 + " " + mon1 + " " + date1 +
                    " " + yer1);
            })
        }
        //Edit the advertisment
        $scope.editAdvertiesement = function(Selected, Title, Image,
            Description, Contact, Email, SDate, EDate) {
          var CusID = $stateParams.Eid;
          //Validation process
            if (Selected == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Select the type'
                });
            } else if (Title == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter The title'
                });
            } else if (Image == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Upload the Banner'
                });
            } else if (Description == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'say something about the Advertiesement'
                });
            } else if (Contact == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter Contact no'
                });
            } else if (Contact.charAt(0) != 0) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Contact should begins with 0'
                });
            } else if (Email == null) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Enter the Email'
                });
            } else {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Proceed with the Registration'
                });
                confirmPopup.then(function(res) {
                    if (res) {
                      //Send the edited data to the table
                        $http.post(
                            "http://teamsoft.tk/editAdvertisement.php?Selected=" +
                            Selected + "&Title=" + Title +
                            "&Image=" + Image +
                            "&Description=" + Description +
                            "&Contact=" + Contact +
                            "&Email=" + Email + "&SDate=" +
                            SDate + "&EDate=" + EDate +
                            "&CusID=" + CusID).success(function(
                            data) {
                            var alertPopup =
                                $ionicPopup.alert({
                                    title: 'Advertiesement Posted'
                                });
                            $state.go("AdmintabsController.ushow", {}, {reload: true}); 
                        });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Advertisement failed'
                        });
                    }
                });
            }
        };
    })








































































//mahesh controllers
.controller('pageCtrl', function($scope,$state) {
  
  $scope.search = function()
   {

    
      //$state.go('tabsController.mainprofile',{name: role});
   // window.localStorage.setItem("name",name);
   // window.localStorage.setItem("class",class1);
   alert("hello");
    
   }   

    
})
  .controller('resultCtrl', function($scope, $http) {
      // var name= $stateParams.name;
      //var class1 = $stateParams.class;

      // var name= "hashan";
       //var class1= "13A";
       $scope.view=function(id)
       {
       
          window.localStorage.setItem("followerid",id);
       }
     
       var name = window.localStorage.getItem("name");
       var class1 = window.localStorage.getItem("class");
       var profession = window.localStorage.getItem("profession");
       var country = window.localStorage.getItem("country");
       
        // alert(name);
        // alert(class1);
    
        
     //http reqest to PHP file       
      $http.get('http://teamsoft.tk/searchresult.php?name='+name+'&class='+class1+'&profession='+profession+'&country='+country
        ).then(function(response){
          
          $scope.searchItems = response.data;
      
      });

  })

   .controller('groupresultCtrl', function($scope, $http) {
      var name = window.localStorage.getItem("name");
       var class1 = window.localStorage.getItem("class");
       var group = window.localStorage.getItem("group");

        $http.get('http://teamsoft.tk/searchgroupresult.php?name='+name+'&class='+class1+'&group='+group
        ).then(function(response){
          
          $scope.searchItems = response.data;
      
      });

   })
 //mahesh controller2
 .controller('favouriteContactsCtrl', function($scope,$http) {
         var id = window.localStorage.getItem("id");

        $http.get('http://teamsoft.tk/favouriteList.php?id='+id).then(function(response){
      
          $scope.favourite = response.data;

        });

  })


    .controller('ViewFavouriteContactsCtrl', function($scope) {

  })

      .controller('themeSettingsCtrl', function($scope) {
              $scope.backcolor = null;
              $scope.textcolor="null";

              $scope.changecolor = function(){
                $scope.backcolor = "#ffd633";
                $scope.textcolor="#000066";
              }
  })
 // mahesh controller
 .controller('searchResultCtrl', function($scope,$http,$ionicPopup) {

    var follower = window.localStorage.getItem("followerid");
    var id = window.localStorage.getItem("id");
    $http.get("http://teamsoft.tk/followpage.php?follower="+follower).success(function(data){   
    var fav=[];
    fav=data;
    $scope.name=fav[0].name;
    $scope.email=fav[0].email;
    $scope.class=fav[0].class;
    $scope.dob=fav[0].dob;
    $scope.address=fav[0].address; 
    $scope.contact_no=fav[0].contact_no;
  })

    $http.get('http://teamsoft.tk/checkFollow.php?follower='+follower+'&id='+id).then(function(response){
      if(response.data=="true")
      {
        alert("ufollow");
        $scope.check = "unfollow";
      }
      else if(response.data=="false")
      {
        alert("follow");
        $scope.check = "follow";
      }
      else{
      }
      
  })

    $scope.follow = function(){
     $http.post("http://teamsoft.tk/followdatabase.php?follower="+follower+"&id="+id)
    .success(function(data){  
      var alertPopup = $ionicPopup.alert({
        title: 'You followed this person'
      });
      });
    }

  })


 
       //yik controllers
    /* The main event controller for the user level. Displays all events associated with the user*/       
.controller('eventsCtrl', function($scope,$state,$http) {
   
  $scope.addE = function(){   /*Add event list to the page*/
    var id = window.localStorage.getItem("id");
    $http.get('http://teamsoft.tk/addUserEvent.php?id='+id).then(function(response){
        
          $scope.eventNames = response.data;
      
    });
  }

  $scope.descriptionpg = function(id){    /*Go to each events description*/
    $state.go("eventDesc",{id:id});
  }

})
    
.controller('createevent', function($scope,$state,$http,$ionicPopup) {


  $http.get('http://teamsoft.tk/addGroup.php').then(function(response){    /*Get the available groups from the system*/
          $scope.groups = response.data;
  });

  var date = new Date();
  $scope.today = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);


 /*Invokes when the button to create an event is clicked*/
  $scope.created = function(title, edate, stime, etime, location, desc, selected, duration, durationSelect ){  
           
    if(angular.isUndefined(title)|| title===null  ){ /*Validations to check if title is empty*/
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter the title of the event'
  
              });
    }
    else if(angular.isUndefined(location)|| location===null  ){ /*Validations to check if location is empty*/
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter the venue of the event'
  
              });
    }
    else if(angular.isUndefined(edate)|| edate===null  ){
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid date'
  
              });
    }
    else if( angular.isUndefined(stime)|| stime===null || angular.isUndefined(etime)|| etime===null )
    {
           var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter the time period'
  
              });
    }
    else if(selected === "default" || selected==null)
    {
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please choose a cohost'
  
              });
    }
    else if( angular.isUndefined(duration)|| duration===null || durationSelect==null)
    {
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid duration'
  
              });
    }
    else{

          var current = new Date();
          var event_date = edate.getFullYear() + '-' + ('0' + (edate.getMonth() + 1)).slice(-2) + '-' + ('0' + edate.getDate()).slice(-2);
          var start_time =  stime.getHours()  + ':' + stime.getMinutes();
          var end_time =  etime.getHours()  + ':' + etime.getMinutes();

          var start = stime.getHours();
          var end = etime.getHours();
          var startMin = stime.getMinutes();
          var endMin = etime.getMinutes();

          /*Validations to check if date is less than today*/
          if( (current.getFullYear()>edate.getFullYear() ) || (current.getMonth() > edate.getMonth()) || (current.getDate() > edate.getDate() ))
          {
            var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid date'
  
              });
            
          }
          else if ( durationSelect=="day" && duration=='1' && (end < start))    /*Validations to check if the start and end times are valdiated*/
          {
        
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid time period'
  
              });
          }
          else if(durationSelect=="day" && duration=='1' && (end==start) && (endMin <startMin)){
            var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid time period'
  
              });
          }
          
          else
          {
             var count;
            if (durationSelect=="day"){count=1;}
            else if (durationSelect=="week"){count=7;}
            else if (durationSelect=="month"){count=30;}

            duration = duration*count;
           
          $http.get('http://teamsoft.tk/createEvent.php?title='+title+'&date='+event_date+'&stime='+start_time+'&etime='+end_time
          +'&duration='+duration+'&location='+location+'&desc='+desc+'&cohost='+selected).then(function(response){
            
            var status=response.data;
            if(status =="true"){
 
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Event was created successfully'
  
              });
               $state.go('AdmintabsController.adminEvent', {}, {reload:true});
            }
            else if(status =="false")
            {
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Process Failed'
  
              });
              $state.go($state.current, {}, {reload:true});
            }
            else
            {
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Failed'
  
              });
              $state.go($state.current, {}, {reload:true});

            }

          }); 
          }
        }
    }
})


.controller('index', function($scope) {
          $scope.otherevents = function(){
            $state.transitionTo("eventTypes");
          }
})

.controller('eventtype', function($scope, $http) {
    $scope.eventNames = [{name :"Save Water", date:"27th April 2016", image:"img/img1.jpg"},
                       {name:"'Memories' 13C Batch Party", date:"30th April 2016", image:"img/img2.jpg"} ,
                       {name:"Wesak dansala",date:"6th May 2016", image:"img/img3.jpg"} ]; 
 
    $scope.doRefresh = function() {
    $http.get('/new-items')
     .success(function(newItems) {
       $scope.eventNames = newItems;
      
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
})


.controller('eventdesc', function($scope, $state, $ionicActionSheet, $timeout, $http, $stateParams, $ionicPopup) {
      var userid= window.localStorage.getItem("id");

      var id = $stateParams.id;
      $http.get('http://teamsoft.tk/userEventDesc.php?id='+id+'&uid='+userid ).then(function(response){
        
          $scope.eventNames = response.data;
          angular.forEach($scope.eventNames, function(value, key){
            $scope.title =  value.name;
            $scope.wholedate =  new Date(value.date);
            $scope.stime =  value.start_time;
            //$scope.etime =  toTime(value.end_time);
            $scope.venue =  value.venue;
            $scope.desc =  value.description;
            $scope.org = value.organizer;
            $scope.durationSelect1 = value.duration;
            $scope.stat = value.status;

          })

          $scope.day = $scope.wholedate.getDate();
          $scope.month = $scope.wholedate.getMonth();
          switch($scope.month){
            case 1: $scope.date = "JAN"; break;
            case 2: $scope.date = "FEB"; break;
            case 3: $scope.date = "MAR"; break;
            case 4 : $scope.date = "APR"; break;
            case 5 : $scope.date = "MAY"; break;
            case 6 : $scope.date = "JUN"; break;
            case 7 : $scope.date = "JUL"; break;
            case 8 : $scope.date = "AUG"; break;
            case 9 : $scope.date = "SEP"; break;
            case 10 : $scope.date = "OCT"; break;
            case 11 : $scope.date = "NOV"; break;
            case 12 : $scope.date = "DEC"; break;
            
            default : $scope.date = "NON"; break;
          }

          if($scope.stat=="going"){
              $scope.changeColor(); 
          }
          else if($scope.stat=="interested"){
              $scope.changeColor2();
          }
          

      });


      $scope.changeColor = function(){       /* Triggers and changes the users state once user clicks on the "going" button */

        var id = $stateParams.id; 
        $http.get('http://teamsoft.tk/userStatus.php?status=going&id='+userid+'&eid='+id ).then(function(response){
            $scope.status = response.data;
            if(response.data=="true")
            {
              $scope.textColor = '  #505050 ';
              $scope.textColor2 = '#004d4d';
            }
            else{

                 var alertPopup = $ionicPopup.alert({
                    title:'Smart ap',
                    template:'error '
                 });
            }

        });
      }
       $scope.changeColor2 = function(){      /* Triggers and changes the users state once user clicks on the "interested" button */
        var id = $stateParams.id; 
        $http.get('http://teamsoft.tk/userStatus.php?status=interested&id='+userid+'&eid='+id ).then(function(response){
            $scope.status1 = response.data;
            if(response.data=="true")
            {
              $scope.textColor = '#004d4d';
              $scope.textColor2 = ' #505050 ';
            }
            else{
                var alertPopup = $ionicPopup.alert({
                    title:'Smart ap',
                    template:'error '
                });
            }

        });

        
      }

      $scope.seeParticipants = function(){
        var id = $stateParams.id; 
        $state.go("participants",{id:id});
      }

      $scope.var = false;
      $scope.showButton = function(){
         $scope.var = !$scope.var;
          $scope.comment = null;
      }

      $scope.postvar = false;
      $scope.addPost = function(){
            $scope.postvar = true;
            $scope.comment = null;
      }
})

/*.controller('participants', function($scope,$state,$http,$stateParams){
    var id = $stateParams.id;
    $http.get('http://teamsoft.tk/viewParticipants.php?id='+id ).then(function(response){
            $scope.Participants = response.data;
    })


})*/


.controller('participants', function($scope,$state,$http,$stateParams){
    var id = $stateParams.id;
    $http.get('http://teamsoft.tk/countParticipants.php?id='+id ).then(function(response){
            $scope.count = response.data;
            if ($scope.count==1){ $scope.count= $scope.count+" Participant"; }
            else { $scope.count= $scope.count+" Participants"; }
    })
    $http.get('http://teamsoft.tk/viewParticipants.php?id='+id ).then(function(response){
            $scope.Participants = response.data;
    })


})

.controller('adminevent', function($scope,$state,$http,$ionicPopup) {

    $http.get('http://teamsoft.tk/addEvent.php').then(function(response){
        
          $scope.eventNames = response.data;
      
    });
       
    $scope.createEvent1 = function(){             /* Transition to create new event page*/
        $state.transitionTo("createEvent");
    }
    $scope.admindescriptionpg = function(id){     /* View the event in detail*/
       var idval = id;
        $state.go("adminEventDesc",{id:id});
    }

    $scope.showConfirm = function(id){            /* Delete an event*/

      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete',
        template: 'Are you sure you want to delete this?'
     });
 
      confirmPopup.then(function(res) {
      if(res) {
       
         $http.get('http://teamsoft.tk/deleteEvent.php?id='+id ).then(function(response){

         var status=response.data;
            if(status =="true"){
 
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Event was deleted successfully'
  
              });
               $state.go($state.current, {}, {reload:true});
            }
            
            else if(status =="false"){
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Process Failed'
  
              });
             
            } 
      });

     } 
     else {
       console.log('Deletion canceled !');
     }
   });
 

    }

     $scope.c = 0;
})

.controller('admineventdesc', function($scope,$http,$state, $stateParams, $filter,$ionicPopup) {  /*Admins view to edit events*/
      
      $scope.changebit= false;
      $scope.daybit= false;
      var id = $stateParams.id;
      $http.get('http://teamsoft.tk/eventDesc.php?id='+id ).then(function(response){
        
          $scope.eventNames = response.data;

          angular.forEach($scope.eventNames, function(value, key){        /*From each row, read the content*/
            $scope.title =  value.name;
            $scope.date =  new Date(value.date);
            $scope.stime =  toTime(value.start_time);
            $scope.etime =  toTime(value.end_time);
            $scope.venue =  value.venue;
            $scope.desc =  value.description;
            $scope.selected1 = value.organizer;
            $scope.durationSelect1 = value.duration;

          })
      });
       
      $scope.hideval = function(){
          $scope.changebit = true;
        }
        $scope.hideday = function(){
          $scope.daybit = true;
      }

      function toTime(timeString){      /*Function used to convert a certain date tp string*/
        var timeTokens = timeString.split(':');
        var d = new Date(1970,0,1, timeTokens[0], timeTokens[1], 00);
        return d;
      }   

      $http.get('http://teamsoft.tk/addGroup.php').then(function(response){
        
          $scope.groups = response.data;
      
      });

      var date = new Date();
      $scope.today = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);

/*Function triggered when admin clicks on edit button*/
      $scope.edited = function(title, edate, stime, etime, location, desc, selected, duration, durationSelect ){
           
        if(angular.isUndefined(title)|| title==null  ){    /*Validations to check for  empty slots*/
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter the tile of the event'
  
              });
        }
        else if(angular.isUndefined(location)|| location===null  ){
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter the venue of the event'
  
              });
        }
        else if(angular.isUndefined(edate)|| edate===null  ){
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid date'
  
              });
        }
        else if( angular.isUndefined(stime)|| stime===null || angular.isUndefined(etime)|| etime===null )
        {
           var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter the time period'
  
              });
        }
        else if(selected === "default" || selected==null)
        {
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please choose a cohost'
  
              });
        }
        else if( angular.isUndefined(duration)|| duration===null || durationSelect==null)
        {
          var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid duration'
  
              });
        }
        else{

          /*Validations for the date option */
          var current = new Date();
          var event_date = edate.getFullYear() + '-' + ('0' + (edate.getMonth() + 1)).slice(-2) + '-' + ('0' + edate.getDate()).slice(-2);
          var start_time =  stime.getHours()  + ':' + stime.getMinutes();
          var end_time =  etime.getHours()  + ':' + etime.getMinutes();

          var start = stime.getHours();
          var end = etime.getHours();
          var startMin = stime.getMinutes();
          var endMin = etime.getMinutes();
          if( (current.getFullYear()>edate.getFullYear() ) || (current.getMonth() > edate.getMonth()) || (current.getDate() > edate.getDate() ))
          {
            var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid date'
  
              });
            
          }
          else if ( durationSelect=="day" && duration=='1' && (end < start))    /* Vlaidations for the time slots*/
          {
        
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid time period'
  
              });
          }
          else if(durationSelect=="day" && duration=='1' && (end==start) && (endMin <startMin)){
            var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter a valid time period'
  
              });
          }
          
          else
          {
             var count;                        /* Based on duration entered, the duration is converted to days before sending to the database*/
            if (durationSelect=="day"){count=1;}
            else if (durationSelect=="week"){count=7;}
            else if (durationSelect=="month"){count=30;}

            duration = duration*count;
           
            $http.get('http://teamsoft.tk/updateEvent.php?id='+id+'&title='+title+'&date='+event_date+'&stime='+start_time+'&etime='+end_time
          +'&duration='+duration+'&location='+location+'&desc='+desc+'&cohost='+selected).then(function(response){
            
            var status=response.data;
            if(status =="true"){
 
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Event was updated successfully'
  
              });
               $state.go('AdmintabsController.adminEvent', {}, {reload:true});
            }
            else if(status =="false"){
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Process Failed'
  
              });
              $state.go($state.current, {}, {reload:true});
            }
            else{
              var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Failed'
  
              });
              $state.go($state.current, {}, {reload:true});

            }

          }); 
          }
        }
     }
       
    
})



.controller('Modalfriends', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})



.controller('eventgoing', function($scope,$http,$ionicPopup) {

  //var userId = window.localStorage.getItem("username");
   var userId = window.localStorage.getItem("id");
    $http.get('http://teamsoft.tk/goingEvent.php?id='+userId).then(function(response){
        
          $scope.eventNames = response.data;

      
      });

    /**
    /* Merge the events to the users calendar
    /*
    **/

   var CLIENT_ID = '61431024460-cnt3pdmt0n7gimmej7etirfr1skoj89u.apps.googleusercontent.com';
   var SCOPES = ["https://www.googleapis.com/auth/calendar"];
     $scope.end =new Date(); 
     $scope.start=new Date(); 
     $scope.title="default"; 
     $scope.ev_description = "default"; 
   //var end,start,title,ev_description;
   
     // var events= {};
      
 
  $scope.addEvent = function(entryId){

    $http.get('http://teamsoft.tk/updatecalendar.php?id='+userId+'&eventId='+entryId).then(function(response){
        if(response.data == "false"){
         
            var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'This event has already been updated!'
  
              });
        }
        else{

         
          var name, desc,id,date,stime,etime;
          $scope.eventNames = response.data;
        
         angular.forEach($scope.eventNames, function(value, key){        /*From each row, read the content*/
             
             $scope.gEid= value.id;
             $scope.title =  value.name+" - Event of Royalists94";
             $scope.end =  $scope.start  =  new Date(value.date);
             //stime =  value.start_time;
             //etime = value.end_time;
             $scope.ev_description =  value.description;
             //var x1= date+" "+value.start_time+":00+05:30";
            // var x2= date+" "+value.end_time+":00+05:30";

            //$scope.end= x2;
            //$scope.start= x1;
           // $scope.title = name;
          // $scope.ev_description = desc;*/

       /*    events["end"]["date"] =  $scope.end;
      events["start"]["date"] =  $scope.start;
      events["summary"] =  $scope.title;
      events["description"] =  $scope.ev_description;*/
        
              

          gapi.auth.authorize(
            {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
            loadCal);
          return true;


         // var gid = window.localStorage.getItem("gEid");
       /*   $http.get('http://teamsoft.tk/mergeevent.php?id='+userId+'&eventId='+id+'&googleId='+gid).then(function(response){ 
              if(response.data=="true"){ console.log("merged"); }
              else{ console.log("error in merging"); }
         })*/

        })

         var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Events were successfully merged!'
  
              });

      }
    });

    /*  */
      }

     function appendPre(message) {
        var googleEid = message.split("=");
       // alert(googleEid[1]);
        var eId = $scope.gEid;
       // alert(eId+" "+userId);
         $http.get('http://teamsoft.tk/mergeevent.php?id='+userId+'&eventId='+eId+'&googleId='+googleEid[1]).then(function(response){ 
              if(response.data=="true"){ console.log("merged"); }
              else{ console.log("error in merging"); }
         });

        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
/**
/* Test to insert events to the calendar
/*
**/
      

      function loadCal(){

        gapi.client.load('calendar', 'v3', addEventtoCal);
      }

      function addEventtoCal(){
        //alert($scope.end"  "$scope.start);
        var event =  {
        "end": {
          "dateTime": $scope.end
        },
        "start": {
          "dateTime": $scope.start
        },
        "summary": $scope.title,
        "description": $scope.ev_description
      }
 
        
      var request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
      });

      request.execute(function(event) {
        var stringEvent = 'Event added: ' + event.htmlLink;
        //window.localstorage.setItem("gEid", googleEid[1]);
        appendPre('Event added: ' + event.htmlLink);

      });
      console.log("success");
     }




})



.controller('eventhosted', function($scope,$http) {

    //var userId = window.localStorage.getItem("username");
   var userId = window.localStorage.getItem("id");
    $http.get('http://teamsoft.tk/hostedEvents.php?id='+userId).then(function(response){
        
          $scope.eventNames = response.data;
      
      });
})

.controller('eventpast', function($scope,$http) {

    var userId = window.localStorage.getItem("id");
    $http.get('http://teamsoft.tk/pastEvents.php?id='+userId).then(function(response){
          $scope.eventNames = response.data;
      });                 
})
.controller('eventgroup', function($scope,$http) {

    var userId = 1;
    $http.get('http://teamsoft.tk/groupEvents.php?id='+userId).then(function(response){
        
          $scope.eventNames = response.data;
      });
      if($scope.eventNames == null){
      
    }                
})
.controller('eventsubgroup', function($scope,$http) {
    var userId = window.localStorage.getItem("id");
    $http.get('http://teamsoft.tk/subgroupEvents.php?id='+userId).then(function(response){
        
          $scope.eventNames = response.data;
      });

                    
})

.controller('msg', function($scope) {
    $x=1;
    $scope.friends = [{name:"Jagath Bandara"},{name:"Anura Bandara"}];
    if($x!=5){
    $scope.h = {a:"0px",b:"30px",c:"110px"};}
    else{
     $scope.h = {a:"30px",b:"110px",c:"190px"};
    }
     $scope.newbit=true;
      $scope.addMsg = function(){
           $x=$x+4;
           $scope.h = {a:"0px",b:"30px",c:"110px"};
           $scope.newbit=false;
    }  

})

.controller('chat', function($scope) {
    $x!=5;
    $scope.friends = [{name:"Jagath Bandara"},{name:"Anura Bandara"}];
    if($x!=5){
    $scope.h = {a:"0px",b:"30px",c:"110px"};}
    else{
     $scope.h = {a:"30px",b:"110px",c:"190px"};
    }
     $scope.newbit=true;
      $scope.addMsg = function(){
           $x=$x+4;
           $scope.newbit=false;
    }  

})

.controller('allmsg',function($scope,$state){

      $scope.searchppl = function(){
       
        $scope.searchval= true;
         
      }

      $scope.hideppl = function(){
        $scope.searchname= "Dhanuja Kumarasiri";
        $scope.searchval= false;

        $state.transitionTo('exmsg');
      }
})

.controller('exmsg',function($scope){
    
     $scope.newbit = $scope.c;
 $scope.addMsg = function(){
      $scope.c = "ff";
   }
   $scope.searchcon = function(){
       
        $scope.xval= true;
         
      }
    $scope.addconference = function(){
        $scope.vevo=null;
        $scope.xval= false;
        $scope.yval= true;
    }  

})

.controller('bdaymsg',function($scope){
  

})

.controller('calendar',function($scope){
      
 
    

   var event =  {
        "end": {
          "dateTime": "2016-08-19T18:00:00+05:30"
        },
        "start": {
          "dateTime": "2016-08-19T15:30:00+05:30"
        },
        "summary": "Test eventxxx",
        "status" : "tentative",
        "description": "This is a test event"
      }

 


    /*{
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2016-08-15T00:30:00+05:30',
    'timeZone': 'Colombo'
  },
  'end': {
    'dateTime': '2016-08-15T00:30:00+07:30',
    'timeZone': 'Colombo'
  }
};*/
 

         


  /**
**
GOOGLE CALENDAR
**/
  // Your Client ID can be retrieved from your project in the Google
      // Developer Console, https://console.developers.google.com
      var CLIENT_ID = '61431024460-cnt3pdmt0n7gimmej7etirfr1skoj89u.apps.googleusercontent.com';

      var SCOPES = ["https://www.googleapis.com/auth/calendar"];

      /**
       * Check if current user has authorized this application.
       */
      function checkAuth() {
        gapi.auth.authorize(
          {
            'client_id': CLIENT_ID,
            'scope': SCOPES.join(' '),
            'immediate': true
          }, handleAuthResult);
      }

      /**
       * Handle response from authorization server.
       *
       * @param {Object} authResult Authorization result.
       */
      function handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
          // Hide auth UI, then load client library.
          authorizeDiv.style.display = 'none';
          loadCalendarApi();
        } else {
          // Show auth UI, allowing the user to initiate authorization by
          // clicking authorize button.
          authorizeDiv.style.display = 'inline';
        }
      }


      /**
       * Initiate auth flow in response to user clicking authorize button.
       *
       * @param {Event} event Button click event.
       */
      $scope.handleAuthClick = function(event) {
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          handleAuthResult);
        return false;
      }

      /**
       * Load Google Calendar client library. List upcoming events
       * once client library is loaded.
       */
      function loadCalendarApi() {
        gapi.client.load('calendar', 'v3', listUpcomingEvents);
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */

       function listUpcomingEvents() {
        var request = gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        });

        request.execute(function(resp) {
          var events = resp.items;
          appendPre('Upcoming events:');


          $scope.eventArr = [];
          $scope.calbit=true;
          if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              //appendPre(event.summary + ' (' + when + ')')

              $scope.eventArr.push({name:event.summary, date:when});
            }
          } else {
            appendPre('No upcoming events found.');
            $scope.eventArr.push({name:'No upcoming events', date: ""});
          }

        });
      }


      /**
       * Append a pre element to the body containing the given message
       * as its text node.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('output');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }
/**
/* Test to insert events to the calendar
/*
**/
       $scope.addEvent = function(){

    gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
          loadCal);
        return false;


      }

      function loadCal(){
        gapi.client.load('calendar', 'v3', addEventtoCal);
      }

      function addEventtoCal(){
        
      var request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
      });

      request.execute(function(event) {
        appendPre('Event created: ' + event.htmlLink);

      });
      console.log("success");
    }

   })




.controller('MyController', function($scope, $http, $ionicPopover,$state, $ionicPopup) {
        var userId = window.localStorage.getItem("id");
         $http.get('http://teamsoft.tk/addUserEvents.php?id='+userId).then(function(response){
        
          $scope.eventNames = response.data;
      
      });
  
        $scope.show = function(a){    /* Page transitions for the navigation bar */
          
          if(a=='Upcoming'){
                $state.go('tabsController.events', {}, {reload:true});
          }
           if(a=='Going'){
                $state.transitionTo('eventGoing');
          }
          if(a=='Past'){
                $state.transitionTo('eventPast');
          }
           if(a=='Group'){
                $state.transitionTo('eventGroup');
          }
          if(a=='Sub Groups'){
                $state.transitionTo('eventSubgroup');
          }
        
  }
    
  

  $scope.calcVal = function(){
    
  }

  if($scope.c==0){
    $scope.newevent = false;
  }
  else
  {
    $scope.newevent = true;
  }
  
  $scope.created = function(){
      $scope.c=$scope.c + 1;
      $state.transitionTo("adminEvent");
     
  }
       

  $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
        title: 'Delete Event',
        template: 'Are you sure you want to delete this event? This action cannot be undone.'
   });

  confirmPopup.then(function(res) {
    if(res) {
        $scope.noInterest = true;
    }
    else {
      
    }

  });

  };


  $scope.doRefresh = function() {

    $http.get('/new-items')
     .success(function(newItems) {

       $scope.eventNames = newItems;
       $scope.dates = newItems;

     })

     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };



  $scope.noInterest = false;
  $scope.ebit = true;

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('event-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.closePopover = function(isChecked) {
    var userid = window.localStorage.getItem("id");
    var x = isChecked;
      $http.get('http://teamsoft.tk/userStatus.php?id='+userid+'&status='+x).then(function(response){
        
         $scope.status = response.data;
          if(status=="true"){
             var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Successfully changed'
  
              });
          }
          else{
             var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Error'
  
              });
          }
    });

    $scope.popover.hide(); //close the popup after 3 seconds for some reas
    
    }
  
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });


})

.controller('MyControllerCal', function($scope, $http, $ionicPopover,$state,  $ionicPopup) {    /*THe controller for the calendar*/

     $scope.calendarVals = [{d1 :"01", d2 :"02", d3 :"03", d4 :"04",d5 :"05", d6 :"06", d7 :"07"},
                       {d1 :"08", d2 :"09", d3 :"10", d4 :"11",d5 :"12", d6 :"13", d7 :"14"},
                       {d1 :"15", d2 :"16", d3 :"17", d4 :"18",d5 :"19", d6 :"20", d7 :"21"},
                        {d1 :"22", d2 :"23", d3 :"24", d4 :"25",d5 :"26", d6 :"27", d7 :"28"},
                        {d1 :"29", d2 :"30", d3 :"31", d4 :"01",d5 :"02", d6 :"03", d7 :"04"} ]; 
 
   
  $scope.doRefresh = function() {
    $http.get('/new-items')
     .success(function(newItems) {
       $scope.eventNames = newItems;
       $scope.dates = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };



  $scope.noInterest = false;
  $scope.ebit = true;

  // .fromTemplate() method
  var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('event-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.closePopover = function(title,location,daet) {
     $scope.noInterest = true;
     $scope.ebit = false;
     if(angular.isUndefined(title)|| title===null || angular.isUndefined(date)|| date===null ){
         var alertPopup = $ionicPopup.alert({
                title:'SmartApp',
                template:'Please enter all fields'
  
              });
      }
     else{
 
    $scope.popover.hide(); //close the popup after 3 seconds for some reas
    var alertPopup = $ionicPopup.alert({
    title:'SmartApp',
    template:'Event successfully added'
  
    });
    }
  }
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });


  });
