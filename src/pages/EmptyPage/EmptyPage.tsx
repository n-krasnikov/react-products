import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { EmptySpace } from '../../components/ui';

import './EmptyPage.css';

const EmptyBasket: FC = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');

  return (
    <div className='empty-page'>
      <h1>It seems empty...</h1>
      <h2 onClick={goToMain} >Go to product list</h2>
      <EmptySpace />
    </div>
  );
};

export default EmptyBasket;
