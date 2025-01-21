import { ProductType } from "@type/redux/slices/product";

export type ListData = ProductType[] | null;

export type SliderListProps = {
  data: ListData;
};
