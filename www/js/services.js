angular.module('app').factory('Servico', [ '$http', function ($http) {
  	
    return {
  		
      acessar: function () {
        return $http({
          method: 'GET',
          url: 'http://192.168.0.200'
         });
      }    
    
    };
}]);
