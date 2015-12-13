define(['app'], function (app) {

    app.factory("loadResource", function ($rootScope, $q) {

            /**
             * load the required dependencies using promises
             * @param resources array
             * @returns {*}
             */
            return function (directory, resources) {

                var deferred = $q.defer(),
                    promise = null,
                    dependencies = [],
                    i;

                for (i = 0; i < resources.length; i++) {
                    dependencies.push(directory + '/' + resources[i]);
                }

                // if a promise has been allready set, return it
                if (promise) {
                    return promise;
                }

                promise = deferred.promise;

                // use require to load the dependency
                require(dependencies, function () {

                        $rootScope.$apply(function () {
                                deferred.resolve();
                            }
                        );
                    },

                    // in case somthing went wrong
                    function (error) {

                        $rootScope.$apply(function () {
                                deferred.reject(error);
                            }
                        );
                    }
                );

                return promise;
            };
        }
    );
});