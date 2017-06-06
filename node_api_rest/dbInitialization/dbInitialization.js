//Database initialization

//Users creation
var mongoose = require('mongoose');
var userModel  = mongoose.model('usuario');

//User creation :D
new userModel({
		nombre: 	"Pepito",
		apellido: 	"Perez",
		numCedula: "123",
		entidad: "Coomeva",
		correo: "supercorreo@lala.com",
		contraseña: "aguacate"
		
	}).save();