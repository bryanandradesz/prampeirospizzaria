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

const Carrinho = require('./src/model/Carrinho.js') 
let login = false
const vetor = new Array()


// ------------------Principais--------------------- //

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html')
})

app.get("/menu", function (req, res) {
    res.sendFile(__dirname+'/public/scripts/menu.html')
})

app.get("/header", function (req, res) {
    
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

app.get('/account', function (req, res) {
    if (login) {
         res.render("account")
    } else {
        res.render("login")
    }
})
app.get('/cardapio', function (req, res) {
    res.render("cardapio")
})

// ----------------- Carrinho ---------------------- //
app.post('/addcarrinho', function (req, res) {
    const botao = String(req.body.b2)
    console.log(botao)

        
})

// -----------------------------------------------------------


app.post('/addcarrinho', function (req, res) {
    //o bloco try catch trata exceções
    try {
        const botao = String(req.body.b2)
        let obj = new Carrinho()
        let ingredientes = String(req.body.inIngredientes)
        let sabor = String(req.body.inSabor)
        let = valor = parseFloat(req.body.inValor)

        console.log(ingredientes, sabor, valor)

    }
    catch (erro) {
        console.log("Erro: " + erro) // vai para o terminal
        res.send("Erro: " + erro) // vai para o browser
    }
})

app.get('/listar', function (req, res) {
    try {
        res.render("mostrarCarrinho", { carrinho: vetor });
    }
    catch (erro) {
        console.log("Erro: " + erro) // vai para o terminal
        res.send("Erro: " + erro) // vai para o browser
    }
})

app.get("/remover/:pos", function (req, res) {

    let pos = parseInt(req.params.pos)
    vetor.splice(pos, 1) // remove na posição e a quantidade
    res.redirect('/listar')
})





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

