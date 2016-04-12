angular.module('ToyotaStarter').controller('CountCtrl', ["$scope", "$timeout", "$document", function($scope, $timeout, $document ) {
    
    function countDown() {
        console.log("countDown");

        $timeout(function() {
            $scope.count--;
            
            if($scope.count === 0) {
                return;
            } else {
                countDown();
            }
        }, 1250);
        
    }

    $scope.count = 5;
    countDown();

    $timeout(function() {
        angular.element($document[0].getElementsByClassName('img-wrapper')[0]).addClass("reduce-opacity");
        $scope.hideCounter = true;
    }, 7000);



}]);