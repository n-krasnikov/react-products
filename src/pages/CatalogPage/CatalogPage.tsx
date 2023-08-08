import { useEffect, type FC, useState } from 'react';

import getProducts from '../../api/getProducts';
import { IProduct } from '../../vite-env';

import { Loader } from '../../components/Loader';
import { ProductCard } from '../../components/ProductCard';

import './CatalogPage.css';

const CatalogPage: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const responseData = await getProducts();
      if (responseData.status === 200) setProducts(responseData.data.products)
    })();

  },[]); 

  if (products.length === 0) return <Loader/>;

  return (
    <div className='product-list'>
      {products.map(product => 
          <ProductCard 
            key={product.id} 
            title={product.title}
            description={product.description} 
            price={product.price}
            discountPercentage={product.discountPercentage}
            brand={product.brand}
            images={product.images}
            id={product.id}
          />
      )}
    </div>
  );
}

export default CatalogPage
