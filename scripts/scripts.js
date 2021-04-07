let myModule = angular
    .module('myModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/employee', {
                templateUrl:`about.html`
            })
        //cannot load this file due to being on my pc and not on the server
    })
    .controller('myController', function($scope, docWrite, firstService) {
        let employee = {
            name: 'ნინო',
            surname: 'ქრისტესიაშვილი',
            img: './images/cosmos-010.jpg'
        }
        let dogs = [
            {
                name: 'chaki',
                age:2
            },
            {
                name: 'chaki1',
                age:22
            },
            {
                name: 'chaki3',
                age:222
            },
        ]
        let dogsChildren = [
            {
                name: 'chaki',
                age:2,
                children: ['ptra','shmuqa', 'ptra nino']
            },
            {
                name: 'chaki1',
                age:22,
                children: ['ptra','shmuqa', 'ptra nino']
            },
            {
                name: 'chaki3',
                age:222,
                children: ['ptra','shmuqa', 'ptra nino']
            },
        ]
        $scope.message = 'ჩემი პირველი კონტროლერი';
        $scope.employee = employee;
        $scope.dogs = dogs;
        $scope.dogsChildren = dogsChildren;
        docWrite.docWrite($scope.message);
        firstService.alertMsg($scope.employee.name);
    });




