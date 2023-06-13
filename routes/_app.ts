import { Router } from "express";


import { GetAllPokemonsControler } from "../src/controller/Pokemon/GetAllPokemonController";


const Routes = Router();



const getAllPokemonsControler = new GetAllPokemonsControler();



Routes.get("/pokemons", getAllPokemonsControler.handle);





Routes.get("/Api" , (req , res) =>{
    return res.send("APi funcionado! 😍🥳")
})


export { Routes } ;

console.log('bateu nas rotas 🛟')