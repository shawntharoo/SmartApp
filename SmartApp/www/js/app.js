// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ngOpenFB','ngCordova'])

.run(function($ionicPlatform, ngFB, $rootScope) {

  $rootScope.bgImage = "img/6.jpg";

  ngFB.init({appId: '1288691364489189'});
  $ionicPlatform.ready(function($scope,$state) {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	
	/*if(window.loclaStorage.getItem("username")=='null'){
	$state.transitionTo("tabsController.profile");
	}
	else{
	$state.transitionTo("login");
	}*/
  });
})

/*.value('GoogleApp', {
    apiKey: 'YOUR_API_KEY',
    clientId: '61431024460-cnt3pdmt0n7gimmej7etirfr1skoj89u.apps.googleusercontent.com',
    scopes: [
      // whatever scopes you need for your app, for example:
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/youtube',
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/userinfo.profile'
      // ...
    ]
  })*/


