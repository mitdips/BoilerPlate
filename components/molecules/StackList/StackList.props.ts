import { ProductType } from "@type/redux/slices/product";

export type ListData = ProductType[] | null;

export type StackListProps = {
  data: ListData;
  scrollEnabled?: boolean;
};
