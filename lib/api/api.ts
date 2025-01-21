import axios from "axios";

export const baseURL = "https://fakestoreapi.com/";
export const api = axios.create({
  baseURL,
});
