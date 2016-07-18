angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
.state('tabsController.mainprofile', {
    url: '/mainprofile/:name',
    views: {
      'tab1': {
        templateUrl: 'templates/mainprofile.html',
        controller: 'mainprofileCtrl'
      }
    }
  }) 
.state('AdmintabsController.mainprofile', {
    url: '/adminmainprofile/:name',
    views: {
      'tab1': {
        templateUrl: 'templates/mainprofile.html',
        controller: 'mainprofileCtrl'
      }
    }
  }) 




























 
//sanda admin start
//Advertisement show page route
              .state('AdmintabsController.ushow', {
    url: '/ushow',
    cache: false,
    views: {
      'tab7': {
        templateUrl: 'templates/ushowadvertiesement.html',
        controller: 'ushowadvertiesementCtrl'
      }
    }
  })

//Detail View of the Advertisment page route
               .state('AdmintabsController.ufullEditShow', {
    url: '/ufullEditShow/:id',
    views: {
      'tab7': {
        templateUrl: 'templates/ufullEditAdvertiesement.html',
        controller: 'ufullEditShowCtrl'
      }
    }
  })

//Advertisment Edit page route
                .state('AdmintabsController.uedit', {
    url: '/uedit/:Eid',
    views: {
      'tab7': {
        templateUrl: 'templates/ueditButtonPage.html',
        controller: 'ufullEditCtrl'
      }
    }
  })

//Advertisement Post page route
                .state('AdmintabsController.upost', {
    url: '/upost',
    views: {
      'tab7': {
        templateUrl: 'templates/upostAdvertiesement.html',
        controller: 'upostAdvertiesementCtrl'
      }
    }
  })              

//Show the pending advertisement page route
                  .state('AdmintabsController.readd', {
    url: '/readd',
    views: {
      'tab7': {
        templateUrl: 'templates/adminAddList.html',
        controller: 'adminAddListCtrl'
      }
    }
  }) 


