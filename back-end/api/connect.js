//  JavaScript assincrono
// await async

import { MongoClient } from "mongodb";

const URI = "mongodb+srv://projects:130827@cluster0.mzijo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(URI);

export const db = client.db("Spotify");

export async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Conectado ao MongoDB!");
    } catch (error) {
        console.error("❌ Erro ao conectar no MongoDB:", error);
        throw error;
    }
}





