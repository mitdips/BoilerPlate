export type DataItem = {
  productId: number;
  image: string;
  productName: string;
  price: number;
};

export type ProductCardProps = {
  product: DataItem;
};
