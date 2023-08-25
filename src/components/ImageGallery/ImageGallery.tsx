import { useState, type FC, useEffect } from 'react';

import { IProps } from './ImageGallery.props';

import './ImageGallery.css';

const ImageGallery: FC<IProps> = ({images}) => {
  const [activeId, setActiveId] = useState(0);
  const [isHvover, setIsHover] = useState(false);

  const handlerNext = () => {
    activeId === images.length - 1
    ? setActiveId(0) 
    : setActiveId(activeId + 1);
  }

  // const handlerPrev = () => {
  //   activeId === 0
  //   ? setactiveId(images.length - 1) 
  //   : setactiveId(activeId - 1);
  // }

  const handleClick = (id) => {
    setActiveId(id)
  }

  useEffect(() => {
    let timerId = null;
    if (isHvover) {
      timerId = setTimeout(()=>handlerNext(), 1500);
    }
    return () => clearTimeout(timerId)
  }, [isHvover, activeId])

  // console.log(images)

  return (
    <div className='container' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <img src={images[activeId]} className='image' alt='Loading...'/>
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
}

export default ImageGallery
