angular.module("myService",[])
	.service("$load",["$http",function($http){
		this.getData = function(url,page,callback){
			$http.get(url,{
				params:{
					showapi_appid:28412,
		            showapi_sign:"8a9c106876ed447fbdd159836bfdecfc",
		            page:page,
		            maxResult:10
				}
			},callback).success(function(data){
				if(data && data.showapi_res_code == 0){
					callback(data.showapi_res_body.contentlist);
				}
			}).error(function(data){
				console.log(data);
			})
		}
	}])