import './collection-item.scss';

import { Button } from '../../../shared/components/forms';
import { CartContext } from '../../../providers/cart/cart.provider';
import { ICartItem } from '../../../shared/models/Shop';
import { useContext } from 'react';

interface CollectionItemProps {
  item: ICartItem;
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

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

export default CollectionItem;
