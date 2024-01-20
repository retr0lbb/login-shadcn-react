import {
    Card,
    CardContent, 
    CardTitle, 
    CardHeader, 
} from "@/components/ui/card";
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"


export default function(){
    return(
        <div className="w-screen h-screen flex justify-center items-center bg-fundo">
            <Card className="p-4 flex gap-10">
                <CardHeader>
                    <CardTitle>Cadastro</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-4">
                    <form action="post">
                        <Label htmlFor="username">Nome de Usuario</Label>
                        <Input name="username" id="username" type="text" />
            
                        <Label htmlFor="email">E-mail</Label>
                        <Input name="email" id="email" type="email" />
                        
                        <Label htmlFor="date-of-birth">Data de nascimento</Label>
                        <Input name="date-of-birth" id="date-of-birth" type="date"/>
            
                        <Label htmlFor="password">Senha</Label>
                        <Input name="password" id="password" type="password" />

                        <Label htmlFor="password">Confirme sua senha</Label>
                        <Input name="password" id="password" type="password" />

                        <div className="mt-4 flex justify-between items-center">
                        <Button type="submit">Cadastrar</Button>
                        <a href="/" className="pl-4">Ja tem conta?</a>
                        </div>
                    </form>
                </CardContent>
            </Card>

        </div>
    )
}