import axios from "axios";

export const api = axios.create({
  baseURL: "https://blogpessoal-xd3x.onrender.com",
});

export const cadastroUsuario = async (url: string, dados: object,  setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data);
};

export const login = async (url: string, dados: object, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data.token);
};

export const busca = async (url: string, setDado: any, headers: any) => {
  const resposta = await api.get(url, headers);
  setDado(resposta.data);
};

export const buscaId = async (url: string, setDado: any, headers: any) => {
  const resposta = await api.get(url, headers);
  setDado(resposta.data);
};

export const post = async(url: string, dados: any, setDado: any, headers: any) => { 
  const resposta = await api.post(url,dados,headers)
  setDado(resposta.data)
}
export const put = async (url: string,  dados: any,  setDado: any,  headers: any) => {
  const resposta = await api.put(url, dados, headers);
  setDado(resposta.data);
};

export const deleteId = async (url: string, headers: any) => {
  await api.delete(url, headers);
};