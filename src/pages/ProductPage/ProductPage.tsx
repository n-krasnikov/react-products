import { useEffect, type FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import getProductById from '../../api/getProductById';
import { IProduct } from '../../vite-env';

import { Loader } from '../../components/ui';
import { ProductDetail } from '../../components/ProductDetail';

const ProductPage: FC = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const responseData = await getProductById(id as string);
      if (responseData.status === 200) setProduct(responseData.data);
    })();
  },[]); 

  if (product === null) return <Loader />;

  return <ProductDetail {...product} />;

};

export default ProductPage;
