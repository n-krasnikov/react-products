import { useEffect, type FC, useState } from 'react';


import './ProductInCart.css';

import { IProps } from './ProductInCart.props';
import getProductById from '../../api/getProductById';
import { IProduct } from '../../vite-env';
import { LineLoader } from '../LineLoader';
import { useCart } from '../../helpers';

const ProductInCart: FC<IProps> = ({ productId, productCount }) => {
  const [product, setProduct] = useState<IProduct | null>(null);  
  const [count, setCount] = useState(productCount);
  const [
    countInc, 
    countDec, 
    removeProduct, 
    setTotal, 
    total] = useCart(state => [
      state.countInc, 
      state.countDec, 
      state.removeProduct, 
      state.setTotal, 
      state.total
    ]);


  useEffect(() => {
    (async () => {
      const responseData = await getProductById(productId.toString());
      if (responseData.status === 200) {
        setProduct(responseData.data);
      }
    })();

  },[]); 

  if (product === null) return <LineLoader />;
  
  const handleDelete = () => {
    removeProduct(product.id)
    setTotal(total - (product.price * count));
  };

  const handleIncrement = () => {
    if (count < product.stock) {
      countInc(productId);
      setTotal(total + product.price);
      setCount(count + 1);
    }
  }

  const handleDecrement = () => {
    if (count > 1 && count < product.stock) {
      countDec(productId);
      setTotal(total + product.price);
      setCount(count - 1);
    }
  }

  return (
      <div className='cart-product'>
        <img 
          src={product.images[0]} 
          alt={product.title}
          className='cart-product-image'
        />
        <div className='cart-product-info'>
          <h2>{product.title}</h2>
          <span>{product.description}</span>
        </div>
        <div className='product-counter'>
          <span onClick={handleDecrement} className='counter-btn'>-</span>
          <span>{count}</span>
          <span onClick={handleIncrement} className='counter-btn'>+</span>
        </div>
        <span className='cart-product-price'>{product.price * count} $</span>
        <span onClick={handleDelete} className='cart-product-delete'>X</span>
      </div>
  );
};

export default ProductInCart