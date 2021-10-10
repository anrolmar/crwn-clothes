import {
  ButtonContainer,
  CollectionFooterContainer,
  CollectionIemContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

import { CartAction } from '../../../redux/cart/cart.actions';
import { Dispatch } from 'redux';
import { ICartItem } from '../../../shared/models/Shop';
import { addItem } from '../../../redux/cart/cart.action-creators';
import { useDispatch } from 'react-redux';

export interface CollectionItemProps {
  item: ICartItem;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
  const { name, price } = item;
  const dispatch = useDispatch<Dispatch<CartAction>>();

  return (
    <CollectionIemContainer className="collection-item">
      <ImageContainer item={item} className="image"></ImageContainer>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <ButtonContainer inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </ButtonContainer>
    </CollectionIemContainer>
  );
};

export default CollectionItem;
