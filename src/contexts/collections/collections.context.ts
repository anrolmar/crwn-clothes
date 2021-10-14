import { ICollection } from '../../shared/models';
import SHOP_DATA from '../../constants/shop-data';
import { createContext } from 'react';

const CollectionsContext = createContext<ICollection>(SHOP_DATA);

export default CollectionsContext;
