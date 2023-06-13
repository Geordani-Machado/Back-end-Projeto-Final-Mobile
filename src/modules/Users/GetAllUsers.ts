import { Prisma } from "../../database/prismaCliente";

export class GetAllMotorista{
    async execute(){
        const AllMotoristas = await Prisma.user.findMany({

        });

        return AllMotoristas;
    }
}