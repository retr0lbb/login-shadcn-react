import {
    Card,
    CardContent, 
    CardTitle, 
    CardHeader,
    CardDescription, 
} from "@/components/ui/card";

import {
    Avatar, 
    AvatarFallback, 
    AvatarImage
} from "@/components/ui/avatar"


import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"



export default function Login(){
    const navigator = useNavigate()
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")

    function handleTestClick(){
        setEmail("admin@gmail.com")
        setPass("admin")
    }
    function handleSubmit(){
        if(!email || !pass){
            alert("Data must be provided")
        }

        axios.post("https://auth-sistem.vercel.app/auth", {email: email, pass: pass})
        .then(response => {
            if(response.status === 200){
                alert("logado com sucesso")
                console.log(response)
            }
        }).catch(err =>{
            console.log(err)
        })
    }


    return(
        <div className="h-screen w-svw flex justify-center items-center bg-fundo">
            
            <Card className="bg-[#333333] border-none p-8">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle className="text-white font-bold text-5xl mb-5">Login</CardTitle>
                <Avatar className="w-32 h-32">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </CardHeader>
                
                <CardContent className="flex transition-all">
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        handleSubmit()
                    }}>

                        <Label className="text-[#FFFFFF] w-full" htmlFor="email">Email</Label>
                        <Input className="text-[#999999] w-full mb-3" id="email" onChange={e => setEmail(e.target.value)} value={email} name="email" type="email"/>
                        <Label className="text-[#FFFFFF] w-full" htmlFor="Password">Senha</Label>
                        <Input className="text-[#999999] w-full mb-3" id="Password" onChange={e => setPass(e.target.value)} value={pass} name="password" type="password"/>

                        <div className="flex items-center justify-between gap-5 w-full">
                        <Button className="w-full p-2 bg-[#3498db]" type="submit">Enviar</Button>
                        <a href="cadastro" className="text-white text-center w-full h-full"><strong className="text-blue-500">Cadastro</strong></a>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-5 w-full">
                            <Button onClick={handleTestClick}> Demo </Button>
                        </div>


                    </form>


                </CardContent>

            </Card>
        </div>
    )
}