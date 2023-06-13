import { Prisma } from "../../database/prismaCliente";

export class GetAllPokemon{
    async execute(){
        const AllPokemons = await Prisma.pokemon.findMany({

        });

        return AllPokemons;
    }
}