import { Request , Response } from "express";
import { CreateMotorista } from "../../modules/Users/CreateUser";


export class CreateMotoristaControler{
    async handle(request: Request, response : Response){

        const {nome, email, idade, senha} = request.body

        const createMotorista = new CreateMotorista();
        const  result = await createMotorista.execute({
                nome,
                email,
                idade,
                senha
        })
            return response.json(`Usuario cadastrado com suceso! ${JSON.stringify(result)} `);
    }
    }