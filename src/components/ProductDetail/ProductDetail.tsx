import { type FC } from 'react';

import { useBasket } from '../../helpers';
import { IProduct } from '../../vite-env';

import { ImagesWithMin } from '../ImagesWithMin';

import './ProductDetail.css';


const ProductDetail: FC<IProduct> = (product: IProduct) => {
    const [products, addToCart, removeFromCart] = useBasket((state) => [state.products, state.addProduct, state.removeProduct ]);

    const handlerAdd = () => {
      addToCart({...product});
    };

    const handlerRemove = () => {
      removeFromCart(product.id);
    };

    return (
        <div className='container'>
        <ImagesWithMin images={product.images} />
        <div className='product'>
          <h2 className='product-title'>{product.title}</h2>
          <div className='product-info'>
            <div className='product-desc'>
              {product.description}
            </div>
            <div className='product-detail'>
              <span>Brand: {product.brand}</span>
              <span>Rating: {product.rating}</span>
              <span>In stock now: {product.stock}</span>
            </div>
          </div>
          <div className='product-price'> 
            <span className='price'>{product.price} $</span> 
            <span className='sale'>{product.discountPercentage} %</span>
          </div>
            {products.find(p => p.id === product.id)
              ?<span onClick={handlerRemove} className='in-cart cart-btn'>Remove from cart</span>
              :<span onClick={handlerAdd} className='add-to-cart cart-btn'>Add to cart</span>
            }
          </div>
      </div>
    );
};

export default ProductDetail;
