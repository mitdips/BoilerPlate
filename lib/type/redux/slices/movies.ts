import { ApiResponse } from "@type/api/api";


export type MoviesType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export interface MovieListResponse extends ApiResponse {
  data: MoviesType[];
}

export type MovieListParams = {
  search?: string;
};
