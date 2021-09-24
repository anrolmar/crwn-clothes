import React from 'react';
import { SHOP_DATA } from '../constants/shop-data';

class ShowPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    return <div>SHOP PAGE</div>;
  }
}

export default ShowPage;
