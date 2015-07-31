// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//var misc = require('./test');

//starter.some -  (angular.module in service.js (.factory))
angular.module('starter', ['ionic','starter.some','ngStorage'])
   .config(function($stateProvider, $urlRouterProvider) {
                      /******************************PROVIDERS****************************/
                          $stateProvider.state('user', { 
                            url: '/user',
                            templateUrl :'templates/user.html'
                          //  controller :'backCTRL'
                        });
                        $stateProvider.state('stores', { 
                            url: '/stores/:formsUserId',
                            templateUrl :'templates/list.html'
                          //  controller :'backCTRL'
                        });
                          $stateProvider.state('topStores', { 
                            url: '/topStores',
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
                     /****************use index.html (for template list.html)***********/
        .controller('shopCtrl',function($scope, $http){
                  $http.get('stores.json').success(function(data){
                      $scope.stores = data;
                    });
                    })
                    /*****************use in your.html*****************/
        .controller('buyCTRL', function($scope, $stateParams){
                        $scope.namestore = $stateParams.storeName ;
                        $scope.address = $stateParams.storeAddress; 
                        $scope.city = $stateParams.storeCity;  
                        $scope.zip = $stateParams.storeZip;  
                        $scope.accept = $stateParams.storeSettingsAcceptingOrders;  
            $scope.products = [
                    {  item: "Orange", price: '100 kg'  }
                  ];
            $scope.buy = function(item, price){
                 $scope.products.unshift({item: item, price: price});
            };
        })
                 /******************use in test.html*******************/
        .controller('somePeople', function($scope, People){
                    $scope.peoples = People.all();
                })
                 /**************** use in user.html && list.html*************/
        .controller('FormData',function($scope, $http,$stateParams, $localStorage ){
                  $http.get('user.json').success(function(data){
                       $scope.forms = data;
                    });
                    $scope.userId = $stateParams.formsUserId ;
                    /*****Local storage in form****/
                    $scope.text  = Math.floor(Math.random()*12345567789).toString(); 
                    $scope.$storage = $localStorage.$default({
                    textinput: $scope.text
                        });
                  //$localStorage.$reset();
                    })
                    /*************use in detail.html**************/
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
