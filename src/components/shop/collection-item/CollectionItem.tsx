import './collection-item.scss';

import { Button } from '../../../shared/components/forms';
import { CartAction } from '../../../redux/cart/cart.actions';
import { Dispatch } from 'redux';
import { ICartItem } from '../../../shared/models/Shop';
import { addItem } from '../../../redux/cart/cart.action-creators';
import { connect } from 'react-redux';

interface CollectionItemProps {
  item: ICartItem;
  addItem: (item: ICartItem) => void;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartAction>) => ({
  addItem: (item: ICartItem) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
