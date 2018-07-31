function myController($scope, $http) {
    console.log("aaaaaa")

    $http.get('/containerlist').success(function (response) {
        console.log("http Get", response);

        $scope.contactlist = response;
    });



}