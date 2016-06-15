angular.module('app.controllers', [])
  
.controller('orderPizzaCtrl', function($scope,$state) {

	$scope.home = function(){

		$state.transitionTo("login");
	}
})
.controller('slider',function($scope,$ionicSlideBoxDelegate){

   
})
   
.controller('cartCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope,$state) {
    $scope.log = function(params){
        $scope.x = params.name1;
        //$scope.res = angular.equals($scope.x,'admin');
        if($scope.x=="admin"){
         // alert("yay");
         $state.transitionTo('AdmintabsController.mainprofile',{name: $scope.x});
        }
        else {
         // alert("nay");
         $state.go('tabsController.mainprofile',{name: $scope.x});
        }
    }
})

.controller('timelineCtrl', function($scope) {

})
.controller('resetpasswordCtrl', function($scope) {

})
.controller('signupCtrl', function($scope,$http,$ionicPopup,$state) {

	/*	$scope.signup = function(){

		$state.transitionTo("tabsController.mainprofile");
	}
       */                                                               
 

 $scope.signup = function(a,b,c){

 window.localStorage.setItem("username",b);
 $http.get('http://localhost/test/signup.php?name='+a+'&class='+b+'&email='+c).then(function(response){
 if(response.data=="true"){
 var alertPopup = $ionicPopup.alert({
	title:'SmartApp',
	template:'your request has successfully sent to the system.Check mail for the confirmation'
	
 });
 //$state.transitionTo('tabsController.mainprofile');

 }

 });
 };
 
 

})
 .controller('profileCtrl', function($scope,$ionicActionSheet,$timeout,$state) {
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


})
 .controller('addressCtrl', function($scope) {


})
  .controller('mainprofileCtrl', function($scope,$state, $stateParams) {

    $scope.n = $stateParams.name;
    if($scope.n == 'Saman'){
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

     
      $scope.swichtobusiness= function(){

    $state.transitionTo("tabsController2.showAdvertiesement");
  }

})

    .controller('requestCtrl', function($scope) {

})
     .controller('request1Ctrl', function($scope) {

})
     .controller('occupationCtrl', function($scope) {

})
       .controller('familyCtrl', function($scope) {

})
       //panchali controllers

.controller('groupCtrl', function($scope,$state) {
$scope.backTogroup = function(){
        $state.transitionTo("adminGroup");
    }
})
   
.controller('adminGroupCtrl', function($scope,$state) {

$scope.backTogroup = function(){
        $state.transitionTo("group");
    }

    $scope.createGroup = function(){
        $state.transitionTo("adminCreateAGroup");
    }

})
   


.controller('groupSearchDemoCtrl', function($scope) {


})
   
.controller('selectedPostCtrl', function($scope) {



})

.controller('selectedPostDemoCtrl', function($scope) {



})
   
.controller('cricketPostCtrl', function($scope,$state) {

  $scope.addPost = function(){
        $state.transitionTo("addAPost");
    }

 

})
   
.controller('followCricketCtrl', function($scope,$state) {
 $scope.backTogroup = function(){
        $state.transitionTo("group");
    }
})

.controller('addAPostCtrl', function($scope) {

})
   
.controller('adminCreateAGroupCtrl', function($scope) {



})
.controller('footballCtrl', function($scope) {



})
   
.controller('followAGroupCtrl', function($scope) {



})
   
.controller('settingsCtrl', function($scope,$state) {

$scope.inviteFriends = function(){
        $state.transitionTo("inviteFriends");
    }

})
   
.controller('inviteFriendsCtrl', function($scope) {


})
.controller('selectedGroupPostCtrl', function($scope) {



})

.controller('NotificationsCtrl', function($scope) {



})



.controller('groupPostCtrl', function($scope,$state) {

  $scope.addCalendar = function(){
        $state.transitionTo("calendar");
    }

  $scope.addMsg = function(){
        $state.transitionTo("allmsg");
  }

  $scope.addNotif = function(){
        $state.transitionTo("notifications");
  }

    $scope.addnew = function() {
      $scope.postbit = !$scope.postbit;
    }
})














































//sanda controllers
  .controller('showAdvertiesementCtrl', function($scope,$http) {
  $http.get('http://localhost/SmartApp/www/#/database.json')
  .success(function(response){
    $scope.advertiesement = response.records;
  });
})
   
//user
//Show Business Card Control
.controller('buissnessCardCtrl', function($scope,$http,$state) {
    var CusID = window.localStorage.getItem("id");
    $http.get("http://localhost/SmartAppDB/ajax/showBuissnessCard.php?CusID="+CusID).success(function(data){
        
    var card=[];
    card=data;
    $scope.Image=card[0].Image;
    $scope.Profession=card[0].Profession;
    $scope.Skills=card[0].Skills;
    $scope.Awards=card[0].Awards;
    $scope.WorkPlace=card[0].WorkPlace;
    $scope.Address=card[0].Address; 
    $scope.Contact=card[0].Contact;
    $scope.Email=card[0].Email;
    $scope.WorkHour=card[0].WorkHour;
  });

})


//Edit BusinessCard Control
.controller('editProfilePageCtrl', function($scope,$http,$ionicPopup,$state) {
    $scope.BuissnessCardValues = function () {
    var CusID = window.localStorage.getItem("id");
    $http.get("http://localhost/SmartAppDB/ajax/showBuissnessCard.php?CusID="+CusID).success(function(data){   
    var card=[];
    card=data;
    $scope.Profession=card[0].Profession;
    $scope.Skills=card[0].Skills;
    $scope.Awards=card[0].Awards;
    $scope.WorkPlace=card[0].WorkPlace;
    $scope.Address=card[0].Address; 
    $scope.Contact=card[0].Contact;
    $scope.Email=card[0].Email;
    $scope.WorkHour=card[0].WorkHour;
  })
  }


    $scope.BuissnessCardEdit = function (Profession,Skills,Awards,WorkPlace,Address,Contact,Email,WorkHour) {

      if(Profession == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter Profession'
      });
    }
    else if(WorkPlace == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter Work Place Name'
      });
    }
    else if(Address == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter Work Place Address'
      });
    }
    else if(Contact == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Contact number is empty or Incorrect'
      });
    }
    else if(Email == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter Work Place Email'
      });
    }
    else {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Your Current Details Will Be Changed'
      });
      confirmPopup.then(function(res) {
        if(res) {
          $http.get("http://localhost/smartAppDB/ajax/buissnessCardEdit.php?Profession="+Profession+"&Skills="+Skills+"&Awards="+Awards+"&WorkPlace="+WorkPlace+"&Address="+Address+"&Contact="+Contact+"&Email="+Email+"&WorkHour="+WorkHour+"&CusID="+CusID).success(function (data) {
          });
        } else {
          console.log('not updated');
        }
      });

    }

    }

})



