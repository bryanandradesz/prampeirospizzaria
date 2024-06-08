// ------------------ Bibliotecas --------------------- //
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = new express();

// ------------------ Porta e Data --------------------- //
const port = 3000
now = new Date

// ------------------ Express e EJS --------------------- //

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname+"/public/scripts/"));

// ------------------ Variaveis Globais --------------------- //

const vetor = new Array()


// ------------------Principais--------------------- //

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html')
})

app.get("/menu", function (req, res) {
    res.sendFile(__dirname+'/public/scripts/menu.html')
})

app.get("/header", function (req, res) {
    
    const login = true
    if(login) {
        
        res.render("header", {login_section:"Minha ", login_section2:"Conta", num_itemscart:0})
    } else {
        res.render("header", {login_section:"Olá! Acesse sua conta ", login_section2:"Login!", num_itemscart:0})
    }
})


app.get('/body', function (req, res) {
    res.sendFile(__dirname+'/public/scripts/body.html')
})
// -----------------Rotas Navegação---------------------- //

app.get('/login', function (req, res) {
    res.sendFile(__dirname+'/public/scripts/login.html')
})
app.get('/cardapio', function (req, res) {
    res.render("cardapio")
})

// ----------------- Login ---------------------- //




// ------------------Iniciar Servidor--------------------- //

app.use((req, res, next) => {
    res.status(404).send("Desculpe, não conseguimos encontrar essa página.");
  }) // Erro 404


  app.listen(port, function(erro) {
    if(erro){
        console.log("❌ » Erro :" + erro)
    }
    else{
        console.clear()
        console.log("✅ » Servidor Online atualizado ás " + now.getHours() + ":" + now.getMinutes() + " na porta 3000...") 
    }
})

