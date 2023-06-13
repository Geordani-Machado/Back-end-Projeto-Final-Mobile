import { Prisma } from "../../database/prismaCliente";

interface IPokedex{
    id_user:        number;      
    id_pokemon:     number;    
    id_habilidade:  number; 
}

export class CreateReserva{
   async execute({id_user, id_pokemon, id_habilidade} : IPokedex){

    const Pokedex = await Prisma.pokedex.create({
        data:{
            
            id_user,
            id_pokemon,
            id_habilidade
        }
      
    })

    return Pokedex;

   }
   
}