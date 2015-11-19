//public/js/appRoutes.js
angular.module('appRoutes',[])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
        //home route
        .when('/', {
            templateUrl:'views/home.html',
            controller: 'MainController'
        })
        //user page that uses the usercontroller
        .when('/user',{
            templateUrl:'views/user.html',
            controller: 'UserController'
        });
        //removes the # in up to date browsers.
        $locationProvider.html5Mode(true);
    }]);