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

//sanda routes
//Administrator related routes

//the route of the page redirrect when admin clicks the pending advertisement
                .state('AdmintabsController.pendingAddDetail', {
      url: '/pendingAddDetail/:idS',
      views: {
        'tab7': {
        templateUrl: 'templates/pendingAddDetail.html',
        controller: 'pendingAddDetailCtrl'
      }
    }
   })

//The users advertisment list page route
             .state('AdmintabsController.addspecial', {
      url: '/addspecial',
      cache: false,
      views: {
          'tab7': {
              templateUrl: 'templates/adminSpecialList.html',
              controller: 'AdminSpecialListCtrl'
             }
      }
  })


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

//The Admin Settings page route
                .state('AdmintabsController.settingsA', {
      url: '/settingsA',
      views: {
        'tab8': {
          templateUrl: 'templates/settingsAdmin.html',
          controller: 'settingsACtrl'
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
  })  
  //mahesh

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
  .state('start', {
    url: '/page4',
    templateUrl: 'templates/start.html',
    controller: 'start'
  })
   .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })
  .state('login', {
    url: '/login',
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
                     .state('uploadphoto', {
    url: '/uploadphoto',
    templateUrl: 'templates/uploadphoto.html',
    controller: 'uploadCtrl'
  })
  .state('timelineupload', {
    url: '/timelineupload',
    templateUrl: 'templates/timelineupload.html',
    controller: 'timelineuploadCtrl'
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
    url: '/description/:id',
    templateUrl: 'templates/eventDesc.html',
    controller: 'eventdesc'
  })

   .state('participants', {
    url: '/participants/:id',
    templateUrl: 'templates/participants.html',
    controller: 'participants'
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
    url: '/admindescription/:id',
    templateUrl: 'templates/adminEventDesc.html',
    controller: 'admineventdesc'
  })

    .state('bdaynotification', {
    url: '/bdaynotification',
    
        templateUrl: 'templates/bdaynotification.html',
        controller: 'bdayCtrl'
      
  })

    .state('createTemplate', {
    url: '/createTemplate',
    
        templateUrl: 'templates/createTemplate.html',
        controller: 'createTemplate'
      
  })

    .state('templatedesc', {
    url: '/templatedesc/:id',
    
        templateUrl: 'templates/templateDesc.html',
        controller: 'templatedesc'
      
  })

 .state('specialtemplatedesc', {
    url: '/specialtemplatedesc/:id',
    
        templateUrl: 'templates/specialtemplateDesc.html',
        controller: 'specialtemplatedesc'
      
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
    templateUrl: 'templates/nativeCalendar.html',
    controller: 'calendar'
  })
   
     .state('googlecalendar', {
    url: '/googlecalendar',
    templateUrl: 'templates/googlecalendar.html',
    controller: 'googlecalendar'
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

 


  .state('AdmintabsController.page8', {
            url: '/page8',
            views: {
                'tab2': {
                    templateUrl: 'templates/adminGroup.html',
                    controller: 'adminGroupCtrl'
                }
            }
        })

  

 .state('followCricket', {
    url: '/page-follow-cricket',
    templateUrl: 'templates/followCricket.html',
    controller: 'followCricketCtrl'
  })



  

  .state('cricketPost', {
    url: '/page-group-post',
    templateUrl: 'templates/cricketPost.html',
    controller: 'cricketPostCtrl'
  })



  .state('adminCreateAGroup', {
    url: '/page-create-group',
    templateUrl: 'templates/adminCreateAGroup.html',
    controller: 'adminCreateAGroupCtrl'
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

  
 



  //sanda routes
  //Member related routes

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


  //The Facebook card page route
  .state('tabsController2.facebookProf', {
            url: '/facebookProf',
            views: {
                'tab3': {
                    templateUrl: 'templates/facebookProf.html',
                    controller: 'facebookProfPageCtrl'
                }
            }
        })

  //The serch FacebookPage view route
  .state('tabsController2.facebookProfSearch', {
          url: '/facebookProfSearch',
          views: {
              'tab3': {
                  templateUrl: 'templates/facebookProfSearch.html',
                  controller: 'facebookProfSearchCtrl'
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

//The users favourite advertisment list page route
  .state('tabsController2.favadd', {
            url: '/favadd',
            cache: false,
            views: {
                'tab6': {
                    templateUrl: 'templates/favAddList.html',
                    controller: 'favAddListCntrl'
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

//The User Settings page route
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


//Sanda member routes end








  //mahesh
    .state('result', {
      url: '/result',
      templateUrl: 'templates/results.html',
      controller: 'resultCtrl'
    })
  
   .state('group_result', {
      url: '/groupresult',
      templateUrl: 'templates/groupresults.html',
      controller: 'groupresultCtrl'
    })
   //mahesh end
  
  
// mahesh2
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