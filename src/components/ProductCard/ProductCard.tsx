import { type FC } from 'react';

import { ImageGallery } from '../ImageGallery';

import { IProduct } from '../../vite-env';

import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard: FC<IProduct> = (product: IProduct) => {

  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className='product-card'>
        <ImageGallery images={product.images}/>
        <h3 className='title' onClick={goToProduct}>{product.title}</h3>
        <p className='description'>{product.description}</p>
        <div className='price-block'> 
            <span>{product.price}$</span>
            <span>SALE {product.discountPercentage} %</span>
        </div>
        <p className='brand'>{product.brand}</p>
    </div>
  );
};

export default ProductCard;
