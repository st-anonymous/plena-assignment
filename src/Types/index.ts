import {TextStyle} from 'react-native';

export type AvailableItemType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
  isFavorite?: boolean;
};

export type FavoriteItemsType = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  isFavorite: boolean;
};

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
  itemCount: number;
};

export type HeaderProps = {
  text?: string;
  textVariant?: 'h3' | 'b1';
  backButton?: boolean;
  cartIcon?: boolean;
  isHome?: boolean;
};

export type ItemCardTypes = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  isFavorite: boolean;
};

export type TypoType = {
  text: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'b1' | 'b2' | 'l' | 'btn1' | 'btn2';
  styleProps?: TextStyle;
  color?: TextStyle['color'];
};

export type ItemsContainerType = {
  items: Array<AvailableItemType> | Array<FavoriteItemsType>;
};
