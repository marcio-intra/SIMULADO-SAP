import express from "express"
const app = express()
const port = 5000

import { buscarUsuarios } from "./controllers/usuarioController.js";
import { buscarCategorias } from "./controllers/produtoController.js";


import cors from "cors"

const corsOptions = {
    origin: "http://localhost:5173",
    credential: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/usuarios', buscarUsuarios)

app.get('/categorias', buscarCategorias)

app.get('/produtos', buscarProdutos)

app.delete('/produtos/:id', deletarProdutos)

app.post('/produtos', criarProdutos)

app.get('/produtos/:id', buscarProdutosPorId)

app.put('/produtos/:id', atua1izarProdutos)



app.get("/", (req, res) => {
    res.status(200).send("Tá funcinando");
})

app.listen(port, () => {
    console.log("Servidor iniciado na porta 5000");
})