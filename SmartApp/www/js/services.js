angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
 .service('UserService', function () {

    var setUser = function (user_data) {
      window.localStorage.memberData = JSON.stringify(user_data);
    };

    var getUser = function () {
      return JSON.parse(window.localStorage.memberData || '{}');
    };

    return {
      getUser: getUser,
      setUser: setUser
    };
  })
.service('BlankService', [function(){

}]);

