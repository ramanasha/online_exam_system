'use strict';

angular.module('onlineExamSystemApp')
    .factory('User', function ($resource) {
        return $resource('api/users/:login', {}, {
            'query': {method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': {method: 'PUT'}
        });
    });

angular.module('onlineExamSystemApp')
    .factory('userDelete', function ($resource) {
        return $resource('api/users/delete', {}, {
        });
    });

angular.module('onlineExamSystemApp')
    .factory('userUpdate', function ($resource) {
        return $resource('api/users/update', {}, {
        });
    });
