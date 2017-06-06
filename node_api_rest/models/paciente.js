exports = module.exports = function(app, mongoose) {

	var pacienteSchema = new mongoose.Schema({
		_id: Number,
		nombre: String ,
		apellido: String ,
		fecha_nacimiento: Date ,
		documentos: [{ nombreDocumento: String, numeroDocumento: Number, pathImgDocumento: String} ],
		numCertificadoNacVivo: Number,
		Sexo:{
			type: String,
			enum: ['Masculino', 'Femenino']
		},
		pesoNacimiento: Number,
		responsable:{nombreResponsable: String,
					  dirResponsable: String,
					  ciudadResponsable: String,
					  departamentoResponsable: String},
					  
		vacuna: [{nombreVacuna: String,
				dosisVacuna: Number,
				fecha_aplicacion: Date,
				edadAños: Number,
				edadMeses: Number,
				labVacuna: String,
				numLoteVacuna: Number,
				ipsVacuna: String,
				fecha_proxvacuna: Date,
				nombreAplica: String,
				numCedulaAplica: {type: Number}
		}],
		entidadCreacionCarnet: {type: String},
		nombrePerCreacionCarnet:{type: String},
		documentoPerCreacionCarnet:{ type: Number},
	});	

	mongoose.model('PacienteSchema', pacienteSchema);

};