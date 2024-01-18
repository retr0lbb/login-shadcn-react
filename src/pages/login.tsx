import {
    Card,
    CardContent, 
    CardTitle, 
    CardHeader, 
    CardFooter, 
    CardDescription
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



export default function Login(){
    const [isClicked, setIsClicked] = useState(true)

    function ButtonCadastro(){

    }

    return(
        <div className="h-screen w-svw flex justify-center items-center bg-fundo">
            
            <Card className="bg-[#333333] border-none p-8">
                <CardHeader className="flex justify-center items-center">
                    <CardTitle className="text-white font-bold text-5xl mb-5">{isClicked? "Cadastro": "Login"}</CardTitle>
                <Avatar className="w-32 h-32">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </CardHeader>
                
                <CardContent className="flex transition-all">
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                    }}>
                        {isClicked? 
                        <>
                        <Label className="text-[#FFFFFF] w-full" htmlFor="username">Username</Label>
                        <Input className="text-[#999999] w-full mb-3" id="username" name="username" type="text" />
                        </>: ""}

                        <Label className="text-[#FFFFFF] w-full" htmlFor="email">Email</Label>
                        <Input className="text-[#999999] w-full mb-3" id="email" name="email" type="email"/>
                        <Label className="text-[#FFFFFF] w-full" htmlFor="Password">Password</Label>
                        <Input className="text-[#999999] w-full mb-3" id="Password" name="password" type="password"/>

                        <div className="flex items-center justify-between gap-5">
                        <Button className="w-full mt-4 p-2 bg-[#3498db]" type="submit">Enviar</Button>
                        <Button className={`w-full mt-4 p-2 ${isClicked? "bg-[#3498db]": ""} text-white`} variant="ghost" onClick={() => setIsClicked(!isClicked)}>Cadastrar</Button>
                        </div>

                    </form>


                </CardContent>

            </Card>
        </div>
    )
}