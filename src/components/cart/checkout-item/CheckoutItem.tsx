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
import { useDispatch } from 'react-redux';

interface CheckoutItemProps {
  item: ICartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const dispatch = useDispatch<Dispatch<CartAction>>();

  return (
    <CheckoutContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</RemoveButtonContainer>
    </CheckoutContainer>
  );
};

export default CheckoutItem;
