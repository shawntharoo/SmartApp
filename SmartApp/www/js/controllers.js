angular.module('app.controllers', [])
  
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
   
.controller('cartCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope,$state,$http,$ionicPopup) {
  /*
The code below will get the username 
and the password from the login form and 
perform the login funtion
*/
   $scope.login= function(email,password){
    

 $http.get('http://localhost/test/logcheck.php?email='+email+'&password='+password).then(function(response){
  var names = response.data;
    var role , id;
   for (var i = 0; i < names.length; i++) {

    var name = names[i];
    role = name.role;
    id= name.id;                
                      
    }
 
 if(role=="admin")
 {
   window.localStorage.setItem("username",email);//set username to localstorage
   window.localStorage.setItem("id",id);//set username to localstorage
   window.localStorage.setItem("role",role);//set username to localstorage
   var alertPopup = $ionicPopup.alert({
  title:'login',
  template:'login successfully '
  
 });
  $state.transitionTo('AdmintabsController.mainprofile',{name:role});

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
     $state.go('tabsController.mainprofile',{name: role});

  }
    else if(role=="rep")
 {
   window.localStorage.setItem("username",email);//set username to localstorage
   window.localStorage.setItem("id",id);//set id to localstorage
   window.localStorage.setItem("role",role);//set role to localstorage

  var alertPopup = $ionicPopup.alert({
  title:'login',
  template:'login successfully '
  
 });
      var CusID = window.localStorage.getItem("id");
    $http.post("http://localhost/test/DisableAddCreate.php?CusID="+CusID);

     $state.go('tabsController.mainprofile',{name: role});

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

.controller('timelineCtrl', function($scope) {

})
.controller('resetpasswordCtrl', function($scope) {

})
.controller('signupCtrl', function($scope,$http,$ionicPopup,$state) {
    var Check=0;
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
 $http.get('http://localhost/test/signup.php?name='+name+'&class='+myclass+'&email='+email).then(function(response){

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
 .controller('profileCtrl', function($scope,$ionicActionSheet,$timeout,$state,$http) {
   // Triggered on a button click, or some other target
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
            $http.get('http://localhost/test/getname.php?id='+x).then(function (response) {

          

                    var records = response.data;


                    for (var i = 0; i < records.length; i++) {

                        var record = records[i];
                        
                      $scope.name=record.name;
                      $scope.class=record.class;
                      $scope.email=record.email;
                      $scope.address=record.address;
                      $scope.contact_no=record.contact_no;
               }
            });
             $http.get('http://localhost/test/getspouse.php?id='+x).then(function (response) {


                    var records = response.data;


                    for (var i = 0; i < records.length; i++) {

                        var record = records[i];
                        
                      $scope.spouse=record.sname;
                   
               }
            });
              $http.get('http://localhost/test/getchildcount.php?id='+x).then(function (response) {


                    var records = response.data;


                    for (var i = 0; i < records.length; i++) {

                        var record = records[i];
                        
                      $scope.childcount=record.count;
                   
               }
            });
      $scope.nextpage = function(){

    $state.transitionTo("profileEdit");
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
$http.get('http://localhost/test/getaddress.php?user='+z).then(function(response){
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
 $http.get('http://localhost/test/personal.php?address='+address+'&home='+home+'&mobile='+mobile+'&id='+y).then(function(response){
 
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
  .controller('mainprofileCtrl', function($scope,$state, $stateParams,$http) {

    var CusID = window.localStorage.getItem("id");
    $http.post("http://localhost/test/DisableAddCreate.php?CusID="+CusID);

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
            $http.get('http://localhost/test/getname.php?id='+x).then(function (response) {

           

                    var records = response.data;


                    for (var i = 0; i < records.length; i++) {

                        var record = records[i];
                        
                      $scope.name=record.name;
                      $scope.class=record.class;
                      $scope.email=record.email;

               }
            });
                                         
          


     
      $scope.swichtobusiness= function(){

    $state.transitionTo("tabsController2.showAdvertiesement");
  }

})

    .controller('requestCtrl', function($scope,$http,$ionicPopup,$state,$window) {

       $http.get('http://localhost/test/memberRequest.php').then(function(response){
          

          $scope.request = response.data;
      
      });
           /*
The code below will approve
the member request

*/

       $scope.approve=function(id)
       {
         $http.get('http://localhost/test/acceptRequest.php?id='+id).then(function(response){
          

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
         $http.get('http://localhost/test/rejectRequest.php?id='+id).then(function(response){
          

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




})
        .controller('profileEditCtrl', function($scope,$http,$ionicPopup,$window,$state) {
           /*
The code below will check the 
in put field for incorrect
input 
eg-numbers for the name
*/
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
                
                $http.get('http://localhost/test/profileEdit.php?id='+x+'&name='+name+'&email='+email).then(function(response){
          

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
        $http.get('http://localhost/test/schange.php?id='+r+'&sname='+sname).then(function (response) {

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
        $http.get('http://localhost/test/childadd.php?id='+r+'&cname='+cname+'&dob='+date1+'&royal='+x).then(function (response) {
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
    $http.get('http://localhost/test/getchildren1.php?id='+a).then(function (response) {
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
    
    $http.get('http://localhost/test/delchildren.php?id='+b).then(function (response) {
    $http.get('http://localhost/test/getchildren.php?id='+u).then(function (response) {
    $scope.childlist = response.data;
    });
    });
    
    }
    
    
    
    $http.get('http://localhost/test/getchildren.php?id='+u).then(function (response) {
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
   
        $http.get('http://localhost/test/childupd.php?id='+select+'&cname='+a+'&dob='+date1+'&royal='+x).then(function (response) {
           if(response.data=="true"){
           var alertPopup = $ionicPopup.alert({
           title:'SmartApp',
           template:'successfully edited'
  
         });
     alertPopup.then(function(res) {
    
  
      $http.get('http://localhost/test/getchildren.php?id='+u).then(function (response) {
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
       //pc controllers

.controller('cricketPostCtrl', function($scope,$state,$http) {

var UID=window.localStorage.getItem("id");
                $scope.$on('$ionicView.enter', function() {

                            //catch the group id sent from group.html page or followCricket.html page and retrive the group post details from the database.
                            $http.get('http://localhost/test/subposts.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID).then(function(response)
                            {
                                  $scope.names = response.data;
                                 
                                  
                            })
                            //catch the group id sent from group.html page or followCricket.html page and retrive the group details from the database.
                            $http.get('http://localhost/test/subgrp.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID).then(function(response)
                            {
                                  $scope.gp = response.data;
                                 
                                  
                            })

                });

                //send the id to setting page
                 $scope.getid = function (x) {
                            
                        window.localStorage.setItem("selectitemid", x);
                              
                            };

                 //direct to the addApost.html page        
                  $scope.addPost = function(){
                        $state.transitionTo("addAPost");
                    }

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

                      $http.get('http://localhost/test/getgroups5.php?UID='+UID).then(function(response)
                      {
                            $scope.names = response.data;
                            
                      })
                }else{
                      $http.get('http://localhost/test/getgroups3.php?name='+searching+'&UID='+UID).then(function(response)
                      {
                            $scope.names = response.data;
                            
                      })
                }
            }

//get the sub group details which user following from the database
                      $scope.$on('$ionicView.enter', function() {
                      $http.get('http://localhost/test/getgroups5.php?UID='+UID).then(function(response)
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

                $http.get('http://localhost/test/getgroups.php?UID='+UID).then(function(response)
                {
                      $scope.names = response.data;
                      
                })
                }else{
                $http.get('http://localhost/test/serachgroup.php?name='+searching+'&UID='+UID).then(function(response)
                {
                      $scope.names = response.data;
                      
                })
                }
          }

//load the all current groups to the admin page
          $scope.$on('$ionicView.enter', function() {
                $http.get('http://localhost/test/getgroups.php?UID='+UID).then(function(response)
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
                  $http.get('http://localhost/test/subgrpmember.php?id='+window.localStorage.getItem("selectitemiid")+'&UID='+UID).then(function(response)
                  {
                        $scope.names = response.data;
                       
//get the details about the group from the details                        
                  })
                  $http.get('http://localhost/test/subgrp.php?id='+window.localStorage.getItem("selectitemiid")+'&UID='+UID).then(function(response)
                  {
                        $scope.gp = response.data;
                       
                        
                  })

            });

//pass the group id to the cricketPost.html page and save the follow details in the database
             $scope.getid = function (x) {
                        
                            window.localStorage.setItem("selectitemid", x);

                            $http.get('http://localhost/test/follow.php?id='+x+'&UID='+UID).then(function(response){

             
                           var alertPopup = $ionicPopup.alert({
                            title:'Follow group',
                            template:'Now you are a member of this group'
                            
                           });
                           $http.get('http://localhost/test/updatenot.php').then(function(response){
                            
                           });
                           $state.transitionTo('cricketPost');



                           });
                          
                        };

//direct to the group page
             $scope.backTogroup = function(){
                    $state.transitionTo("group");
                }


})






.controller('addAPostCtrl', function($scope,$http,$ionicPopup,$state) {
var UID=window.localStorage.getItem("id");
//save the post details in the database
            $scope.addpost = function(a,b){
          if(a != null && b != null ){// check that post details are added or not
             $http.get('http://localhost/test/addpost.php?id='+window.localStorage.getItem("selectitemid")+'&description='+a+'&image='+b+'&UID='+UID).then(function(response){

             
             var alertPopup = $ionicPopup.alert({
              title:'User -add new posts',
              template:'New post has been added successfully'
              
             });
             $http.get('http://localhost/test/updatenot.php').then(function(response){
              
             });
             $state.transitionTo('cricketPost');



             });
         }else{

                    var alertPopup = $ionicPopup.alert({
                    title:'Add a new post',
                    template:'    Please add the new group post details    '
                    
                   });
                   $http.get('http://localhost/test/updatenot.php').then(function(response){
                    
                   });
                  
                 }


             };

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
                    $http.get('http://localhost/test/checkgroupname.php?name='+a+'&UID='+UID).then(function(response){
                      
                       $scope.id = response.data; 
                       if (Array.isArray($scope.id)) {  //check group name is already avilable
                         var alertPopup = $ionicPopup.alert({
                          title:'Admin -Create a group',
                          template:'    The name of the new group is already available. Please add a new name for the group    '
                          
                         });
                         $http.get('http://localhost/test/updatenot.php').then(function(response){
                          
                         });



                       }else{
                           $http.get('http://localhost/test/addgroupname.php?name='+a+'&Description='+b+'&category='+c+'&image='+d+'&UID='+UID).then(function(response){
                           if(response.data=="true"){
                           var alertPopup = $ionicPopup.alert({
                            title:'Admin -Create a group',
                            template:'New group has been created successfully'
                            
                           });
                           $http.get('http://localhost/test/updatenot.php').then(function(response){
                            
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
                   $http.get('http://localhost/test/updatenot.php').then(function(response){
                    
                   });
                  
                 }
           };

})








.controller('groupPostCtrl', function($scope,$http,$ionicPopup,$state) {
var UID=window.localStorage.getItem("id");
 
                      $scope.$on('$ionicView.enter', function() {
                      $http.get('http://localhost/test/serachgrouppost.php?UID='+UID).then(function(response)
                      {
                         

                        $scope.names = response.data;                      
                       
                                             
                      })


                      });



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
                                 $http.get('http://localhost/test/addpost2.php?description='+a+'&image='+b+'&UID='+UID).then(function(response){

                                 
                                 var alertPopup = $ionicPopup.alert({
                                  title:'User -add new posts',
                                  template:'New post has been added successfully'
                                  
                                 });
                                 $http.get('http://localhost/test/updatenot.php').then(function(response){
                                  
                                 });
                                 $state.transitionTo('groupPost');

                                 });


                          }else{

                                var alertPopup = $ionicPopup.alert({
                                title:'Add a new post',
                                template:'    Please add the new group post details    '
                                
                               });
                               $http.get('http://localhost/test/updatenot.php?').then(function(response){
                                
                               });
                              
                             }
                       };
})












.controller('settingsCtrl', function($scope,$state,$http,$ionicPopup) {
var UID=window.localStorage.getItem("id");
//send the group id to the followCricket.html page
                       $scope.getid = function (x) {
                                  
                                      window.localStorage.setItem("selectitemiid", x);
                                      $http.get('http://localhost/test/unfollow.php?id='+x+'&UID='+UID).then(function(response){

             
                                       var alertPopup = $ionicPopup.alert({
                                        title:'Unfollow a group',
                                        template:'You have successfully unfollw the group'
                                        
                                       });
                                       $http.get('http://localhost/test/updatenot.php?').then(function(response){
                                        
                                       });
                                       $state.transitionTo('followCricket');



                                       });
                                    
                                  };
//get the group member details from the databse
                      $scope.$on('$ionicView.enter', function() {
                     
                                $http.get('http://localhost/test/subgrpmember.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID).then(function(response)
                                {
                                      $scope.names = response.data;
                                     
                                      
                                })
                                $http.get('http://localhost/test/subgrp.php?id='+window.localStorage.getItem("selectitemid")+'&UID='+UID).then(function(response)
                                {
                                      $scope.gp = response.data;
                                     
                                      
                                })
                      });

//direct to the inviteFriends.html page
                    $scope.inviteFriends = function(){
                            $state.transitionTo("inviteFriends");
                        }

})
   















.controller('inviteFriendsCtrl', function($scope) {


})
.controller('selectedGroupPostCtrl', function($scope) {



})


   
.controller('followAGroupCtrl', function($scope,$state) {
 $scope.addPost = function(){
        $state.transitionTo("addAPost");
    }


})
   




.controller('NotificationsCtrl', function($scope) {



})


.controller('adminCreateCommitteeCtrl', function($scope,$state) {



})

.controller('footballCtrl', function($scope) {



})


.controller('groupSearchDemoCtrl', function($scope) {


})
   
.controller('selectedPostCtrl', function($scope) {



})

.controller('selectedPostBoxingCtrl', function($scope) {



})

.controller('selectedPostDemoCtrl', function($scope) {



})












































 //sanda controllers

  //User Controllers

    //Display Slider Controller.
    .controller('slider', function($scope, $ionicSlideBoxDelegate, $http,
        $state) {
        var role = window.localStorage.getItem("role");
        var CusID = window.localStorage.getItem("id");
        //Check whether the disable button is on or off
        $http.get("http://localhost/test/getDisableadd.php?CusID="+CusID).success(
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
        $http.get("http://localhost/test/showBanner.php").success(function(
            data) {
            $scope.Banner = data;
            $ionicSlideBoxDelegate.update();
        });

        $http.get("http://localhost/test/showBannerSpecila.php").success(function(
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
                "http://localhost/test/showFavourite.php?CusID=" +
                CusID).success(function(data) {
                $scope.items = data;
            });
        };
        //refresh the item list by pulling
        $scope.doRefresh = function() {
          //Load the advertisement
          $http.get(
                "http://localhost/test/showFavourite.php?CusID=" +
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
                        "http://localhost/test/deletefavouriteAdd.php?thissID=" +
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
        $http.get("http://localhost/test/showfacebookProf.php?CusID=" +
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
            window.open(Link, "_system", "width=1200, height=800");
          }     
    })

    //Controller for facebook card method
    .controller('facebookProfPageCtrl', function($timeout, $state, $scope, $http, $ionicActionSheet) {
      var CusID = window.localStorage.getItem("id");
        //Get the business card details from the table
        $http.get("http://localhost/test/showfacebookProf.php?CusID=" +
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
            window.open(Link, "_system", "width=1200, height=800");
          }     
    })

    //Controller for Search page of Linkedin Profile
    .controller('linkedinPageSearchCtrl', function($timeout, $state, $scope, $http, $ionicActionSheet) {
        var CusID = window.localStorage.getItem("id");
        //Get the business card details from the table
        $http.get("http://localhost/test/showLinkedin.php?CusID=" +
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
        $http.get("http://localhost/test/showBuissnessCard.php?CusID=" +
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
        $http.get("http://localhost/test/showLinkedin.php?CusID=" +
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
              window.open(publicProfileUrl, "_system", "width=1200, height=800");
            }
    })

    
    //User Settings Controller
    .controller('settingsBCtrl', function($scope,$http,$state,$ionicPopup) {
      var CusID = window.localStorage.getItem("id");
      //Check whether the Disabled button is on or off
      $http.get("http://localhost/test/getDisableadd.php?CusID="+CusID).success(function(
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
          $http.post("http://localhost/test/DisableAddUpdate.php?CusID="+CusID+"&addStatus="+addStatus).success(
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
          $http.post("http://localhost/test/DisableAddUpdate.php?CusID="+CusID+"&addStatus="+addStatus).success(
                function(data) {
                  var alertPopup = $ionicPopup.alert({
                    title: 'The Changes will be apply from the next login'
                });
          });
        }
      }

      $scope.launch = function() {
        window.open("http://localhost/test/LinkedIn.php?memberid="+CusID, "_system", "width=400, height=350");
      }

      $scope.launchfb = function() {
        window.open("http://localhost/test/facebookprof.php?memberid="+CusID, "_system", "width=400, height=350");
      }
    })

    //Controller for notifications
    .controller('notifyCtrl',function($scope,$http,$state,$ionicPopup) {
      var CusID = window.localStorage.getItem("id");
      //Get all the notifications
      $http.get("http://localhost/test/notificationUser.php?CusID="+CusID).success(
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
            "http://localhost/test/deleteNotifications.php").success(function(data) {
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
        $http.get("http://localhost/test/notificationUser.php?CusID="+CusID).success(
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
        $http.get("http://localhost/test/addFullShow.php?CusID=" + CusID).success(
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
        $http.get("http://localhost/test/checkFavouriteadd.php?CusID="+CusID1+"&Addid="+CusID).success(
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
                        "http://localhost/test/FavouriteAdd.php?CusID=" +
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
                        "http://localhost/test/FavouriteAddRemove.php?CusID=" +
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
                            "http://localhost/test/sendUserAdvertisement.php?title=" +
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
                "http://localhost/test/addUserListView.php?CusID=" +
                CusID).success(function(data) {
                $scope.items = data;
            });
        };
        //refresh the item list by pulling
        $scope.doRefresh = function() {
          //Load the advertisement
          $http.get(
                "http://localhost/test/addUserListView.php?CusID=" +
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
                        "http://localhost/test/deleteUserAddvertisement.php?thissID=" +
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
        $http.get("http://localhost/test/showBuissnessCard.php?CusID=" +
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
              $http.get("http://localhost/test/showBuissnessCard.php?CusID=" +
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
                "http://localhost/test/showBuissnessCard.php?CusID=" +
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
                            "http://localhost/test/buissnessCardEdit.php?Profession=" +
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
                            "http://localhost/test/about2Add.php?ID=" +
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
                            "http://localhost/test/about3Add.php?workPlace=" +
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
                "http://localhost/test/adminSpecialList.php").success(function(data) {
                $scope.items = data;
            });
        };
        //refresh the item list by pulling
        $scope.doRefresh = function() {
          //Load the advertisement
          $http.get(
                "http://localhost/test/adminSpecialList.php").success(function(data) {
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
                        "http://localhost/test/SpecialAddRemove.php?Addid="+IDAdd).success(function(data) {
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
        $http.get("http://localhost/test/pendingAddDetails.php?CusID=" + CusID).success(
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
      $http.get("http://localhost/test/getDisableadd.php?CusID="+CusID).success(function(
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
      $http.get("http://localhost/test/getDisableadd.php?CusID="+CusID).success(function(
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
          $http.post("http://localhost/test/DisableAddUpdate.php?CusID="+CusID+"&addStatus="+addStatus).success(
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
          $http.post("http://localhost/test/DisableAddUpdate.php?CusID="+CusID+"&addStatus="+addStatus).success(
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
          $http.post("http://localhost/test/DisableAddUpdate2.php?addStatus1="+addStatus1).success(
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
          $http.post("http://localhost/test/DisableAddUpdate2.php?addStatus1="+addStatus1).success(
                function(data) {
                  var alertPopup = $ionicPopup.alert({
                    title: 'The Changes have been applied(The changes will appear on the admin profile from the next login)'
                });
          });
        }
      }

      //Redirrect to google drive openning page
      $scope.openGoogleDrive = function(){
        window.open("http://localhost/test/GoogleDrive.php", "_system", "width=400, height=350");
      }
    })


    //show list of pending Advertisement controller
    .controller('adminAddListCtrl', function($scope, $http, $state, $ionicPopup ,$window) {
        loadtable();
        //Load all the pending advertisment
        function loadtable() {
          //Get all the pending advertisment
            $http.get("http://localhost/test/adminAddverList.php").success(
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
                        "http://localhost/test/AcceptAdver.php?SID=" +
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
                            "http://localhost/test/RejectAdver.php?SID=" +
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
            $http.get("http://localhost/test/adminAddverList.php").success(
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
                            "http://localhost/test/postAdvertiesement.php?Selected=" +
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
            $http.get("http://localhost/test/showAdvertiesement.php").success(
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
          $http.get("http://localhost/test/showAdvertiesement.php").success(
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
                        "http://localhost/test/deleteAddvertisement.php?thissID=" +
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
        $http.get("http://localhost/test/addFullShow.php?CusID=" + CusID).success(
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
        $http.get("http://localhost/test/checkSpecialadd.php?Addid="+CusID).success(
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
                        "http://localhost/test/SpecialAdd.php?Addid="+IDAdd).success(function(data) {
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
                        "http://localhost/test/SpecialAddRemove.php?Addid="+IDAdd).success(function(data) {
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
                "http://localhost/test/showEditAddvertiesement.php?CusID=" +
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
                            "http://localhost/test/editAdvertisement.php?Selected=" +
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

    
      //$state.go('tabsController.mainprofileCtrl',{name: role});
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
      $http.get('http://localhost/test/searchresult.php?name='+name+'&class='+class1+'&profession='+profession+'&country='+country
        ).then(function(response){
          
          $scope.searchItems = response.data;
      
      });

  })

   .controller('groupresultCtrl', function($scope, $http) {
      var name = window.localStorage.getItem("name");
       var class1 = window.localStorage.getItem("class");
       var group = window.localStorage.getItem("group");

        $http.get('http://localhost/test/searchgroupresult.php?name='+name+'&class='+class1+'&group='+group
        ).then(function(response){
          
          $scope.searchItems = response.data;
      
      });

   })
 //mahesh controller2
 .controller('favouriteContactsCtrl', function($scope,$http) {
         var id = window.localStorage.getItem("id");

        $http.get('http://localhost/test/favouriteList.php?id='+id).then(function(response){
      
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
    $http.get("http://localhost/test/followpage.php?follower="+follower).success(function(data){   
    var fav=[];
    fav=data;
    $scope.name=fav[0].name;
    $scope.email=fav[0].email;
    $scope.class=fav[0].class;
    $scope.dob=fav[0].dob;
    $scope.address=fav[0].address; 
    $scope.contact_no=fav[0].contact_no;
  })

    $http.get('http://localhost/test/checkFollow.php?follower='+follower+'&id='+id).then(function(response){
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
     $http.post("http://localhost/test/followdatabase.php?follower="+follower+"&id="+id)
    .success(function(data){  
      var alertPopup = $ionicPopup.alert({
        title: 'You followed this person'
      });
      });
    }

  })


 
       //yik controllers
    .controller('eventsCtrl', function($scope,$state,$http) {
    $scope.createEvent = function(){
        $state.transitionTo("createEvent");
    }
    $scope.descriptionpg = function(){
        $state.transitionTo("eventDesc");
    }
    $scope.addE = function(){
    $http.get('http://localhost/test/addEvent.php').then(function(response){
        
          $scope.eventNames = response.data;
      
      });
  }

})
.controller('createevent', function($scope,$state) {
      $scope.created = function(){
        $state.transitionTo("AdmintabsController");
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

.controller('eventdesc', function($scope, $ionicActionSheet, $timeout) {

       $scope.textColor  = '#004d4d';
      $scope.changeColor = function(){
        $scope.textColor = '  #505050 ';
        $scope.textColor2 = '#004d4d';
      }
       $scope.changeColor2 = function(){
        $scope.textColor = '#004d4d';
        $scope.textColor2 = ' #606060 ';
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

.controller('adminevent', function($scope,$state) {

       
          $scope.createEvent1 = function(){
        $state.transitionTo("createEvent");
    }
           $scope.descriptionpg = function(){
        $state.transitionTo("eventDesc");
    }

     $scope.c = 0;
})

.controller('admineventdesc', function($scope) {
         $scope.title="Save Wilpattu";
         $scope.date="May 19th";

         $scope.demo = function(){
              $scope.date="May 20th";
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



.controller('eventgoing', function($scope) {


    $scope.eventNames = [{name :"'Save Water' Charity", date:"27th April 2016", image:"img/img1.jpg"},
                       {name:"'Memories' 13C Batch Party", date:"30th April 2016", image:"img/img2.jpg"} ,
                       {name:"Wesak dansala",date:"6th May 2016", image:"img/img3.jpg"} ]; 
 
})

.controller('eventhosted', function($scope) {


    $scope.eventNames = [{name :"'Save Water' Charity", date:"27th April 2016", image:"img/img1.jpg"},
                       {name:"'Memories' 13C Batch Party", date:"30th April 2016", image:"img/img2.jpg"} ,
                       {name:"Wesak dansala",date:"6th May 2016", image:"img/img3.jpg"} ]; 
 
})

.controller('eventpast', function($scope) {


    $scope.eventNames = [{name :"'Save Water' Charity", date:"27th April 2016", image:"img/img1.jpg"}];
                      
})
.controller('eventgroup', function($scope) {


    $scope.eventNames = [ {name:"Wesak dansala",date:"6th June 2016", image:"img/img3.jpg", assoc:"1994 Old Boys Association"} ];
                      
})
.controller('eventsubgroup', function($scope) {


    $scope.eventNames = [{name :"Save Wilpattu", date:"19th May 2016", image:"img/savewil.jpg", assoc:"Doctors Association"},
                       {name:"'Memories' 13C Batch Party", date:"30th May 2016", image:"img/img2.jpg", assoc:"Class of 13C"} ,
                       {name :"'Save Water' Charity", date:"27th May 2016", image:"img/img1.jpg", assoc:"1994 Charity Organization"}
                       ];
                    
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
      
  $scope.calendarVals = [{d1 :"01", d2 :"02", d3 :"03", d4 :"04",d5 :"05", d6 :"06", d7 :"07"},
                       {d1 :"08", d2 :"09", d3 :"10", d4 :"11",d5 :"12", d6 :"13", d7 :"14"},
                       {d1 :"15", d2 :"16", d3 :"17", d4 :"18",d5 :"19", d6 :"20", d7 :"21"},
                        {d1 :"22", d2 :"23", d3 :"24", d4 :"25",d5 :"26", d6 :"27", d7 :"28"},
                        {d1 :"29", d2 :"30", d3 :"31", d4 :"01",d5 :"02", d6 :"03", d7 :"04"} ]; 
 
  $scope.calcVal = function(){

  }
  $scope.ebit = true;

  $scope.eventCal = {day:"May 02",title:"Brothers birthday",stime:"12:00pm", etime:"05:00pm",location:"Kingsbury, Colombo",description:"get the gifts ready"};  

})

.controller('calcdet',function($scope){
    $scope.eventCal = {day:"May 02",title:"Brothers birthday",stime:"12:00pm", etime:"05:00pm",location:"Kingsbury, Colombo",description:"get the gifts ready"};  

   })


.controller('MyController', function($scope, $http, $ionicPopover,$state,  $ionicPopup) {

        $scope.addE();

  
        $scope.show = function(a){
    
          if(a=='Upcoming'){
                $state.transitionTo('tabsController.events');
          }
           if(a=='Going'){
                $state.transitionTo('eventGoing');
          }
          if(a=='Past'){
                $state.transitionTo('eventPast');
          }
          if(a=='Hosted'){
                $state.transitionTo('eventHosted');
          }
           if(a=='Group'){
                $state.transitionTo('eventGroup');
          }
          if(a=='Sub Group'){
                $state.transitionTo('eventSubgroup');
          }
        
  }
    
   $scope.calendarVals = [{d1 :"01", d2 :"02", d3 :"03", d4 :"04",d5 :"05", d6 :"06", d7 :"07"},
                       {d1 :"08", d2 :"09", d3 :"10", d4 :"11",d5 :"12", d6 :"13", d7 :"14"},
                       {d1 :"15", d2 :"16", d3 :"17", d4 :"18",d5 :"19", d6 :"20", d7 :"21"},
                        {d1 :"22", d2 :"23", d3 :"24", d4 :"25",d5 :"26", d6 :"27", d7 :"28"},
                        {d1 :"29", d2 :"30", d3 :"31", d4 :"01",d5 :"02", d6 :"03", d7 :"04"} ]; 
 
   

  $scope.calcVal = function(){
    
  }

    $scope.admindescriptionpg = function(){
        $state.transitionTo("adminEventDesc");
    }

  /*$scope.eventNames = [{name :"'Save Water' Charity", date:"27th May 2016", image:"img/img1.jpg", assoc:"1994 Charity Organization"},
                       {name:"'Memories' 13C Batch Party", date:"30th May 2016", image:"img/img2.jpg", assoc:"Class of 13C"} ,
                       {name:"Wesak dansala",date:"6th June 2016", image:"img/img3.jpg", assoc:"1994 Old Boys Association"} ]; 
 */
  $scope.Birthdays = [{name :"Kasun Senevirathne", day:"Today", image:"img/img4.jpg"},
                       {name:"Malinda Samarathunga",day:"Today", image:"img/img5.jpg"} ]; 
  
  $scope.neweventName = [{name :"Hello", date:"2k7th May 2016", image:"img/img1.jpg", assoc:"1994 Charity Organization"}];
  

  if($scope.c==0){
  $scope.newevent = false;
}else
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
     } else {
      
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

  $scope.closePopover = function() {
     $scope.noInterest = true;
     $scope.ebit = false;
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


});