//the route of the page redirrect when admin clicks the slider
                  .state('AdmintabsController.slideAdd', {
      url: '/slideAdd/:idA',
      views: {
        'tab1': {
          templateUrl: 'templates/slideAdd.html',
          controller: 'slideAddCtrl'
        }
      }
    })
 //sanda admin end





































  //yik event start
    .state('tabsController.events', {
    url: '/events',
    views: {
      'tab5': {
    templateUrl: 'templates/events.html',
    controller: 'eventsCtrl'
        }
       }
  })
     .state('AdmintabsController.adminEvent', {
    url: '/adminEvent',
        views: {
      'tab5': {
    templateUrl: 'templates/adminEventView.html',
    controller: 'adminevent'
    }
       }
  })
  //yik event end


      .state('tabsController.orderPizza', {
    url: '/order',
    views: {
      'tab3': {
        templateUrl: 'templates/page.html',
        controller: 'orderPizzaCtrl'
      }
    }
  })
          .state('tabsController.grouppost', {
    url: '/grouppost',
    views: {
      'tab7': {
        templateUrl: 'templates/groupPost.html',
        controller: 'groupPostCtrl'
      }
    }
  })  //mahesh

            .state('tabsController.favouriteContacts', {
    url: '/favourite',
    views: {
      'tab6': {
        templateUrl: 'templates/favouriteContacts.html',
        controller: 'favouriteContactsCtrl'
      }
    }
  })



  
         

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cart'
      2) Using $state.go programatically:
        $state.go('tabsController.cart');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
   .state('profileEdit', {
    url: '/Edit',
    templateUrl: 'templates/profileEdit.html',
    controller: 'profileEditCtrl'
  })
    .state('resetpassword', {
    url: '/resetpassword',
    templateUrl: 'templates/resetpassword.html',
    controller: 'resetpasswordCtrl'
  })
  
  
  
  .state('tabsController.Groups', {
    url: '/page-group',
    views: {
      'tab1': {
        templateUrl: 'templates/group.html',
        controller: 'groupCtrl'
      },
      'tab2': {
        templateUrl: 'templates/group.html',
        controller: 'groupCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })
   .state('AdmintabsController', {
    url: '/Admintab',
    templateUrl: 'templates/Admintabscontroller.html',
    abstract:true
  })
  

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
  
    .state('genaraldetails', {
    url: '/address',
    templateUrl: 'templates/address.html',
    controller: 'addressCtrl'
  })
    .state('profile', {
    url: '/page6',
    
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      
    
  })
        .state('request', {
    url: '/request',
    
        templateUrl: 'templates/request.html',
        controller: 'requestCtrl'
      
    
  })
         .state('request1', {
    url: '/request1',
    
        templateUrl: 'templates/request1.html',
        controller: 'request1Ctrl'
      
    
  })
      .state('timeline', {
    url: '/timeline',
    
        templateUrl: 'templates/timeline.html',
        controller: 'timelineCtrl'
      
    
  })
         .state('occupation', {
    url: '/occupation',
    templateUrl: 'templates/occupation.html',
    controller: 'occupationCtrl'
  })
           .state('family', {
    url: '/family',
    templateUrl: 'templates/family.html',
    controller: 'familyCtrl'
  })
  //yik routes

.state('eventPage', {
    url: '/eventPage',
    
    templateUrl: 'templates/eventPage.html',
    controller: 'eventPageCtrl'
  })

  .state('createEvent', {
    url: '/createNewEvent',
    templateUrl: 'templates/createEvent.html',
    controller: 'createevent'
  })

  .state('eventTypes', {
    url: '/OtherEvents',
    templateUrl: 'templates/eventTypes.html',
    controller: 'eventtype'
  })

   .state('eventDesc', {
    url: '/description',
    templateUrl: 'templates/eventDesc.html',
    controller: 'eventdesc'
  })

   .state('eventGoing', {
    url: '/going',
    templateUrl: 'templates/goingEvents.html',
    controller: 'eventgoing'
  })

    .state('eventHosted', {
    url: '/hosted',
    templateUrl: 'templates/hostedEvents.html',
    controller: 'eventhosted'
  })

     .state('eventPast', {
    url: '/past',
    templateUrl: 'templates/pastEvents.html',
    controller: 'eventpast'
  })
     .state('eventGroup', {
    url: '/group',
    templateUrl: 'templates/eventGroup.html',
    controller: 'eventgroup'
  })
     .state('eventSubgroup', {
    url: '/subgroup',
    templateUrl: 'templates/eventSubgroup.html',
    controller: 'eventsubgroup'
  })

  

   .state('adminEventDesc', {
    url: '/admindescription',
    templateUrl: 'templates/adminEventDesc.html',
    controller: 'admineventdesc'
  })

   .state('privatemsg', {
    url: '/messages',
    templateUrl: 'templates/privatemsg.html',
    controller: 'msg'
  })

   .state('allmsg', {
    url: '/allmessages',
    templateUrl: 'templates/messages.html',
    controller: 'allmsg'
  })
   
   .state('exmsg', {
    url: '/exmessages',
    templateUrl: 'templates/examplemsg.html',
    controller: 'exmsg'
  })

   .state('bdaymsg', {
    url: '/bdaymessages',
    templateUrl: 'templates/bdaymsg.html',
    controller: 'bdaymsg'
  })

    .state('calendar', {
    url: '/calendar',
    templateUrl: 'templates/calendar.html',
    controller: 'calendar'
  })
   
   .state('calcdet', {
    url: '/calendardetails',
    templateUrl: 'templates/calcDetail.html',
    controller: 'calcdet'
  })



   //panchali routes

    .state('group', {
    url: '/page-group',
    templateUrl: 'templates/group.html',
    controller: 'groupCtrl'
  })

    .state('groupSearchDemo', {
    url: '/page-group-groupSearchDemo',
    templateUrl: 'templates/groupSearchDemo.html',
    controller: 'groupSearchDemoCtrl'
  })
  .state('adminGroup', {
    url: '/page-group-admin',
    templateUrl: 'templates/adminGroup.html',
    controller: 'adminGroupCtrl'
  })

  

 .state('followCricket', {
    url: '/page-follow-cricket',
    templateUrl: 'templates/followCricket.html',
    controller: 'followCricketCtrl'
  })

  .state('football', {
    url: '/page-football-mainpage',
    templateUrl: 'templates/football.html',
    controller: 'footballCtrl'
  })
  .state('selectedPost', {
    url: '/page-group-post-one',
    templateUrl: 'templates/selectedPost.html',
    controller: 'selectedPostCtrl'
  })

   .state('selectedPostDemo', {
    url: '/page-selectedPostDemo',
    templateUrl: 'templates/selectedPostDemo.html',
    controller: 'selectedPostDemoCtrl'
  })

  .state('cricketPost', {
    url: '/page-group-post',
    templateUrl: 'templates/cricketPost.html',
    controller: 'cricketPostCtrl'
  })

  .state('addAPost', {
    url: '/page-add-grouppost',
    templateUrl: 'templates/addAPost.html',
    controller: 'addAPostCtrl'
  })

  .state('adminCreateAGroup', {
    url: '/page-create-group',
    templateUrl: 'templates/adminCreateAGroup.html',
    controller: 'adminCreateAGroupCtrl'
  })

  .state('followAGroup', {
    url: '/page-follow-group12 members',
    templateUrl: 'templates/followAGroup.html',
    controller: 'followAGroupCtrl'
  })

  .state('settings', {
    url: '/page-group-setting',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('inviteFriends', {
    url: '/page-invite-group',
    templateUrl: 'templates/inviteFriends.html',
    controller: 'inviteFriendsCtrl'
  })

  .state('notifications', {
    url: '/notifications',
    templateUrl: 'templates/Notifications.html',
    controller: 'NotificationsCtrl'
  })























//Tabscontroller of the business profile
  .state('tabsController2', {
            url: '/tabsController2',
            templateUrl: 'templates/tabsController2.html',
            abstract: true
        })


//the route of the page redirrect when User clicks the slider
  .state('tabsController.slideAdd', {
            url: '/slideAdd/:idA',
            views: {
                'tab1': {
                    templateUrl: 'templates/slideAdd.html',
                    controller: 'slideAddCtrl'
                }
            }
        })

//The businesscard Select page route
  .state('tabsController2.bchoice', {
            url: '/bchoice',
            cache: false,
            views: {
                'tab3': {
                    templateUrl: 'templates/businessCardChice.html',
                    controller: 'bchoiceCtrl'
                }
            }
        })

  //The search businesscard Select page route
  .state('tabsController2.bchoiceSearch', {
            url: '/bchoiceSearch',
            cache: false,
            views: {
                'tab3': {
                    templateUrl: 'templates/businessCardChiceSearch.html',
                    controller: 'bchoiceSearchCtrl'
                }
            }
        })

//The businesscard page route
  .state('tabsController2.buissnessCard', {
            url: '/buissnessCard',
            cache: false,
            views: {
                'tab3': {
                    templateUrl: 'templates/buissnessCard.html',
                    controller: 'buissnessCardCtrl'
                }
            }
        })

  //The serch businesscard view page route
  .state('tabsController2.buissnessCardsearch', {
            url: '/buissnessCardsearch',
            cache: false,
            views: {
                'tab3': {
                    templateUrl: 'templates/buissnessCardSearch.html',
                    controller: 'buissnessCardSearchCtrl'
                }
            }
        })

//The businesscard edit page route
  .state('tabsController2.editProfile', {
            url: '/editProfile',
            views: {
                'tab3': {
                    templateUrl: 'templates/editProfile.html',
                    controller: 'editProfilePageCtrl'
                }
            }
        })

  //The linkedin card page route
  .state('tabsController2.linked', {
            url: '/linked',
            views: {
                'tab3': {
                    templateUrl: 'templates/linkedin.html',
                    controller: 'linkedinPageCtrl'
                }
            }
        })

  //The serch LinkeinPage view route
  .state('tabsController2.linkedSearch', {
          url: '/linkedSearch',
          views: {
              'tab3': {
                  templateUrl: 'templates/linkedinSearch.html',
                  controller: 'linkedinPageSearchCtrl'
              }
          }
      })

//The send advertisment page route
  .state('tabsController2.sendAdd', {
            url: '/sendAdd',
            views: {
                'tab5': {
                    templateUrl: 'templates/sendAdvertisement.html',
                    controller: 'sendAdvertisementPageCtrl'
                }
            }
        })

//The users advertisment list page route
  .state('tabsController2.addlist', {
            url: '/addlist',
            cache: false,
            views: {
                'tab6': {
                    templateUrl: 'templates/AddUserList.html',
                    controller: 'AddUserListCntrl'
                }
            }
        })

//The notification page route
  .state('tabsController2.notify', {
            url: '/notify',
            views: {
                'tab6': {
                    templateUrl: 'templates/notify.html',
                    controller: 'notifyCtrl'
                }
            }
        })

//The Settings page route
  .state('tabsController2.settingsB', {
            url: '/settingsB',
            views: {
                'tab7': {
                    templateUrl: 'templates/settingsBusiness.html',
                    controller: 'settingsBCtrl'
                }
            }
        })

//The professional information gathering page route
  .state('tabsController2.about2', {
            url: '/about2',
            views: {
                'tab7': {
                    templateUrl: 'templates/about2.html',
                    controller: 'about2PageCtrl'
                }
            }
        })

//The Working place information gathering page route
  .state('tabsController2.about3', {
            url: '/about3',
            views: {
                'tab7': {
                    templateUrl: 'templates/about3.html',
                    controller: 'about3PageCtrl'
                }
            }
        })





































// mahesh
         .state('viewfavourite', {
      url: '/viewfavourite',
      templateUrl: 'templates/ViewFavouriteContacts.html',
      controller: 'ViewFavouriteContactsCtrl'
    })
         .state('searchResult', {
      url: '/searchResult',
      templateUrl: 'templates/searchResult.html',
      controller: 'searchResultCtrl'
    })


$urlRouterProvider.otherwise('/page4')

  

});