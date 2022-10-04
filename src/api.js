import axios from "axios";

const api = axios.create({
  baseURL: "http://10.10.10.119:5000/",
});

export const chatApi = {
  userGet: (term) => api.get(term),
};
