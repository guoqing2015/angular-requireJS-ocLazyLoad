define(['app'], function (app) {

    app.controller('userFormCtrl', function ($scope, $routeParams, userMngr, $location, validation) {

        $scope.user = userMngr.getUserById($routeParams.id) || {};

        /**
         * update the user or add a new one.
         * use validation service to validate user
         * if the id is 'new'
         * @param user
         */
        $scope.updateUser = function (user) {

            if ($routeParams.id !== 'new') {
                userMngr.updateUser(user);

            } else if (validation.validate(user)) {
                userMngr.addUser(user);
            }

            $location.path('/users');
        }

    })
});