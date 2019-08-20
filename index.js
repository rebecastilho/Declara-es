const http = require('http');
const path = require('path');

const express = require('express'); 
const bodyParser = require('body-parser');

const professoresRouter = require('./routes/professores');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname , 'public' )));

app.use('/professores' , professoresRouter);

app.get('/',(req , res , next) => {
    res.send("<h1> Declaracoes de Provas </h1>");
 });

app.use((req, res , next) => {
    res.status(404).send('<h1> Pagina não encontrada </h1>');
});


const server = http.createServer(app);
server.listen(3000);