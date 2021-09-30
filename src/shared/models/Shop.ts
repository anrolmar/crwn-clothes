export interface ICollectionItem {
  id: number;
  title: string;
  routeName: string;
  items: ICartItem[];
}
export interface ICollection {
  [key: string]: ICollectionItem;
}

export interface ICartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}
