import React from "react";
import CardProduto from "../components/CardProduto";

import { useListaProdutos } from "../hooks/useApi";

import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Home = () => {

  const { usuarioNome } = useContext(AuthContext)


  if(usuarioNome === "Visitante") return <Navigate to="/login" />
  
  const produtos = useListaProdutos();

  return (
    <div>
      <h1>Lista</h1>
      <div className="d-flex col-12 gap-2 mt-3 justify-content-between flex-wrap">
        <CardProduto
          id="1"
          nome="Shampoo do CR7"
          descricao="Milior xampu de todos"
          preco="7,77"
          categoria="Saúde e beleza"
          imagemUrl="https://m.media-amazon.com/images/I/71wZzJ2ljRL.jpg"
        />

        {produtos.map((prod) => (
          <CardProduto
            key={prod.id}
            id={prod.id}
            nome={prod.nome}
            descricao={prod.descricao}
            preco={prod.preco}
            categoria={prod.categoria}
            imagemUrl={prod.imagemUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
