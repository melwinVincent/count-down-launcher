angular.module('ToyotaStarter').controller('HomeCtrl', ["$scope", "$timeout", "$ionicPlatform", "$cordovaNativeAudio", "$state", "$document", function($scope, $timeout, $ionicPlatform, $cordovaNativeAudio, $state, $document ) {
    
    $ionicPlatform.ready(function() {
        if(window.cordova) {    
            $cordovaNativeAudio.preloadSimple('car-start', 'audio/sound.wav');
        }
    });


    $scope.play = function(sound) {
        console.log("sound : ",sound);
        
        if(window.cordova) $cordovaNativeAudio.play(sound);
        angular.element($document[0].getElementsByClassName('start-button')[0]).removeClass('animate');
        $timeout(function() {
            angular.element($document[0].getElementsByClassName('start-button')[0]).addClass('clicked');
        }, 200);
        $timeout(function() {
            console.log( angular.element($document[0].getElementsByClassName('start-button')[0]));
           
            $state.go('main.count') 
        }, 1750);
        
    }

}]);