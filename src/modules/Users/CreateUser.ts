import { Prisma } from "../../database/prismaCliente";
 
interface IUser{
    nome :  string;
    email : string;
    idade : string;
    senha : string;
}

export class CreateMotorista{
    async execute({nome, email, idade, senha} : IUser){

        //salvar o motorista no banco de dados
        const User = await Prisma.user.create({
            data:{
                nome,
                email,
                idade,
                senha
            }
        })

        return User;
    }
}