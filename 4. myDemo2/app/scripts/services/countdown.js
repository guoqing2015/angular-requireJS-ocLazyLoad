/**
 * 时间倒计时
 * @param {Number} duration 倒计时的时间，单位为s
 * @param {Function} onTick 正在倒计时时执行的函数
 * @param {Function} onComplete 倒计时完成后执行的函数
 * @return {Object} abort 清除定时器，倒计时停止；  getRemainingTime 获取剩余的秒数
 */




module.exports = ['$interval', function($interval) {
    return function (duration, onTick, onComplete) {
        var secondsLeft = Math.round(duration),
            tick = function () {
                if (secondsLeft > 0) {
                    onTick(secondsLeft);
                    secondsLeft -= 1;
                } else {
                    //clearInterval(interval);
                    $interval.cancel(interval);
                    onComplete();
                }
            },
            interval = $interval(
                (function (self) {
                    return function () {
                        tick.call(self);
                    }
                })(this),
                1000
            );

        return {
            abort: function () {
                $interval.cancel(interval);
                //clearInterval(interval);
            },
            getRemainingTime: function () {
                return secondsLeft;
            }
        };
    };
}];

//
//
//var countdown = new Countdown(5, function(seconds) {
//    console.log(seconds); //log the number of seconds that have passed
//}, function() {
//    console.log("Countdown complete!"); //log that the countdown has complete
//});

//console.log(countdown.abort());
//console.log(countdown.getRemainingTime());
