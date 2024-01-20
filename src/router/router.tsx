import {Route, BrowserRouter, Routes} from "react-router-dom"
import Login from "@/pages/login.tsx"
import Cadastro from "@/pages/cadastro.tsx"


export default function Roteador(){
    return(
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}