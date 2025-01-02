export type DataItem = {
  productId: number;
  image: string;
  productName: string;
  price: number;
};

export type ListData = DataItem[];

export type GridListProps = {
  data: ListData;
  scrollEnabled?: boolean;
};
