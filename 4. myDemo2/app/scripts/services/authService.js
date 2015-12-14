'use strict';


var validateLogin =  function($rootScope) {
    return {
        isAuthenticated: function() {
            // Check that the user is logged in.
            return $rootScope.isLoggedIn;
        }
    };
};

module.exports = ['$rootScope', validateLogin];