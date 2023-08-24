import { useState, type FC } from 'react';

import { IProps } from './ImagesWithMin.props';

import './ImagesWithMin.css';

const ImagesWithMin: FC<IProps> = ({ images }) => {
    const [activeId, setActiveId] = useState(0);
    
    return(
        <div className='images'>
        <img src={images[activeId]} className='image-big'/>
        {images.length > 1 && 
          <div className='images-min'>
            {
              images.map(
                (image, index) => 
                  <img 
                    className={(index === activeId)? 'active' : ''} 
                    src={image}
                    onClick={() => setActiveId(index)}
                    key={image}
                  />
                )
            }
          </div>}
      </div>
    )
}

export default ImagesWithMin;