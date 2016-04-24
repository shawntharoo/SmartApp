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
   
.controller('signupCtrl', function($scope,$http,$ionicPopup,$state) {

		$scope.signup = function(){

		$state.transitionTo("tabsController.mainprofile");
	}
                                                                      
 /*

 $scope.signup = function(a,b,c){

 window.localStorage.setItem("username",b);
 $http.get('http://localhost/test/signup.php?name='+a+'&username='+b+'&password='+c).then(function(response){
 if(response.data=="true"){
 var alertPopup = $ionicPopup.alert({
	title:'registered',
	template:'you have succesfully registered'
	
 });
 $state.transitionTo('tabsController.orderPizza');

 }

 });
 };
 */

})
 .controller('profileCtrl', function($scope) {

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
.controller('groupCtrl', function($scope) {

})
   
.controller('cricketCtrl', function($scope) {

})
   
.controller('selectedPostCtrl', function($scope) {

})
   
.controller('cricketPostCtrl', function($scope) {

})
   
.controller('addAPostCtrl', function($scope) {

})
   
.controller('createAGroupCtrl', function($scope) {

})
   
.controller('followAGroupCtrl', function($scope) {

})
   
.controller('settingsCtrl', function($scope) {

})//sanda controllers
  .controller('showAdvertiesementCtrl', function($scope,$http) {
  $http.get('http://localhost/SmartApp/www/#/database.json')
  .success(function(response){
    $scope.advertiesement = response.records;
  });
})
   
.controller('aboutCtrl', function($scope) {

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

.controller('eventdesc', function($scope) {

})

.controller('MyController', function($scope, $http, $ionicPopover) {

  
        $scope.show = function(a){
    alert(a);
  }

  $scope.eventNames = [{name :"'Save Water' Charity", date:"27th April 2016", image:"img/img1.jpg"},
                       {name:"'Memories' 13C Batch Party", date:"30th April 2016", image:"img/img2.jpg"} ,
                       {name:"Wesak dansala",date:"6th May 2016", image:"img/img3.jpg"} ]; 
 
  $scope.Birthdays = [{name :"Kasun Senevirathne", day:"Today", image:"img/img4.jpg"},
                       {name:"Malinda Samarathunga",day:"Today", image:"img/img5.jpg"} ]; 
  
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
