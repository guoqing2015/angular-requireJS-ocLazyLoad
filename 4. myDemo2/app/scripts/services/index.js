var services = angular.module('app.services', []);


services
    .factory('api', require('./api'))                             //后台接口地址
    .factory('AJAX', require('./AJAX'))                           //AJAX
    .factory('nav', require('./nav'))                             //页面导航
    .service('validate', require('./validate'))                   //手机号等验证
    .service('getURLParameter', require('./getURLParameter'))        //获取url中的参数
    //.factory('authService', require('./authService'))             //判断用户是否登陆
    //.service('historyRecords', require('./historyRecords'))       //历史记录
    //.factory('nexus', require('./nexus'))                         //存储scope中的数据
    .service('loading', require('./loading'))                     //正在加载提示框
    .service('modal', require('./modal'))                     //
    .service('Countdown', require('./countdown'))                     //
    //.service('dateRange', require('./dateRange'))                 //汽车票日期表格的日期范围
   //.service('anchorSmoothScroll', require('./anchorSmoothScroll'))
    //.factory('SERVERDATE', require('./SERVERDATE'))              //获取服务器时间
    //.factory('covertTime', require('./covertTime'))              //转换时间
    //.factory('checkTime', require('./checkTime'))              //转换时间
    //.factory('request', require('./request'))
    //.factory('httpCacheData', require('./httpCacheData'))
    //.factory('selectChecked', require('./selectChecked'));


module.exports = services;