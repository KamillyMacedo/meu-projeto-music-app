import {artistArray} from "../assets/database/artists.js"
import {songsArray} from "../assets/database/songs.js"
import { db } from "./connect.js";



const newArtistsArray = artistArray.map((currentArtistsOBJ) => {
    const NewArtistsObj = {...currentArtistsOBJ};
    delete NewArtistsObj.id

    return NewArtistsObj;
});

const newSongsArray = songsArray.map((currentSongOBJ) => {
    const NewSongsObj = {...currentSongOBJ};
    delete NewSongsObj.id

    return NewSongsObj;
});

 const responseSongs = await db.collection('songs').insertMany(newSongsArray);
 const responseArtists = await db.collection('artists').insertMany(newArtistsArray);


console.log(responseSongs);
console.log(responseArtists);

console.log(newArtistsArray);

