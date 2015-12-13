//define(function () {

/**
 * 显示和隐藏正在加载提示框
 *  @return {Object}
 *  show 显示加载
 *  hide 隐藏加载
 */
    angular.module('loading', [])
        .directive('uiLoading', [ '$rootScope',
            function($rootScope) {
                return {
                    restrict: 'E',
                    template: '<div class="opLayer" data-ng-show="showLoading"><div class="loading"><em class="loadingImg"></em></div></div>',
                    scope: {
                        loadingText: "=",
                        showLoading: '='
                    },
                    link: function(scope) {
                        scope.closeLoading =  function() {
                            $rootScope.showLoading = false;
                        };
                    }
                }
            }
        ])
        .service('loading', ['$rootScope', function($rootScope) {

            var show = function(loadingText) {
                if(!loadingText) {
                    $rootScope.loadingText = '正在加载';
                } else {
                    $rootScope.loadingText = loadingText;
                }
                $rootScope.showLoading = true;
            };

            var hide = function() {
                $rootScope.showLoading = false;
            };

            return {
                show: show,
                hide: hide
            }

        }])

