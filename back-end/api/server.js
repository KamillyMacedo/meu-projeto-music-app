// API significa Application Programing Interface - um sistema ultilizado para comunicação de entidades - 2 ou mais computadores 
//  a API criada para esse projeto vai conectar e pegar informacoes do artista e musicas solicitadAS e devolver para a interface
// podemos fazer varios tipos de requisição - GET POST PUT DELETE
// CRUD - CREATE READ UPDATE DELETE
// Endpoint - uma rota que pode ser acessada pela API
// mongo - banco de dados nao relacional 

import express from "express"
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3005;

app.use(cors());

app.get("/", (resquest, response) => {
    response.send ("Só vamos trabalhar com os endpoints '/artists' e '/songs");
});

app.get("/artists", async (resquest, response) => {
    response.send (await db.collection('artists').find({}).toArray());
});

app.get("/songs", async (resquest, response) => {
    response.send (await db.collection('songs').find({}).toArray());
});

app.listen(PORT, () => {
    console.log(`Servidor esta escutando na PORT ${PORT}`)
});

