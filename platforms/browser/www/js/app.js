var module = angular.module("app", ['ngMask']);

module.controller("appController", [ '$scope', 'Servico', function ($scope, Servico) {

  
    $scope.exibir = "login";
    $scope.alunosDisciplinas = [];
     $scope.aluno = {
    	codigo : '',
    	senha: ''
    };
   

    $scope.acessar = function () {   

    	Servico.acessar().success(function (){
          alert('ok');
          }).error(function(){
         
          });

         
                                  
    };

  

   
    
   

}]);                                                         