import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header';

import './BasePage.css';

const BasePage: FC = () => {
  return (
    <>
      <Header />
      <div className={'content'}>
        <Outlet />
      </div>
    </>
  );
};

export default BasePage;
