//define(function () {

/**
 * 显示和隐藏正在加载提示框
 *  @return {Object}
 *  show 显示加载
 *  hide 隐藏加载
 *  modalParams = {
 *      text: '请填写正确的手机号'
 *      confirmBtn: "知道了"        //可选参数，默认为“确认”
 *      cancleBtn： "取消"          //可选参数，默认为“取消”, 不写时取消按钮将不显示
 *  }
 */
    angular.module('modal', [])
        .directive('uiModal', [ "$timeout",
            function ($timeout) {
                return {
                    restrict: 'E',
                    scope: {
                        modal: '='
                    },
                    template: '\
                <div class="modal" data-ng-class="{\'modal-in\': modal.showModal}"> \n\
                    <div class="modal-inner font-14"> \n\
                        <div class="modal-title">{{modal.title}}</div> \n\
                        <div class="modal-text">{{modal.text}}</div> \n\
                    </div> \n\
                    <div class="modal-line"></div> \n\
                    <div class="modal-buttons font-16"> \n\
                        <span class="modal-button" data-ng-show="modal.cancle()">{{modal.cancleBtn || \'取消\'}}</span> \n\
                        <span class="modal-button modal-button-bold" data-ng-click="modal.confirm()">{{modal.confirmBtn || \'确定\'}}</span> \n\
                    </div> \n\
                </div> \n\
                <div class="modal-overlay" data-ng-class="{\'modal-overlay-visible\': modal.showModal}"></div>',
                    link: function (scope, element) {


                        var modalButton = element.find('span'),
                            modal = element.children().eq(0);

                        modalButton.bind('click', function () {
                            scope.$apply(function () {
                                scope.modal.showModal = false;
                                element.children().eq(0).addClass("modal-out");
                                $timeout(function() {
                                    modal.removeClass("modal-out");
                                }, 300)
                            });
                        });
                    }
                }
            }
        ])
        .service('modal', ['$rootScope', function($rootScope) {

            var show = function(modalPrams) {
                $rootScope.modal = { showModal: true };
                if(angular.isObject(modalPrams)) {
                    $rootScope.modal = angular.extend( $rootScope.modal, modalPrams)
                }
            };

            var hide = function() {
                $rootScope.modal.showModal = false;
            };

            return {
                show: show,
                hide: hide
            }

        }]);

