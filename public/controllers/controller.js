function myController($scope, $http) {
    console.log("aaaaaa")


    var refresh = function () {
        $http.get('/containerlist').success(function (response) {
            console.log("http Get", response);

            $scope.contactlist = response;
            $scope.contact = "";
        });
    }
    refresh();

    $scope.addContact = function () {
        console.log($scope.contact)
        $http.post('/contactlist', $scope.contact).success(function (response) {
            console.log(response)
            refresh();

        })
    }

    $scope.remove = function (id) {
        console.log("remove!!!!!!!!!!!!!!!!!!", id)
        $http.delete('/contactlist/' + id).success(function (response) {
            refresh();
        })
    }

    $scope.edit = function (id) {
        console.log("edittttttttttttttt", id);
        $http.get('/contactlist/' + id).success(function (response) {
            console.log("ewewew", response)
            $scope.contact = response;
        })
    };

    $scope.update = function () {
        console.log($scope.contact._id)
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
            refresh();
        })

    };

    $scope.deselect = function () {
        console.log($scope.contact._id)
        $scope.contact = ""
    }

}