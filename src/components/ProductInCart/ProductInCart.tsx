import { type FC } from 'react';

import { useBasket } from '../../helpers';
import { IBasketItem } from '../../vite-env';

import './ProductInCart.css';

const ProductInCart: FC<IBasketItem> = (product: IBasketItem) => {
  const [removeFromCart, incCounter, decCounter] = useBasket(state => [state.removeProduct, state.countInc, state.countDec]);

  const handleDelete = () => removeFromCart(product.id);
  const handleIncrement = () => incCounter(product.id);
  const handleDecrement = () => decCounter(product.id);

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
          <span onClick={handleDecrement} className={(product.count === 1)? 'btn-hidden' : 'btn-active'}>-</span>
          <span>{product.count}</span>
          <span onClick={handleIncrement} className={(product.count === product.stock)? 'btn-hidden' : 'btn-active'}>+</span>
        </div>
        <span className='cart-product-price'>{product.price * product.count} $</span>
        <span onClick={handleDelete} className='cart-product-delete'>X</span>
      </div>
  );
};

export default ProductInCart;
