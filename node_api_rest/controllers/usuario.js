//REST controller for the entity users of the system
var mongoose = require('mongoose');
var usuario  = mongoose.model('usuario');

exports.checkLogin = function(req,res){
        usuario.loginCheck(req.body.username,req.body.password, function(authenticated){
            console.log(authenticated);
            if(authenticated){
            res.status(200).jsonp({login : true});
            }
		else {res.status(200).jsonp({login : false});}
        }
	)};
