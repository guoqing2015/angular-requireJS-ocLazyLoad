'use strict';

module.exports =  ['$navigate',
    function($navigate) {
        return {
            slidePage: function (path, animate, reverse) {
                if(reverse) {
                    $navigate.go(path, animate, true);
                } else {
                    $navigate.go(path, animate);
                }
            },
            back: function () {
                $navigate.back();
            }
        }
    }
];
