import { ProductType } from "@type/redux/slices/product";

export type ListData = ProductType[] | null;

export type GridListProps = {
  data: ListData;
  scrollEnabled?: boolean;
};
