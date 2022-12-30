import axios from "axios";

const url = 'https://api.giphy.com/v1/gifs/random?api_key=vBntHG3fTjW8MDL9ole5Gy6myLlyFvZJ&';
const giftService = {
    getGift: (param) => axios.get(`${url}tag=${param}&rating=g`)
};
export default giftService;