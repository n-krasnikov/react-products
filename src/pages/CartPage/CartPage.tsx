import { type FC } from 'react';

import './CartPage.css';

import { ProductInCart } from '../../components/ProductInCart';
import { useCart } from '../../helpers';


const CartPage: FC = () => {

  const [products, total] = useCart(state => [state.products, state.total]);

  return (
    <div>
      {products.map((product) => {
        return (
          <ProductInCart 
            key={product.id} 
            productId={product.id}
            productCount={product.count}
          />
        )
      })}
      <div className='cart-summary'> Summary: {total} $</div>
    </div>
  );
}

export default CartPage