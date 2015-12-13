define(['app'], function (app) {

    app.service('userMngr', function () {

        var i;

        /**
         * holds users mock data
         * @type {*[]}
         */
        var users = [
            {"id": 123, "fname": "Nir", "lname": "Kaufman", "email": "nirkaufman@gmail.com", "phone": "054-4554258", "address": "Fabrigat 2, holon"},
            {"id": 124, "fname": "Yoram", "lname": "Lavi", "email": "yoram@gmail.com", "phone": "050-3244562", "address": "Hertzel 5, Tel-aviv"},
            {"id": 125, "fname": "Jhonatan", "lname": "Katz", "email": "Katz@gmail.com", "phone": "052-2333456", "address": "Has 5, natania"},
            {"id": 126, "fname": "Idan", "lname": "Cohen", "email": "Idan@gmail.com", "phone": "054-244567", "address": "jerosalem 34/5, ramat-gan"}
        ];

        /**
         * generate random user
         * @param user
         * @returns {number}
         */
        var getUid = function (user) {
            var uid;
            if (user.name) {
                uid = Math.floor(Math.random() * 100 + (user.fname.length));
            }
            return uid;
        };

        /**
         * return all users data
         * @returns {Array}
         */
        this.getUsers = function () {
            return users;
        };

        /**
         * locate and return user object from users
         * array by user id
         * @param id
         * @returns {{}} user object
         */
        this.getUserById = function (id) {
            var user;

            for (i = 0; i < users.length; i++) {
                if (users[i].id == id) {
                    user = users[i];
                    break;
                }
            }
            return user;
        };

        /**
         * locate and replace a user object
         * @param user
         */
        this.updateUser = function (user) {

            for (i = 0; i < users.length; i++) {
                if (users[i] == user) {
                    users[i] = user;
                    break;
                }
            }
        };

        /**
         * locate user by user id and remove it
         * @param id
         */
        this.removeUserById = function (id) {

            for (i = 0; i < users.length; i++) {
                if (users[i].id == id) {
                    users.splice(i, 1);
                    break;
                }
            }
        };

        /**
         * add user object to users array
         * @param user
         */
        this.addUser = function (user) {
            user.id = getUid(user);
            users.push(user);
        };

    })
});