import { useBuscarProdutoPorId } from "../../client/src/hooks/useApi.js";
import conn from "../conexao.js";

export const buscarCategorias = async (req, res) => {
  const sql = `SELECT * FROM categorias`;

  conn.query(sql, (erro, dados) => {
    if (erro) {
      console.log(erro);
    } else {
      res.status(200).json(dados).end();
    }
  });
};

export const buscarProdutos = async (req, res) => {
    const sql = `SELECT * FROM prod_cat`;

    conn.query(sql, (erro, dados) => {
        if (erro) {
            console.log(erro);
        } else {
            res.status(200).json(dados).end();
        }
    });
};

export const deletarProdutos = async (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM produtos WHERE id_prod = ${id}`;

    conn.query(sql, [id], (erro, result) => {
        if (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage).end();
        } 
        else {
            res.status(200).json(json.stringfy(result)).end();
        }
    });
}

export const criarProdutos = async (req, res) => {
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const categoria = req.body.categoria;
    const preco = req.body.preco;
    const img = req.body.imagemUrl;'
    const sql = `INSERT INTO produtos (nome_prod, descricao_prod, categoria_prod, preco_prod, imagem_prod) VALUES ('${nome}', '${descricao}', '${categoria}', '${preco}', '${img}');)`;
    conn.query(sql, (erro) => {
        if (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage).end();
        } else {
            res.status(200).json("Cadastro de produto efetuado").end();
        }
    });
}

export const buscarProdutosPorId = async (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM produtos WHERE id_prod = ${id}`;

    conn.query(sql, (erro, result) => {
        if (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage).end();
        } else {
            res.status(200).json(result[0]).end();
        }
    });
}

export const atualizarProdutos = async (req, res) => {}
    const id = req.params.id;

    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const categoria = req.body.categoria;
    const preco = req.body.preco;
    const img = req.body.imagemUrl;
    const sql = `UPDADTE produtos SET nome_prod = '${nome}', 
                                        descricao_prod = '${descricao}', 
                                        categoria_prod = '${categoria}', 
                                        preco_prod = '${preco}', 
                                        imagem_prod = '${img}' 
                                        WHERE id_prod = ${id}`;
    conn.query(sql, (erro) => {
        if (erro) {
            res.status(500).json(erro.sqlMessage).end();
        } else {
            res.status(200).end();
        }
    });
};