(function(){
    "use strict";

  /* @ngInject */
  var Routes = function($routeProvider){
    $routeProvider
      .when('/todo', {
        templateUrl: 'todo/todo.html',
        controller: 'TodoController as todo'
      })
      .otherwise({
        redirectTo: '/todo'
      });
  };

  angular.module('todoApp', ['as.todo'])
    .config(Routes);
})();
