import './checkout-item.scss';

import { CartContext } from '../../../providers/cart/cart.provider';
import { ICartItem } from '../../../shared/models';
import { useContext } from 'react';

interface CheckoutItemProps {
  item: ICartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
