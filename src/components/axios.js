import Axios from "axios";

export const instance = Axios.create({
  baseURL: "https://cicada-backend.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "true",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
