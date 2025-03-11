import axios from "axios";

const API_URL = "http://localhost:3010";

const responseArtists = await axios.get(`${API_URL}/artists`);
const responseSongs = await axios.get(`${API_URL}/songs`);


export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
