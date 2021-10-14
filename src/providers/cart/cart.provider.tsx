import { addItemToCart, filterItemFromCart, getCartItemsCount, getCartTotal, removeItemFromCart } from './cart.utils';
import { createContext, useEffect, useState } from 'react';

import { ICartItem } from '../../shared/models';

interface ICartContext {
  hidden: boolean;
  toggleHidden: () => void;
  cartItems: ICartItem[];
  addItem: (item: ICartItem) => void;
  removeItem: (item: ICartItem) => void;
  clearItemFromCart: (item: ICartItem) => void;
  cartItemsCount: number;
  cartTotal: number;
}

export const CartContext = createContext<ICartContext>({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
});

const CartProvider: React.FC = ({ children }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const addItem = (item: ICartItem) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item: ICartItem) => setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = (item: ICartItem) => setCartItems(filterItemFromCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
