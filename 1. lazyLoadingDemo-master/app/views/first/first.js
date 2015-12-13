define(['app'], function (app) {

    app.controller('firstCtrl', function (firstService) {
        this.data = firstService.getData();
    })
});
