// API significa Application Programing Interface - um sistema ultilizado para comunicação de entidades - 2 ou mais computadores 
//  a API criada para esse projeto vai conectar e pegar informacoes do artista e musicas solicitadAS e devolver para a interface
// podemos fazer varios tipos de requisição - GET POST PUT DELETE
// CRUD - CREATE READ UPDATE DELETE
// Endpoint - uma rota que pode ser acessada pela API
// mongo - banco de dados nao relacional 

import express from "express";
import cors from "cors";
import { db, connectDB } from "./connect.js";  // <- Traz a função connectDB também

const app = express();
const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na PORTA ${PORT}`);
});

app.use(cors());

// Rota inicial
app.get("/", (request, response) => {   // Corrigido resquest para request
    response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

// Rota para pegar artistas
app.get("/artists", async (request, response) => {  // Corrigido resquest para request
    try {
        const artists = await db.collection('artists').find({}).toArray();
        response.json(artists);
    } catch (error) {
        response.status(500).send("Erro ao buscar artistas");
    }
});

// Rota para pegar músicas
app.get("/songs", async (request, response) => {  // Corrigido resquest para request
    try {
        const songs = await db.collection('songs').find({}).toArray();
        response.json(songs);
    } catch (error) {
        response.status(500).send("Erro ao buscar músicas");
    }
});

// Função para iniciar o servidor após conexão com banco
async function startServer() {
    try {
        await connectDB();  // <- Garantir conexão antes do listen
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Erro ao iniciar servidor:", error);
    }
}

startServer();


