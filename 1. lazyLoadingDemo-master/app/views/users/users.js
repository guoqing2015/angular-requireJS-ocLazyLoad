define(['app'], function (app) {

    app.controller('usersCtrl', function ($scope, userMngr) {

        $scope.users = userMngr.getUsers();

        /**
         * pass user id to the user manager to remove
         * user from users array
         * @param id
         */
        $scope.removeUser = function (id) {
            userMngr.removeUserById(id);
        }

    });
});