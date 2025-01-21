import { ProductType } from "@type/redux/slices/product";

export type ListData = ProductType[] | null;

export type ListProps = {
  data: ListData;
  headerTitle: string;
  hasMenu: boolean;
};
