import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

import { Container } from "react-bootstrap";

import Formulario from "../components/Formulario"

const EditarProduto = () => {
  const { usuarioNome } = useContext(AuthContext);

  if (usuarioNome === "Visitante") return <Navigate to="/login" />;
  
  return (
    <div style={{height:"91.8vh"}}>
      <Container>
        <h1>Editar Produto</h1>
        <Formulario page="editar"/>
      </Container>
    </div>
  )
};

export default EditarProduto;
