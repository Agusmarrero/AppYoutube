import axios from 'axios';
const KEY = 'AIzaSyBYKWqwzprDHWIDLSN-NbK_ZqQ2JDXZW8M';

//AXIOS: Libreria que me permite hacer operaciones como cliente HTTP. Hacemos solicitudes a un servidor y recibimos respuestas fáciles. 
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})