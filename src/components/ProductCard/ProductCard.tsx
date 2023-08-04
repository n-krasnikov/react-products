import { type FC } from 'react';

import { IProps } from './ProductCard.props';

import './ProductCard.css';

const ProductCard: FC<IProps> = ({ 
  title,
  description,
  price,
  brand,
  discountPercentage,
}) => {

  return (
    <div className='product-card'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='price-block'> 
            <span>{price}$</span>
            <span>SALE {discountPercentage} %</span>
        </div>
        <p>{brand}</p>
    </div>
  );
}

export default ProductCard