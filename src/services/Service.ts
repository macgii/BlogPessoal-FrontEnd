import axios from "axios";

export const api = axios.create({
  baseURL: "https://blogpessoal-xd3x.onrender.com",
});

export const cadastroUsuario = async (url: string, dados: object, setDado: any) => {
    const resposta = await api.post(url, dados);
    setDado(resposta.data);
  };

export const login = async (url: string, dados: object, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data.token);
};
