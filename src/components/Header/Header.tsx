import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBasket } from '../../helpers';

import './Header.css';

const Header: FC = () => {
  const navigate = useNavigate();
  
  const goToMain = () => {
    navigate('/');
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const products = useBasket(state => state.products);

  return (
      <div className='header'>
          <div onClick={goToMain}>Main</div>
          <div onClick={goToCart}>Cart {(products.length)? `(${products.length})`: ''}</div>
      </div>
  );
};

export default Header;
