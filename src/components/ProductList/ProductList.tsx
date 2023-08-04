import { useEffect, type FC, useState } from 'react';

import getProducts from '../../api/getProducts';

import { IProduct } from '../../vite-env';
import { ProductCard } from '../ProductCard';

import './ProductList.css';

const ProductList: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const responseData = await getProducts();
      if (responseData.status === 200) setProducts(responseData.data.products)      
  })();

  },[]); 

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
          />
      )}
    </div>
  );
}

export default ProductList
