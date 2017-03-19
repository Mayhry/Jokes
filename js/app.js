
	var app = angular.module("myApp",["ionic","myCtrl","myService"]);
	app.config(["$stateProvider","$urlRouterProvider","$ionicConfigProvider",function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
		$stateProvider.state("main",{
			templateUrl:"templates/main.html",
			abstract:true
		}).state("main.gif",{
			url:"/gif",
			views:{
				"gifView":{
					templateUrl:"templates/gif.html",
					controller:"gifCtrl"
				}
				
			}
		})
		.state("main.photo",{
			url:"/photo",
			views:{
				"photoView":{
					templateUrl:"templates/photo.html",
					controller:"photoCtrl"
				}
			}
		}).state("main.text",{
			url:"/text",
			views:{
				"textView":{
					templateUrl:"templates/text.html",
					controller:"textCtrl"
				}
			}
		})
		$urlRouterProvider.otherwise("/gif");
		$ionicConfigProvider.tabs.position("bottom");
	}])

