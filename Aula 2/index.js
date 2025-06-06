const express = require("express");
const app = express();
const port = 5000;

const path = require("path");
const caminho = path.join(__dirname, "pages");

// Configurações do Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Para servir arquivos estáticos

// Middleware de autenticação
const checkAuth = function (req, res, next) {
  req.authStatus = true; // Isso é apenas para exemplo - em produção use um sistema real

  if (req.authStatus) {
    console.log("Este usuário está autenticado");
    next();
  } else {
    console.log("Acesso negado");
    return res.status(403).sendFile(`${caminho}/403.html`);
  }
};

app.use(checkAuth);

// Rotas
app.get("/", (req, res) => {
  res.sendFile(`${caminho}/index.html`);
});

app.get("/home", (req, res) => {
  res.sendFile(`${caminho}/index.html`);
});

app.get("/users/cadastro", (req, res) => {
  res.sendFile(`${caminho}/cadastro.html`);
});

app.post("/users/save", (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.status(400).send("Usuário e senha são obrigatórios");
  }

  console.log(`Login recebido: ${usuario}, Senha: ${senha}`);
  res.sendFile(`${caminho}/cadastroConfirmado.html`);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Buscando usuário com ID: ${id}`);
  res.sendFile(`${caminho}/users.html`);
});

// Rota para página não encontrada (404)
app.use((req, res) => {
  res.status(404).sendFile(`${caminho}/404.html`);
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(`${caminho}/500.html`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
