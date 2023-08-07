import { useState, type FC } from 'react';

import { IProps } from './ImageGallery.props';

import './ImageGallery.css';

const ImageGallery: FC<IProps> = ({images}) => {
  const [currentId, setCurrentId] = useState(0);

  const handlerNext = () => {
    currentId === images.length - 1
    ? setCurrentId(0) 
    : setCurrentId(currentId + 1);
  }

  const handlerPrev = () => {
    currentId === 0
    ? setCurrentId(images.length - 1) 
    : setCurrentId(currentId - 1);
  }

  return (
    <div className='container'>
      <img src={images[currentId]} className='image'/>
      {
        images.length > 1 && 
        <>
          <div className='next button' onClick={handlerNext}/>
          <div className='prev button' onClick={handlerPrev}/>
        </>
      }
    </div>
  );
}

export default ImageGallery
