import { CartItemContainer, CartItemDetailsContainer, CartItemImageContainer } from './cart-item.styles';

import { ICartItem } from '../../../shared/models';

interface CartItemProps {
  item: ICartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImageContainer src={imageUrl} alt="item" />
      <CartItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
