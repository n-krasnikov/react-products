import { useState, type FC, useEffect } from 'react';

import { IProps } from './ImageGallery.props';

import './ImageGallery.css';

const ImageGallery: FC<IProps> = ({images}) => {
  const [activeId, setActiveId] = useState(0);

  const handlerNext = () => {
    console.log(images[activeId]);
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
    const timerId = setTimeout(()=>handlerNext(), 3000);
    return () => clearTimeout(timerId)
  }, [activeId])

  // console.log(images)

  return (
    <div className='container'>
      <img src={images[activeId]} className='image'/>
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