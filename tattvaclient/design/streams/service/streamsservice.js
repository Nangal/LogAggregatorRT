angular.module('tattva')
.service('namespaceService',['$http',function($http){
  this.getData=function(){
    return $http.get('/viewNamespace');
  }
}]);

angular.module('tattva')
.service('instanceService',['$http',function($http){
  this.getData=function(){
    return $http.get('/viewInstance')
  }
}]);

angular.module('tattva')
.service('streamService',['$http',function($http){
  this.getData=function(){
    return $http.get('/viewStreams')
  }
}]);
angular.module('tattva')
.service('streamsservice',['$http',function($http){
  var resError="";
  this.saveStream=function(streamsData, successCB, errorCB){
  return  $http({
      method : 'post',
      url : '/datastream/'+streamsData.streamname,
      data : streamsData
    }).then(successCB,errorCB);
  }

  this.saveEditedStream=function(streamsData,data,error){
  //console.log("streamsData = ",streamsData);
    return $http({
      method : 'put',
      url : '/datastream/'+streamsData.streamname,
      data : streamsData
    }).then(data,error);
  }
}]);
