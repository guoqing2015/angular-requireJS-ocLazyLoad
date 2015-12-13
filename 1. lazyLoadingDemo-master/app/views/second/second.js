define(['app'], function (app) {

    app.controller('secondCtrl', function (secondService) {

        this.data = secondService.getData();
    })

});