angular.module('app.controllers', [])
  
.controller('orderPizzaCtrl', function($scope,$state) {

	$scope.home = function(){

		$state.transitionTo("login");
	}
})
   
.controller('cartCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope) {

})
.controller('timelineCtrl', function($scope) {

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
 $state.transitionTo('tabsController.mainprofile');

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
       { text: 'Logout' }
      
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
  .controller('mainprofileCtrl', function($scope,$state) {
      $scope.swichtobusiness= function(){

    $state.transitionTo("tabsController2.showAdvertiesement");
  }

})
    .controller('requestCtrl', function($scope) {

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

  $scope.addPost = function(){
        $state.transitionTo("addAPost");
    }
})
//sanda controllers
  .controller('showAdvertiesementCtrl', function($scope,$http) {
  $http.get('http://localhost/SmartApp/www/#/database.json')
  .success(function(response){
    $scope.advertiesement = response.records;
  });
})
   
.controller('aboutCtrl', function($scope) {

})

.controller('about2PageCtrl', function($scope) {

})

.controller('about3PageCtrl', function($scope) {

})
   
.controller('searchAdvertiesementCtrl', function($scope) {

})
      
.controller('postAdvertiesementCtrl', function($scope) {

})
   
.controller('buissnessCardCtrl', function($scope) {

})
   
.controller('fullShowAdvertiesementCtrl', function($scope) {

})
   
.controller('fullEditAdvertiesementCtrl', function($scope) {

})
 
.controller('editButtonPageCtrl', function($scope) {

})

.controller('editProfilePageCtrl', function($scope) {

})

  .controller('ushowadvertiesementCtrl', function($scope) {

})

.controller('ufullShowAdvertiesementCtrl', function($scope) {

})

.controller('ubuissnessCardCtrl', function($scope) {

})

.controller('ueditProfilePageCtrl', function($scope) {

})

.controller('uaboutCtrl', function($scope) {

})

.controller('uabout2PageCtrl', function($scope) {

})

.controller('uabout3PageCtrl', function($scope) {

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
.controller('createevent', function($scope) {

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

.controller('allmsg',function($scope){
      $scope.searchval= false;

      $scope.searchppl = function(){
        $scope.searchval= true;
      }
})

.controller('exmsg',function($scope){
   $scope.newbit = true;

   $scope.addMsg = function(){
      $scope.newbit=false;
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