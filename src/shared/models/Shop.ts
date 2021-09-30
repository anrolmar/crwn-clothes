export interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: ICartItem[];
}

export interface ICartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}
