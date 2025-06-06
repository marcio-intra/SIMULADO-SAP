// Cria a lista de rotas com o Router Dom
import { createBrowserRouter } from "react-router-dom"

// Importação das páginas utilizadas
import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import Home from "./pages/Home.jsx"
import CadastrarProduto from "./pages/CadastrarProduto.jsx"
import EditarProduto from "./pages/EditarProduto.jsx"
import Login from "./pages/Login.jsx"

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement: <PaginaErro />,
        children:[
            {
                path:"/",
                element:<Login />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/home",
                element:<Home />
            },
            {
                path:"/cadastraproduto",
                element:<CadastrarProduto/>
            },
            {
                path:"/editarproduto/:id",
                element:<EditarProduto />
            },
        ]
    }
])

export default router;