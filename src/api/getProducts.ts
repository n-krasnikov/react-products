import api from './api';

const getProducts = async () => {
  const res = await api.get('products');
  return res;
};

export default getProducts;