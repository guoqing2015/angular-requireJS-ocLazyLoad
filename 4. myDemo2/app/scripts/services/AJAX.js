'use strict';

define(['app'], function (app) {

    app.service('AJAX', ['$q', '$http', function ($q, $http) {

            var getData = function (httpParams) {


                var defer = $q.defer();

                var params1 = {};
                //if(httpParams.method) {
                if(httpParams.method) {
                    httpParams.method.toLocaleLowerCase() == 'post' ?  params1.data = httpParams.data : params1.params = httpParams.data;
                } else {
                    params1.params = httpParams.data
                }


                var params2 = {
                    method: httpParams.method || "GET",
                    url: httpParams.url,
                    cache:  httpParams.cache || false,
                    timeout: httpParams.timeout || defer.promise || 15000 ,
                    success: httpParams.success || angular.noop,
                    error: httpParams.error || angular.noop,
                    complete: httpParams.complete || angular.noop,
                };

                var params = angular.extend(params1, params2);

                //console.log(params);


                var request = $http(params);  //requrest为一个defer.promise
                var promise = request.success(
                    httpParams.success
                ).error(
                    httpParams.error
                );

                promise.abort = function () {
                    defer.resolve();
                };

                promise.
                    finally(
                        httpParams.complete
                    )
                    .finally(
                        function () {
                            promise.abort = angular.noop;
                            defer = request = promise = null;
    //                        loading.hide();
                        }
                    );
                return promise;
            };

            return getData;
        }
    ]);

});
