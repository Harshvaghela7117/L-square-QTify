
import axios from "axios";

export const BACKEND_ENPOINT = "https://qtify-backend-labs.crio.do"

export const fetchTopAlbums = async () =>{
    try{
        const response = await axios.get(`${BACKEND_ENPOINT}/albums/top`);
        return response.data;
    }catch (e){
        console.error(e);
        throw e;
    }
}

export const fetchNewAlbums = async () =>{
    try{
        const response = await axios.get(`${BACKEND_ENPOINT}/albums/new`);
        return response.data;
    }catch (e){
        console.error(e);
        throw e;

    }
}

export const fetchSongs = async () =>{
    try{
        const response = await axios.get(`${BACKEND_ENPOINT}/songs`);
        return response.data;
    }catch (e){
        console.error(e);
        throw e;

    }
}

export const fetchFilters = async () =>{
    try{
        const response = await axios.get(`${BACKEND_ENPOINT}/genres`);
        return response.data;

    }catch (e) {
        console.error(e);
        throw e;

    }
}