var produtoModule = angular.module('produtoModule',[]);

produtoModule.controller("produtoControl",function($scope,$http){


	
	urlFornecedor = 'http://localhost:8080/SCP/rs/fornecedor';
	
	urlProduto = 'http://localhost:8080/SCP/rs/produto';
	
	$scope.pesquisarFornecedores =  function() {
		$http.get(urlFornecedor).success(function(fornecedores) {
			$scope.fornecedores = fornecedores;
		}).error(function(erro) {
			alert(erro);
		});
	}

	$scope.pesquisarProdutos =  function() {
		$http.get(urlProduto).success(function(produtos) {
			$scope.produtos = produtos;
		}).error(function(erro) {
			alert(erro);
		});
	}
	
	$scope.salvar = function(){
		if($scope.produto.codigo == ''){
			$http.post(urlProduto,$scope.produto).success(function(produto) {
				$scope.produtos.push($scope.produto);
				$scope.novo();
			}).error(function(erro) {
				alert(erro);
			});
		}else{
			$http.put(urlProduto,$scope.produto).success(function(produto) {
				$scope.pesquisarProdutos();
				$scope.novo();
			}).error(function(erro) {
				alert(erro);
			});
		}
	}


	$scope.excluir = function(){
		if($scope.produto.codigo == ''){
			alert('Selecione um produto');
		}else{
			urlExcluir =  urlProduto + "/" + $scope.produto.codigo;
			$http.delete(urlExcluir).success(function() {
				$scope.pesquisarProdutos();
				$scope.novo();
			}).error(function(erro) {
				alert(erro);
			});
		}
		 
	}

	$scope.novo = function(){
		$scope.produto = "";
	}
	
	$scope.selecionaFornecedor = function(fornecedor){
		$scope.produto.fornecedor = fornecedor;
	}

	$scope.selecionaProduto = function(produto){
		$scope.produto = produto;
	}
	
	$scope.pesquisarFornecedores();
	$scope.pesquisarProdutos();
});