define(['app'], function (app) {

    app.service('firstService', function () {

        /**
         * hold some dummy data
         * @type {{msg: string}}
         */
        var data = {
            msg: 'Data string from First Service'
        };

        /**
         * return the dummy data object
         * @returns {data.msg|*}
         */
        this.getData = function () {
            return data.msg;
        }
    });
});