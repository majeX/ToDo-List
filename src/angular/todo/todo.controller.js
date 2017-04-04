(function(){
    "use strict";

    var TodoController = function($scope, $timeout) {
    this.appName = "TODO LIST";
    
    $scope.tasks = [];
    $scope.onTaskAddClick = function() {
        let newTask = {complete: false, title: $scope.title, hide: true}
        $scope.title = '';
        $scope.tasks.push(newTask);
        $timeout(() => { newTask.hide = false; },50);
    }
    $scope.onTaskDoneClick = function(movingTask, complete) {
        movingTask.hide = true;
        $timeout(() => {
            movingTask.complete = complete;
            $scope.doneTasks = 0;
            for (let task of $scope.tasks) 
                if (task.complete)
                    $scope.doneTasks++;
            $timeout(() => { movingTask.hide = false; },50);
        }, 500);
    }
    $scope.onTaskDeleteClick = function(task) {
        if (task.complete)
            $scope.doneTasks--;
        task.hide = true;
        $timeout(() => {
            $scope.tasks.splice(this.$index, 1);
            $scope.blockTransition = true;
            $timeout(() => { $scope.blockTransition = false; },50);
        }, 500);
    }
  };

  angular.module('as.todo', ['ngRoute'])
    .controller('TodoController', TodoController);
})();
