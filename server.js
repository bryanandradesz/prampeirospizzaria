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
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + "/public/scripts/"));


// ------------------ Variaveis Globais --------------------- //

const Carrinho = require('./src/model/Carrinho.js')
var itemsCarrinho = 0
let login = false
const vetor = new Array()



// ------------------Principais--------------------- //

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html')
})

app.get("/menu", function (req, res) {
    res.sendFile(__dirname + '/public/scripts/menu.html')
})



app.get("/header", function (req, res) {

    if (login) {

        res.render("header", { 
             login_section: "Olá, ",
             login_section2: "Prof_Prampeiro.", 
             numCarrinho: itemsCarrinho 
            })
    } else {
        res.render("header", { 
            login_section: "Olá! Acesse sua conta ", 
            login_section2: "Login!", 
            numCarrinho: itemsCarrinho 
        })
    }
})


app.get('/body', function (req, res) {
    res.sendFile(__dirname + '/public/scripts/body.html')
})
// -----------------Rotas Navegação---------------------- //

app.get('/account', function (req, res) {
    if (login) {
       res.redirect("/")
    } else {
        res.render("login")
    }
})

app.post('/login', function (req, res) {
    const usuario = String(req.body.inUsuario)
    const senha = String(req.body.inSenha)
    if (usuario == "Prof_Prampeiro" && senha == "prampreiroif123") {
        login = true
        res.redirect("/")
        } else {
        res.redirect("/")
        login = false
    }
})


app.get('/cardapio', function (req, res) {
    res.render("cardapio")
})

// ----------------- Carrinho ---------------------- //
app.post('/addcarrinho', function (req, res) {

    try {
        let obj = new Carrinho()
        obj.sabor = String(req.body.inSabor);
        obj.ingredientes = String(req.body.inIngredientes);
        obj.valor = parseFloat(req.body.inValor);
        obj.quantidade = parseInt(req.body.inQtd);
        obj.img = String(req.body.inImg)
        obj.totalqtd = parseFloat(parseInt(req.body.inQtd) * parseFloat(req.body.inValor))
        itemsCarrinho += 1
        console.log(`--------< Novo Pedido! >--------\nPizza: ${obj.sabor}\nIngredientes: ${obj.ingredientes}\nValor: ${obj.valor}\nFoto: ${obj.img}`)
        res.redirect("/listar")
        vetor.push(obj)
    }
    catch (erro) {
        console.log("Erro: " + erro) // vai para o terminal
        res.send("Erro: " + erro) // vai para o browser
    }
})

// -----------------------------------------------------------

// ----------------- Finalizar Compra ---------------------- //
app.get('/finalizarcompra', function (req, res) {

    try {
            for (let u = 0; u < vetor.length; u++) {
                vetor.splice(u, vetor.length) 
            }
            itemsCarrinho = 0
            res.render("succeful")
        
    }
    catch (erro) {
        console.log("Erro: " + erro) // vai para o terminal
        res.send("Erro: " + erro) // vai para o browser
    }
})

// -----------------------------------------------------------




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
    itemsCarrinho -= 1
    let pos = parseInt(req.params.pos)
    vetor.splice(pos, 1) // remove na posição e a quantidade
    res.redirect('/listar')
})



// ------------------Iniciar Servidor--------------------- //

app.use((req, res, next) => {
    res.status(404).send("Desculpe, não conseguimos encontrar essa página.");
}) // Erro 404


app.listen(port, function (erro) {
    if (erro) {
        console.log("❌ » Erro :" + erro)
    }
    else {
        console.clear()
        console.log("✅ » Servidor Online atualizado ás " + now.getHours() + ":" + now.getMinutes() + " na porta 3000...")
    }
})

