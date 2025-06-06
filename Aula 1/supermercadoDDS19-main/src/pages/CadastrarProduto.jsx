import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

import { Container } from "react-bootstrap";

import Formulario from "../components/Formulario";

const CadastrarProduto = () => {
  const { usuarioNome } = useContext(AuthContext);

  if (usuarioNome === "Visitante") return <Navigate to="/login" />;

  return (
    <div style={{ height: "91.8vh" }}>
      <Container>
        <h1>Cadastrar Produto</h1>
        <Formulario page="cadastro" />
      </Container>
    </div>
  );
};

export default CadastrarProduto;
