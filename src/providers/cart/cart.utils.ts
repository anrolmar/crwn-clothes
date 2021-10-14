import { ICartItem } from '../../shared/models';

export const addItemToCart = (cartItems: ICartItem[], cartItemToAdd: ICartItem): ICartItem[] => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity! + 1 } : cartItem,
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems: ICartItem[], cartItemToRemove: ICartItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItemToRemove.quantity! - 1 } : cartItem,
  );
};

export const filterItemFromCart = (cartItems: ICartItem[], item: ICartItem) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const getCartItemsCount = (cartItems: ICartItem[]): number => {
  return cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity!, 0);
};

export const getCartTotal = (cartItems: ICartItem[]): number => {
  return cartItems.reduce((accumulatedQuantity, item) => accumulatedQuantity + item.quantity! * item.price, 0);
};
