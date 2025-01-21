import { ApiResponse } from "@type/api/api";

type RatingType = {
  rate: number;
  count: number;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
};

export interface ProductListResponse extends ApiResponse {
  data: ProductType[];
}

export type ProductListParams = {
  search?: string;
};
