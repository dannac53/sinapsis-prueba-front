import axios from "axios";
const url = "https://catfact.ninja/fact";
const apiUrl = "http://localhost:3000/cats";
const catFactService = {
  save: (cat) => axios.post(`${apiUrl}`, cat),
  update: (cat) => axios.post(`${apiUrl}`, cat),
  findAllByUser: (userId) => axios.get(`${apiUrl}/user/${userId}`),
  deleteById: (catId) => axios.delete(`${apiUrl}/${catId}`),
  findById: (catId) => axios.get(`${apiUrl}/${catId}`),
  getCatFact: () => axios.get(url),
};
export default catFactService;
