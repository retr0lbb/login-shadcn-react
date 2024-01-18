import {Route, BrowserRouter, Routes} from "react-router-dom"
import Login from "@/pages/login.tsx"


export default function Roteador(){
    return(
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}