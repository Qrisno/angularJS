let myModule = angular
    .module('myModule', [])
    .controller('myController', function($scope) {
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
    });

