import axios from "axios";

const url = "http://localhost:3000/users";
const userService = {
  login: (user) => axios.post(`${url}/login`, user),
  register: (user) => axios.post(`${url}/register`, user),
};

export default userService;
