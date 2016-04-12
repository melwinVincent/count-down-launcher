angular.module('ToyotaStarter').controller('CountCtrl', ["$scope", "$timeout", "$document", "$ionicHistory", function($scope, $timeout, $document, $ionicHistory ) {
    
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
        
    }, 7000);

    $timeout(function() {
        $scope.showBackBtn = true;
    }, 8500);

    $scope.goBack = function(){
        console.log("goBack");
         $ionicHistory.goBack();
    }



}]);