import { useState, useEffect, createContext } from "react"
export const AuthContext = createContext()
export const AuthProvider = ({children}) => {

    const [usuarioNome, setUsuarioNome] = useState("")

    useEffect( () => {
        const nome  = localStorage.getItem("userName") || "Visitante"
        setUsuarioNome(nome)
    }, [])

    const login = (data) => {
        console.log("Usuário atual:", data)
        localStorage.setItem("userName", data.nome_usu)
        localStorage.setItem("email", data.email_usu)
        setUsuarioNome(data.nome_usu)
    }

    const logout = () =>{
        localStorage.removeItem("userName")
        localStorage.removeItem("email")
        setUsuarioNome("Visitante")
    }

    return (
        <AuthContext.Provider value={{usuarioNome, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}