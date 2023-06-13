import { Response , Request } from "express";

import { GetAllPokemon } from "../../modules/Pokemon/GetAllPokemon";

export class GetAllPokemonsControler{
    async handle(request: Request, response : Response) {
        const getAllReserva = new GetAllPokemon();

        const allReserva = await getAllReserva.execute();

        return response.json(allReserva);
    }
}