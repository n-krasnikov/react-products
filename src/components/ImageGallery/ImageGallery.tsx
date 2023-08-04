import { useState, type FC } from 'react';

import { IProps } from './ImageGallery.props';

import './ImageGallery.css';

const ImageGallery: FC<IProps> = ({images}) => {
  const [currentId, setCurrentId] = useState(0);

  const handlerClick = () => {
    currentId === images.length - 1
    ? setCurrentId(0) 
    : setCurrentId(currentId + 1);
  }

  return (
    <div className='gallery'>
      <img src={images[currentId]} className="product-card-image" onClick={handlerClick} />
    </div>
  );
}

export default ImageGallery