//First Registration form Of the Business Profile 
.controller('about2PageCtrl', function($scope,$http,$state,$ionicPopup) {
    var CusID = window.localStorage.getItem("id");
   $scope.about2add = function (profession,skills,awards) {

    if(profession == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter Profession'
      });
    }
    else {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Proceed with the Registration'
      });
      confirmPopup.then(function(res) {
        if(res) {
         $http.post("http://localhost/SmartAppDB/ajax/about2Add.php?ID="+CusID+"&profession="+profession+"&skills="+skills+"&awards="+awards)
    .success(function(data){ 
      var alertPopup = $ionicPopup.alert({
        title: 'Successfully Registerd'
      });
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
.controller('about3PageCtrl', function($scope,$http,$state,$ionicPopup) {
  var CusID = window.localStorage.getItem("id");
   $scope.about3add = function (workPlace,address,contact,email,workHour) {

    if(workPlace == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter Working Place'
      });
    }
    else if(address == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter Work Place Address'
      });
    }
    else if(contact == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Contact number is empty or Incorrect'
      });
    }
    else if(email == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter Email'
      });
    }
    else {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Proceed with the Registration'
      });
      confirmPopup.then(function(res) {
        if(res) {
         $http.post("http://localhost/SmartAppDB/ajax/about3Add.php?workPlace="+workPlace+"&address="+address+"&contact="+contact+"&email="+email+"&workHour="+workHour+"&CusID="+5)
         .success(function(data){ 
      var alertPopup = $ionicPopup.alert({
        title: 'Business Card Completed'
      });
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



//Slider Bottom of the Application
.controller('slider',function($scope,$ionicSlideBoxDelegate){

   
})




//admin  
//Admin Post Advertisement 
.controller('upostAdvertiesementCtrl', function($scope,$http,$state,$ionicPopup) {
    $scope.postAdvertiesement = function (Selected,Title,Image,Description,Contact,Email,SDate,EDate) {
          if(Selected == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Select the type'
      });
    }
         else if(Title == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter The title'
      });
    }
    /*else if(Image == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Upload the Banner'
      });
    }*/
    else if(Description == null){
      var alertPopup = $ionicPopup.alert({
        title: 'say something about the Advertiesement'
      });
    }
    else if(Contact == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Contact number is empty or Incorrect'
      });
    }
    else if(Email == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter the Email'
      });
    }
      else {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Proceed with the Registration'
      });
      confirmPopup.then(function(res) {
        if(res) {
         $http.post("http://localhost/SmartAppDB/ajax/postAdvertiesement.php?Selected="+Selected+"&Title="+Title+"&Image="+Image+"&Description="+Description+"&Contact="+Contact+"&Email="+Email+"&SDate="+SDate+"&EDate="+EDate)
    .success(function(data){  
      var alertPopup = $ionicPopup.alert({
        title: 'Advertiesement Posted'
      });
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
   


 //Admin Show Advertisement in a list view
.controller('ushowadvertiesementCtrl', function($scope,$http,$state,$ionicPopup) {
  loadtable();

  function loadtable(){
        $http.get("http://localhost/smartAppDB/ajax/showAdvertiesement.php").success(function(data){
      $scope.advertiesement = data;
    });
  };

  $scope.gotoFullEditShow = function (IDAdd) {
  $state.go('AdmintabsController.ufullEditShow',{id:IDAdd});
  };

  function Currentadvetisment($scope, Addvertisement) {
    $scope.cAdd = Addvertisement.cAdd;
  }

})



//Admin View the Detail View page of the Advertisement  
.controller('ufullEditShowCtrl', function($scope,$http,$state,$ionicPopup,$stateParams) {
$scope.deleteAdvertiesement = function (IDAdd) {
     var confirmPopup = $ionicPopup.confirm({
        title: 'Remove Advertisement'
      });
      confirmPopup.then(function(res) {
        if(res) {
        $http.post("http://localhost/SmartAppDB/ajax/deleteAddvertisement.php?thissID="+IDAdd).success(function(data){  
      var alertPopup = $ionicPopup.alert({
        title: 'Advertiesement Removed'
      });
      });
        } else {
          var alertPopup = $ionicPopup.alert({
        title: 'Advertisement remove failed'
      });
        }
      });
    }


  $scope.gotoEditAdd = function (IDAdd) {
  $state.go('AdmintabsController.uedit',{Eid:IDAdd});
  };
  var CusID = $stateParams.id;
  $http.get("http://localhost/SmartAppDB/ajax/addFullShow.php?CusID="+CusID).success(function(data){
        
   var card=[];
    card=data;
    $scope.IDAdd=card[0].IDAdd;
    $scope.Selected=card[0].Type;
    $scope.Title=card[0].Title;
    $scope.Image=card[0].Image;
    $scope.Description=card[0].Description;
    $scope.Contact=card[0].ContactNo; 
    $scope.Email=card[0].Email;
    $scope.SDate=card[0].StartDate;
    $scope.EDate=card[0].EndDate;
    $scope.CurrentDate=card[0].CDate;
  });


   function ufullEditShowCtrl($scope, Advertisement) {
    $scope.cAdd = Advertisement.cAdd;
  }

})



//Admin Edit the Advertisement
.controller('ufullEditCtrl', function($scope,$http,$state,$ionicPopup,$stateParams) {

    $scope.EidtAddValues = function () {
      var CusID = $stateParams.Eid;
    $http.get("http://localhost/SmartAppDB/ajax/showEditAddvertiesement.php?CusID="+CusID).success(function(data){   
    var card=[];
    card=data;
    $scope.Selected=card[0].Type;
    $scope.Title=card[0].Title;
    $scope.Image=card[0].Image;
    $scope.Description=card[0].Description;
    $scope.Contact=card[0].ContactNo; 
    $scope.Email=card[0].Email;
    $scope.SDate=card[0].StartDate;
    var breakvalue=SDate.split('/');    
    var day=breakvalue[0];
    var mon=breakvalue[1];
    var yer=breakvalue[2];    
    $scope.startdate = new Date(mon+"/"+day+"/"+yer);

    $scope.EDate=card[0].newDate(EndDate);
  })
  }

   $scope.editAdvertiesement = function (Selected,Title,Image,Description,Contact,Email,SDate,EDate) {
     if(Selected == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Select the type'
      });
    }
        else  if(Title == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter The title'
      });
    }
    else if(Image == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Upload the Banner'
      });
    }
    else if(Description == null){
      var alertPopup = $ionicPopup.alert({
        title: 'say something about the Advertiesement'
      });
    }
    else if(Contact == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Contact number is empty or Incorrect'
      });
    }
    else if(Email == null){
      var alertPopup = $ionicPopup.alert({
        title: 'Enter the Email'
      });
    }
      else {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Proceed with the Registration'
      });
      confirmPopup.then(function(res) {
        if(res) {
         $http.post("http://localhost/SmartAppDB/ajax/editAdvertisement.php?Selected="+Selected+"&Title="+Title+"&Image="+Image+"&Description="+Description+"&Contact="+Contact+"&Email="+Email+"&SDate="+SDate+"&EDate="+EDate+"&CusID="+1)
    .success(function(data){  
      var alertPopup = $ionicPopup.alert({
        title: 'Advertiesement Posted'
      });
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























































//mahesh controllers
//mahesh controllers
.controller('pageCtrl', function($scope) {

})
  .controller('resultCtrl', function($scope) {

  })

  .controller('favouriteContactsCtrl', function($scope) {

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

      .controller('searchResultCtrl', function($scope) {

  })
 
       //yik controllers
    .controller('eventsCtrl', function($scope,$state) {
$scope.createEvent = function(){
        $state.transitionTo("createEvent");
    }
     $scope.descriptionpg = function(){
        $state.transitionTo("eventDesc");
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

  $scope.eventNames = [{name :"'Save Water' Charity", date:"27th May 2016", image:"img/img1.jpg", assoc:"1994 Charity Organization"},
                       {name:"'Memories' 13C Batch Party", date:"30th May 2016", image:"img/img2.jpg", assoc:"Class of 13C"} ,
                       {name:"Wesak dansala",date:"6th June 2016", image:"img/img3.jpg", assoc:"1994 Old Boys Association"} ]; 
 
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