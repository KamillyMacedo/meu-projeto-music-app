//  JavaScript assincrono
// await async

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://projects:130827@cluster0.mzijo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export let db;  // Declaramos como `let` para inicializar depois

export async function connectDB() {
    try {
        await client.connect();
        db = client.db("Spotify");  // Só inicializa depois de conectar
        console.log("✅ Conectado ao MongoDB!");
    } catch (error) {
        console.error("❌ Erro ao conectar no MongoDB:", error);
        throw error;  // Importante: Se falhar, deve parar tudo
    }
}



