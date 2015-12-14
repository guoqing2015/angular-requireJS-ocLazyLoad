/**
 *  验证脚本
 */

'use strict';

module.exports = [function() {
    return {
        isMobile: function(e) {  //是否是手机号码
            return /^((13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9]))\d{8}$/.test(e);
        },
        isEmpty: function(value) { //是否为 NaN, undefined, null , 0 , '', false
            if(value){
                return false;
            }
            return true;
        },
        isEmptyObject: function (e) {  //是否为空对象，包括空数组
            for (var t in e) return!1;
            return!0
        }
    }
}];


