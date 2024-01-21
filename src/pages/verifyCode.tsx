import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";
import React, { useState, useRef, ChangeEvent} from "react";
import { MdEmail } from "react-icons/md";

export default function(){
    const [inputValues, setInputValues]= useState(['', '', '', '', '', ''])
    const inputRefs = useRef<HTMLInputElement[]>([])

    const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const truncatedValue = value.slice(0, 1);
        const newInputValues = [...inputValues];
        newInputValues[index] = truncatedValue;
        setInputValues(newInputValues);
    
        if (index < inputRefs.current.length - 1 && truncatedValue !== '') {
          inputRefs.current[index + 1].focus();
        }   
      };
      const handleBackspace = (index: number, event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Backspace" && index > 0 && inputValues[index] === ''){
            inputRefs.current[index- 1].focus()

        }
    }

    // O(1) complexidade de tempo ja que o numero maximo e minimo de valores que se recebe é 6
    function handleClick(){
        function concatVals(array: string[]){
            let temp:string = "";
            for(let i = 0; i< array.length; i++){
                temp+= array[i]
            }
            return temp
        }
        const code = concatVals(inputValues)
        axios.post("https://auth-sistem.vercel.app/auth/2fa", {code})
        .then(response => {
            if(response.status === 200){
                toast("logado com sucesso", {
                    action: {
                        label: "close",
                        onClick: () => console.log("close")
                    }
                })
            }
        }).catch(err => {
            alert("codes did not match")
            console.error(err)
        })
    }

    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl"><MdEmail className="text-4xl"/> Insira o codigo que foi mandado no email</CardTitle>
                    <CardDescription> Um codigo de 6 digitos sera enviado no seu email de cadastro</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-5 flex-col">
                    <div className="w-full flex gap-2">
                    {inputValues.map((value, index)=>{
                        return(
                            <Input
                                key={index}
                                className="inputCode"
                                value={value}
                                onChange={(e) => handleChange(index, e)}
                                ref={(inputRef) => (inputRefs.current[index] = inputRef as HTMLInputElement)}
                                maxLength={1}
                                onKeyDown={(e)=> handleBackspace(index, e)}
                            />
                        )
                    })}
                    </div>
                    <Button className="p-4" onClick={handleClick}>Enviar</Button>
            </CardContent>
            </Card>
        </div>
    )
}