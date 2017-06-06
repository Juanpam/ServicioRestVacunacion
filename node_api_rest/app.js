var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/vacunacion', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/usuario')(app, mongoose);
var dbInitialize = require('./dbInitialization/dbInitialization');
var usuariosCtrl = require("./controllers/usuario");
//var TVShowCtrl = require('./controllers/tvshows');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});
app.use(router);
app.use(express.static(__dirname));

// // API routes
var login = express.Router();
login.route('/api/entidad').post(usuariosCtrl.checkLogin);
app.use('/',login);
// var tvshows = express.Router();

// tvshows.route('/tvshows')
//   .get(TVShowCtrl.findAllTVShows)
//   .post(TVShowCtrl.addTVShow);

// tvshows.route('/tvshows/:id')
//   .get(TVShowCtrl.findById)
//   .put(TVShowCtrl.updateTVShow)
//   .delete(TVShowCtrl.deleteTVShow);

// app.use('/', tvshows);

// Start server
app.listen(8080, function() {
  console.log("Node server running on http://localhost:8080");
});