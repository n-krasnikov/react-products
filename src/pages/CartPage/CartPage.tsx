import { type FC } from 'react';

import './CartPage.css';

import { ProductInCart } from '../../components/ProductInCart';
import { useCart } from '../../helpers';


const CartPage: FC = () => {

  const [products, total] = useCart(state => [state.products, state.total]);

  if (products.length === 0) {
    return (
      <h1>It seems empty...</h1>
    )
  }

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
      <hr/>
      <div className='cart-summary'> Summary: {total} $</div>
    </div>
  );
}

export default CartPage