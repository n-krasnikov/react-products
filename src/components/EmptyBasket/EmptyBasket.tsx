import { type FC } from 'react';

import './EmptyBasket.css';
import { useNavigate } from 'react-router-dom';

const EmptyBasket: FC = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');

  return (
    <div className='empty-basket'>
      <h1>It seems empty...</h1>
      <h2 onClick={goToMain} >Go to product list</h2>
    </div>
  );
};

export default EmptyBasket;
