/**
 * 显示和隐藏正在加载提示框
 *  @return {Object}
 *  show 显示加载
 *  hide 隐藏加载
 */

'use strict';


function loading($rootScope) {
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
}

module.exports = ['$rootScope', loading];


