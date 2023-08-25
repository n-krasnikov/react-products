import api from './api';

const getProductById = async (id: string) => {
  const res = await api.get(`products/${id}`);
  return res;
};

export default getProductById;
