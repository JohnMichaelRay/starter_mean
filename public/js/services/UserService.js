//public/js/services/USerServicce.js
angular.module('UserService',[])
    .factory('User',['http', function($http){
        return{
          //call to get all the users
            get: function(){
                return $http.get('/api/users');
                },
            //call to post and create a new user
            create: function(userData){
                return $http.post('/api/users', userData);
            },
            //call to delete a user
            delete: function(id){
                return $http.delete('/api/users/' + id);
            }
        };
    }])