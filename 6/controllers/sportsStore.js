angular.module("sportsStore")
    .controller("sportsStoreCtrl", function ($scope) {

        $scope.data = {
            products: [
                { name: "product #1", description: "A", category:" category #1", price: 100},
                { name: "product #2", description: "B", category:" category #1", price: 200},
                { name: "product #3", description: "C", category:" category #2", price: 300},
                { name: "product #4", description: "D", category:" category #2", price: 400},
                { name: "product #5", description: "E", category:" category #3", price: 500},
                { name: "product #6", description: "E", category:" category #3", price: 600},
                { name: "product #7", description: "E", category:" category #3", price: 700},

            ]
        }
    });


