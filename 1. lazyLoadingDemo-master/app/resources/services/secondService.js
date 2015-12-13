define(['app'], function (app) {

    app.service('secondService', function () {

        /**
         * holds some dummy data
         * @type {{msg: string}}
         */
        var data = {
            msg: 'Data string from Second Service'
        };

        /**
         * return dummy data object
         * @returns {string}
         */
        this.getData = function () {
            return data.msg;
        }
    })
});