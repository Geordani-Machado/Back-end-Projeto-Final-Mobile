
import { Prisma } from "../../database/prismaCliente"

export class FindUserbyID{
    async execute(_id : number){
        const FindMotoristaFromYear = await Prisma.user.findMany({
            where:{
                id_user: _id
            }
        });
        return FindUserbyID;
    }
}