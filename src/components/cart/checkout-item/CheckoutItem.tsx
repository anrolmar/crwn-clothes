import {
  CheckoutContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from './checkout.styles';
import { addItem, clearItemFromCart, removeItem } from '../../../redux/cart/cart.action-creators';

import { CartAction } from '../../../redux/cart/cart.actions';
import { Dispatch } from 'redux';
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
    <CheckoutContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(item)}>&#10005;</RemoveButtonContainer>
    </CheckoutContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartAction>) => ({
  addItem: (item: ICartItem) => dispatch(addItem(item)),
  clearItem: (item: ICartItem) => dispatch(clearItemFromCart(item)),
  removeItem: (item: ICartItem) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
