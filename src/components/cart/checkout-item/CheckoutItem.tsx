import './checkout-item.scss';

import { addItem, clearItemFromCart, removeItem } from '../../../redux/cart/cart.action-creators';

import { CartAction } from '../../../redux/cart/cart.actions';
import { Dispatch } from 'react';
import { ICartItem } from '../../../shared/models';
import { connect } from 'react-redux';

interface CheckoutItemProps {
  item: ICartItem;
  addItem: (item: ICartItem) => void;
  clearItem: (item: ICartItem) => void;
  removeItem: (item: ICartItem) => void;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ item, addItem, clearItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = item;

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
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartAction>) => ({
  addItem: (item: ICartItem) => dispatch(addItem(item)),
  clearItem: (item: ICartItem) => dispatch(clearItemFromCart(item)),
  removeItem: (item: ICartItem) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
