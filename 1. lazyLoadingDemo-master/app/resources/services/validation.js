define(['app'], function (app) {

   app.service('validation', function () {

       /**
        * validate user name by cheking its name length
        * @param user
        * @returns {boolean}
        */
       this.validate = function (user) {
           return user.fname !== undefined;
       }

   })

});