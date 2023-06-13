
const express = require('express');
import { Routes } from "../routes/_app";
const app = express();
import cors from 'cors';
//import { GetPokemonByID } from './modules/Pokemon/GetPokemonById';

app.use(cors())

app.use(express.json());
app.use(Routes);

//GetPokemonByID(1);


app.listen(3000, () => console.log('Server is runing in port 3000 🚀'))




