import { type FC } from 'react';

import './EmptySapce.css';

const EmptySpace: FC = () => {
  return (
    <div className="empty-space">
      <div className="tumbleweed"/>
      <div className="tumbleweed"/>
      <div className="tumbleweed"/>
    </div>
  );
};

export default EmptySpace;
