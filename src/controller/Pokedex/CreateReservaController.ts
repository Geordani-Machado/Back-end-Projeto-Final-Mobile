import { Request, Response } from "express";
import { CreateReserva } from "../../modules/Pokedex/CreatePokedex";

export class CreateReservaControler{
    async handle(request: Request, response: Response){

        const{id_user, id_pokemon , id_habilidade } = request.body

        const createReserva = new CreateReserva();
        const result = await createReserva.execute({
            id_user,
            id_pokemon,
            id_habilidade
        })
        return response.json(`Motorista cadastrado com sucesso! ${JSON.stringify(result)} `);
    }
}