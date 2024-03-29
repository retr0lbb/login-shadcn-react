import {Route, BrowserRouter, Routes} from "react-router-dom"
import Login from "@/pages/login.tsx"
import Cadastro from "@/pages/cadastro.tsx"
import Content from "@/pages/secrete.tsx"
import Verify from "@/pages/verifyCode.tsx"



export default function Roteador(){
    return(
            <BrowserRouter>
                <Routes >
                    <Route path="/" element={<Login />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/verify" element={<Verify />}/>
                    <Route path="/content" element={<Content/>}/>
                </Routes>
            </BrowserRouter>
    )
}