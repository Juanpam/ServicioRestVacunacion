exports = module.exports = function(app, mongoose) {

	var usuarioEnSchema = new mongoose.Schema({
		nombre: String,
		apellido: String,
		numCedula: {type: Number, unique: true},
		entidad: String,
		correo: String,
		contraseña: String
		
	});
	
	usuarioEnSchema.statics.loginCheck = function(username,password,callback){
		var auth = false;
		console.log(callback);
		this.find({nombre: username, contraseña: password}, function(err, results){
			if (err) return console.error(err);
			else if(results.length!=0){console.log(results); auth = true;}
			else{auth = false;}
			callback(auth);
		});
	};
	mongoose.model('usuario', usuarioEnSchema);

};