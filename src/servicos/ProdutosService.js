import api from '../api';


export const findProdutos = async () => {
  let res = await api.get('/produtos');
  return res.data;
};

export const findProdutoById = async (id) => {
  let res = await api.get('/produtos/' + id);
  return res.data;
};
