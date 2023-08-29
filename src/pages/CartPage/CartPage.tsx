import { type FC } from 'react';

import { useBasket } from '../../helpers';

import { EmptyPage } from '../EmptyPage';
import { ProductInCart } from '../../components/ProductInCart';

import './CartPage.css';

const CartPage: FC = () => {
  const [products, total] = useBasket(state => [state.products, state.total]);

  if (products.length === 0) return (<EmptyPage />);

  return (
    <div>
      {products.map((product) => <ProductInCart {...product} key={product.id}/>)}
      <hr/>
      <div className='cart-summary'> Summary: {total} $</div>
    </div>
  );
};

export default CartPage;
