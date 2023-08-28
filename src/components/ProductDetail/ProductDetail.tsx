import { type FC } from 'react';

import { IProps } from './ProductDetail.props';

import { ImagesWithMin } from '../ImagesWithMin';

import './ProductDetail.css';
import { useCart } from '../../helpers';


const ProductDetail: FC<IProps> = ({
    images,
    title,
    description,
    brand,
    rating,
    stock,
    price,
    discountPercentage,
    id,
}) => {
    const [
      products,
      addToCart,
      total,
      setTotal
    ] = useCart((state) => [
      state.products, 
      state.addProduct,
      state.total,
      state.setTotal
    ]);

    const handlerAddToCart = () => {
      addToCart(id);
      setTotal(total + price);
    };

    return (
        <div className='container'>
        <ImagesWithMin images={images} />
        <div className='product'>
          <h2 className='product-title'>{title}</h2>
          <div className='product-info'>
            <div className='product-desc'>
              {description}
            </div>
            <div className='product-detail'>
              <span>Brand: {brand}</span>
              <span>Rating: {rating}</span>
              <span>In stock now: {stock}</span>
            </div>
          </div>
          <div className='product-price'> 
            <span className='price'>{price} $</span> 
            <span className='sale'>{discountPercentage} %</span>
          </div>
            {products.find(product=> product.id === id)
              ?<span className='in-cart cart-btn'>Now in cart</span>
              :<span onClick={handlerAddToCart} className='add-to-cart cart-btn'>Add to cart</span>
            }
          </div>
      </div>
    );
};

export default ProductDetail;
