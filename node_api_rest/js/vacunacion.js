//JQuery
//Makes active only one navbar item at a time
$(".nav a").on("click", function(){
   $(".nav .active").removeClass("active");
   $(this).parent().addClass("active");
});
//Uses the brand to active to the start link
$(".navbar-brand").on("click", function(){
   $(".nav .active").removeClass("active");
   $(".nav #start").addClass("active");
});
//Toggles burger menu when an item is selected
$(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });




var vac = angular.module("vacunacion",["ngRoute"]);

vac.config(function($routeProvider){
    $routeProvider
        .when("/", {templateUrl: "partials/inicio.html",controller: "inicioCtrl"})
        .when("/entidad", {templateUrl: "partials/entidad.html",controller: "entidadCtrl"})
        .when("/paciente", {templateUrl: "partials/paciente.html",controller: "pacienteCtrl"})
        .when("/nuevopa", {templateUrl: "partials/nuevopa.html", controller: "nuevoPaCtrl"})
        .when("/nuevoemp", {templateUrl: "partials/nuevoemp.html", controller: "registroEnCtrl"})
        .when("/testCombo", {templateUrl: "partials/nuevaVac.html"})
        .when("/nuevaVac", {templateUrl: "partials/nuevaVac.html", controller: "nuevaVacCtrl"})
        .when("/menuEnt",{templateUrl:"partials/menuEnt.html", controller:"menuEntCtrl"})
        .otherwise({template : "<h1>404 No se encuentra</h1><img src='http://vignette1.wikia.nocookie.net/dragonball/images/3/3c/GotenksFatFail.png/revision/latest?cb=20100203173146'>"});
    
});


vac.controller("vacunacionCtrl", function(){
    
});



vac.controller("inicioCtrl", function(){
    console.log("inicio");
    
});
    
vac.controller("entidadCtrl", function($scope, $location, $http){
    console.log("entidad");
    $scope.login = function(){
         
        console.log($scope.vm.username);
        console.log($scope.vm.password);
        var data = {username: $scope.vm.username, password: $scope.vm.password};
        $http.post("api/entidad",JSON.stringify(data)).then(function(response){
            console.log("Peticion post correcta!");
            if(angular.fromJson(response.data).login){$location.url("/menuEnt");}
            else{console.log("pailaps");}
        },function(response){
            console.log("Ocurrio un error en la peticion post");
        })};
});

vac.controller("pacienteCtrl", function(){
    console.log("paciente");
    
});

vac.controller("nuevaVacCtrl", function(){
    console.log("NuevaVacuna");
    
});
vac.controller("registroEnCtrl", function(){
    console.log("nuevoEmp");
    
});

vac.controller("menuEntCtrl", function(){
    console.log("Menu");
    
});

vac.controller("nuevoPaCtrl", function($scope){
    console.log("registroPa");
    $scope.genres = ['Masculino','Femenino'];
    $scope.documentType = ['Cédula', 'Tarjeta de Identidad', 'Registro Civil'];
    $scope.selectedGenre = $scope.genres[0];
    $scope.selectedDocumentType = $scope.documentType[0];
    console.log($scope.genres);
});

//AH SI?