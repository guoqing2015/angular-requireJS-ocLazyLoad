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


'use strict';


function modal($rootScope) {
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
}

module.exports = ['$rootScope', modal];


