// Importação components do bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

// Importação do icone de mercado do react-icon
import { BsShop } from "react-icons/bs";

import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const BarraNavegacao = () => {
  const { usuarioNome, logout } = useContext(AuthContext);

  return (
    <div>
      <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
          {/* Logomarca do site */}
          <Navbar.Brand href="/home">
            {/* Icone da logo */}
            <BsShop size="1.5em" className="me-2" color="white" />
            {/* Texto Logo */}
            C&G Mercado
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="minha-nav" />

          <Navbar.Collapse id="minha-nav">
            <Nav className="me-auto">
              {/* Páginas */}
              <Nav.Link href="/home"> Produtos </Nav.Link>
              <Nav.Link href="/cadastraproduto"> Cadastro </Nav.Link>
            </Nav>

            <Nav className="justify-content-end">
              {/* Nome do usuário */}
              <Navbar.Text style={{ color: "white", marginRight: "5px" }}>
                Usuário: {usuarioNome} |
              </Navbar.Text>
              {/* Caso o usuario tenha feito login, aparece o botao de sair, se não, o botão de entrar */}
              {usuarioNome === "Visitante" ? (
                <>
                  <Button variant="primary" href="/login">
                    Entrar
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="danger" href="/login" onClick={logout}>
                    Sair
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNavegacao;
