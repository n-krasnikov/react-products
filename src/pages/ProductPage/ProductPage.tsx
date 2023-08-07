import { useEffect, type FC, useState } from 'react';
import { useParams } from 'react-router-dom';

import getProductById from '../../api/getProductById';
import { IProduct } from '../../vite-env';

import { Loader } from '../../components/Loader';
import { ProductDetail } from '../../components/ProductDetail';

import './ProductPage.css'

const ProductPage: FC = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const responseData = await getProductById(id);
      if (responseData.status === 200) setProduct(responseData.data)
    })();

  },[]); 


  if (product === null) return <Loader/>;

  return (
    <ProductDetail
      images={product.images}
      title={product.title}
      description={product.description}
      brand={product.brand}
      rating={product.rating}
      stock={product.stock}
      price={product.price}
      discountPercentage={product.discountPercentage}
    />
  );
}

export default ProductPage
