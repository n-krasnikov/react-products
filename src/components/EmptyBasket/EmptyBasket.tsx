import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { EmptySpace } from '../ui/EmptySpace';

import './EmptyBasket.css';

const EmptyBasket: FC = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');

  return (
    <div className='empty-basket'>
      <h1>It seems empty...</h1>
      <EmptySpace />
      <h2 onClick={goToMain} >Go to product list</h2>
    </div>
  );
};

export default EmptyBasket;
