import { useState, type FC, useEffect } from 'react';

import { IProps } from './ImageGallery.props';

import './ImageGallery.css';

const ImageGallery: FC<IProps> = ({images}) => {
  const [activeId, setActiveId] = useState(0);
  const [isHvover, setIsHover] = useState(false);

  const handleClick = (id: number) => setActiveId(id);
  const handleHover = () => setIsHover(true);
  const handleLeave = () => setIsHover(false);

  const handlerNext = () => {
    activeId === images.length - 1
    ? setActiveId(0) 
    : setActiveId(activeId + 1);
  };

  useEffect(() => {
    const timerId = isHvover
      ? setTimeout(()=>handlerNext(), 1500)
      : 0;
    return () => clearTimeout(timerId);
  }, [isHvover, activeId]);

  return (
    <div 
      className='container' 
      onMouseEnter={handleHover} 
      onMouseLeave={handleLeave}
    >
      <img src={images[activeId]} className='image' />
      {
        images.length > 1 && 
        <>
          <div className='dots'>
            {images.map((_, ind) => (
              <div className={(ind === activeId) ? 'active' : '' } onClick={() => handleClick(ind)} key={ind} />
            ))}
          </div>
        </>
      }
    </div>
  );
};

export default ImageGallery;
