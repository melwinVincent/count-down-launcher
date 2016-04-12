angular.module('ToyotaStarter').controller('CountCtrl', ["$scope", "$timeout", "$document", "$ionicHistory", function($scope, $timeout, $document, $ionicHistory ) {
    
    function countDown() {
        console.log("countDown");

        $timeout(function() {
            //angular.element($document[0].getElementsByClassName('count-button')[0]).removeClass('zoom');
            angular.element($document[0].getElementsByClassName('count-button')[0]).addClass('zoom');
            $scope.count--;
            $timeout(function() {
                angular.element($document[0].getElementsByClassName('count-button')[0]).removeClass('zoom');
            }, 750);
            
            if($scope.count === 0) {
                return;
            } else {
                countDown();
            }
        }, 1250);
        
    }
    //angular.element($document[0].getElementsByClassName('count-button')[0]).addClass('zoom');
     $timeout(function() {
                angular.element($document[0].getElementsByClassName('count-button')[0]).addClass('zoom');
            });
    $scope.count = 5;
   $timeout(function() {
                angular.element($document[0].getElementsByClassName('count-button')[0]).removeClass('zoom');
            },750);
    countDown();

    $timeout(function() {
        angular.element($document[0].getElementsByClassName('img-wrapper')[0]).addClass("reduce-opacity");
        
    }, 8250);

    $timeout(function() {
        $scope.showBackBtn = true;
    }, 9000);

    $scope.goBack = function(){
        console.log("goBack");
         $ionicHistory.goBack();
    }



}]);