let express = require ('express');
let bodyparser = require('body-parser');
let app = express();
let port = 3000;

//Préparation du serveur
app.set('view engine', 'ejs'); // on définit ejs comme le retour de view
app.use(express.static(__dirname + '/www')); // redirect root
app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js',express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/js',express.static(__dirname + '/node_modules/popper.js/dist/umd')); // redirect popper
app.use('/css',express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect bootstrap css
app.use('/views',express.static(__dirname + '/views')); // redirect views

//Body parser
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.listen(port, () => {
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

let monObjet = {
    nom: "monObjet",
    valeur: 10
}

//Routes
app.get('/', (req, res, next) => {
    res.render('index.ejs', {monObjet: monObjet});

});

app.get('/game', (req, res, next) => {
    res.render('game.ejs');
});

app.post( '/game', (req, res, next) => {
    console.log(req.body.name);
});

//Si la page ne correspond à aucune route, erreur 404
app.use( (req, res, next) => {
    res.status(404).render('error.ejs');
});