// Importando o outlet do Router dom
import { Outlet } from "react-router-dom";

// Importação do React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importação do componentes do bootstrap
import Container from "react-bootstrap/Container";

// Importando o componente de barra de navegação
import BarraNavegacao from "./components/BarraNavegacao.jsx";

import { AuthProvider } from "./contexts/UserContext.jsx";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="App">
          <BarraNavegacao />
          <Container>
            <Outlet />
          </Container>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
