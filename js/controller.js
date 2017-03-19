
	var myCtrl = angular.module("myCtrl",[]);
	myCtrl.controller("gifCtrl",["$scope","$load","$ionicLoading",function($scope,$load,$ionicLoading){
			$scope.page = 0;
			$scope.items = [];
			$scope.loadItems = function(){
//				$ionicLoading.show({
//					template:"<ion-spinner icon='android'></ion-spinner>"
//				})
				$load.getData("http://route.showapi.com/341-3",$scope.page,function(data){
					$scope.items = $scope.items.concat(data);
					$scope.$broadcast("scroll.infiniteScrollComplete");
//					$ionicLoading.hide();
				})
			}
			$scope.doInfinite = function(){
				$scope.loadItems();
				$scope.page++;
			}
	}])
	myCtrl.controller("photoCtrl",["$scope","$load","$ionicLoading",function($scope,$load,$ionicLoading){
			$scope.page = 0;
			$scope.items = [];
			$scope.loadItems = function(){
//				$ionicLoading.show({
//					template:"<ion-spinner icon='android'></ion-spinner>"
//				})
				$load.getData("http://route.showapi.com/341-2",$scope.page,function(data){
					$scope.items = $scope.items.concat(data);
					$scope.$broadcast("scroll.infiniteScrollComplete");
//					$ionicLoading.hide();
				})
			}
			$scope.doInfinite = function(){
				$scope.loadItems();
				$scope.page++;
			}
	}])
	myCtrl.controller("textCtrl",["$scope","$load","$ionicLoading",function($scope,$load,$ionicLoading){
			$scope.page = 0;
			$scope.items = [];
			$scope.loadItems = function(){
//				$ionicLoading.show({
//					template:"<ion-spinner icon='android'></ion-spinner>"
//				})
				$load.getData("http://route.showapi.com/341-1",$scope.page,function(data){
					$scope.items = $scope.items.concat(data);
					$scope.$broadcast("scroll.infiniteScrollComplete");
//					$ionicLoading.hide();
				})
			}
			$scope.doInfinite = function(){
				$scope.loadItems();
				$scope.page++;
			}
	}])
	

