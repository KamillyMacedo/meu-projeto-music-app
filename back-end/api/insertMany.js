import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";
import { db, connectDB } from "./connect.js";

async function seedDatabase() {
    const newArtistsArray = artistArray.map((currentArtistsOBJ) => {
        const newArtistsObj = { ...currentArtistsOBJ };
        delete newArtistsObj.id;
        return newArtistsObj;
    });

    const newSongsArray = songsArray.map((currentSongOBJ) => {
        const newSongsObj = { ...currentSongOBJ };
        delete newSongsObj.id;
        return newSongsObj;
    });

    await db.collection('artists').deleteMany({});  // Limpar antes de inserir (opcional)
    await db.collection('songs').deleteMany({});    // Limpar antes de inserir (opcional)

    const responseSongs = await db.collection('songs').insertMany(newSongsArray);
    const responseArtists = await db.collection('artists').insertMany(newArtistsArray);

    console.log("✅ Dados inseridos com sucesso:");
    console.log(responseSongs);
    console.log(responseArtists);
}

connectDB().then(async () => {
    await seedDatabase();
    process.exit(); // Fecha o script depois de inserir
}).catch(err => {
    console.error("❌ Erro ao popular banco:", err);
    process.exit(1); // Fecha com erro
});


