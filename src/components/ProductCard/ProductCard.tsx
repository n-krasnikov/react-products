import { type FC } from 'react';

import { ImageGallery } from '../ImageGallery';

import { IProps } from './ProductCard.props';

import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard: FC<IProps> = ({ 
  title,
  description,
  price,
  brand,
  discountPercentage,
  images,
  id,
}) => {

  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className='product-card'>
        <ImageGallery images={images}/>
        <h3 className='title' onClick={goToProduct}>{title}</h3>
        <p className='description'>{description}</p>
        <div className='price-block'> 
            <span>{price}$</span>
            <span>SALE {discountPercentage} %</span>
        </div>
        <p className='brand'>{brand}</p>
    </div>
  );
};

export default ProductCard;
