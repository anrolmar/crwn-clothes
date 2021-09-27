import React from 'react';
import CollectionPreview from '../components/collection-preview/CollectionPreview';
import { SHOP_DATA } from '../constants';

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  renderCollections() {
    const { collections } = this.state;

    return collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));
  }

  render() {
    return <div className="shop-page">{this.renderCollections()}</div>;
  }
}

export default ShopPage;
