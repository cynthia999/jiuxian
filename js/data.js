 angular.module('app',[])
  .controller('ctrl',function($scope,$http){
        // console.log($http)
        $http.get('json/rank1.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;
                      
        })
        
  })
   .controller('ctrl2',function($scope,$http){
        // console.log($http)
        $http.get('json/rank2.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;
                      
        })
        
  })
  .controller('cleargoods1',function($scope,$http){
        // console.log($http)
        $http.get('json/01.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;
                      
        })
        
  })
  .controller('cleargoods2',function($scope,$http){
        // console.log($http)
        $http.get('json/02.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;
                      
        })
        
  })
  /*---------------------获取热卖好酒数据----------------------*/
  .controller('hotsell1',function($scope,$http){
        // console.log($http)
        $http.get('json/top.json')
        .success(function(res){
            console.log(res)         
           $scope.items = res.goodsCate.list;                      
        })
        
  })