import axios from "axios";

const instance = axios.create({
  baseURL: "https://barbarashop-d8171.firebaseio.com/",
});

export default instance;
