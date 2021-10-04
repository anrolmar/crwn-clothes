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
import { connect } from 'react-redux';

export interface CollectionItemProps {
  item: ICartItem;
  addItem?: (item: ICartItem) => void;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
  const { name, price } = item;

  return (
    <CollectionIemContainer className="collection-item">
      <ImageContainer item={item} className="image"></ImageContainer>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <ButtonContainer inverted onClick={() => addItem!(item)}>
        Add to cart
      </ButtonContainer>
    </CollectionIemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartAction>) => ({
  addItem: (item: ICartItem) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
