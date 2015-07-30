// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//var misc = require('./test');
angular.module('starter', ['ionic','starter.some'])
   .config(function($stateProvider, $urlRouterProvider) {
                      
                          $stateProvider.state('user', { 
                            url: '/user',
                            templateUrl :'templates/user.html'
                          //  controller :'backCTRL'
                        });
                        $stateProvider.state('stores', { 
                            url: '/stores/:formUserId',
                            templateUrl :'templates/list.html'
                          //  controller :'backCTRL'
                        });
                          $stateProvider.state('your',{
                           url: '/your/:storeName/:storeAddress/:storeCity/:storeZip/:storeSettingsAcceptingOrders',
                           templateUrl: 'templates/your.html',
                           controller :'buyCTRL'
                        });
                         $stateProvider.state('info', {
                            url: '/info',
                            templateUrl : 'templates/info.html'
                           // controller : 'nextCTRL'
                        });
                      $stateProvider.state('test', {
                            url: '/test',
                            templateUrl : 'templates/test.html'
                            //controller : 'selectStore'
                        });
                         $stateProvider.state('detail', { 
                            url: '/detail/:peopleId/:peopleName',
                            templateUrl :'templates/detail.html'
                          //  controller :'backCTRL'
                        });
                        
                       $urlRouterProvider.otherwise('templates/user.html');
                })
                
        .controller('shopCtrl',function($scope, $http){
                  $http.get('data.json').success(function(data){
                      $scope.stores = data;
                    });
                    })
        .controller('buyCTRL', function($scope, $stateParams){
                        $scope.namestore = $stateParams.storeName ;
                        $scope.address = $stateParams.storeAddress; 
                        $scope.city = $stateParams.storeCity;  
                        $scope.zip = $stateParams.storeZip;  
                        $scope.accept = $stateParams.storeSettingsAcceptingOrders;  
            $scope.products = [
                    {  item: "Orange", price: '100 kg'  }
                   // {  item: "Apple", price: 50}
                  ];
            $scope.buy = function(item, price){
                 $scope.products.unshift({item: item, price: price});
            };
        })
                .controller('somePeople', function($scope,$stateParams, People){
                  // $scope.id = $stateParams.peopleId;
                    //$scope.nameUser = $stateParams.peopleName;
                    $scope.peoples = People.all();
                })
                 //use in user.html
                .controller('FormData',function($scope, $http,$stateParams ){
                  $http.get('from.json').success(function(data){
                      $scope.forms = data;
                    });
                    $scope.userId = $stateParams.formUserId ;
                    })
                        .controller("ContentController", function($scope, $ionicSideMenuDelegate, $stateParams,$ionicActionSheet) {
                        $scope.toggleLeft = function() {
                          $ionicSideMenuDelegate.toggleLeft();
                        };
                        $scope.id = $stateParams.peopleId;
                        $scope.nameUser = $stateParams.peopleName;
                        $scope.show = function() {

                        // Show the action sheet
                        var hideSheet = $ionicActionSheet.show({
                          buttons: [
                            { text: '<b>Share</b> This' },
                            { text: 'Move' }
                          ],
                          destructiveText: 'Delete',
                          titleText: 'Modify your album',
                          cancelText: 'Cancel'
                        });
                          hideSheet();
                      };
                      })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
