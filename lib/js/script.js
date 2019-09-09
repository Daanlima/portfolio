angular.module("portfolio", []);

	angular.module("portfolio").controller("portfolioCtrl",
		function ($scope){
			$scope.ola = "Olá, eu sou";
			$scope.nomecompleto = "Daniel Lima Fortes,";
			$scope.mensagembemvindo = "Web Designer e Desenvolvedor Front-end";
			$scope.sobretext = "Um site pode ser bem mais do que uma página, pode ser uma experiência";
			$scope.skillstitle = "Meus Conhecimentos";
			$scope.portfoliotitle = "Meu Portfolio";

		}
	);