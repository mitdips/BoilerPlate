import { AxiosPromise } from "axios";
import { apiMovie } from "./api";
import { ProductListResponse } from "@type/redux/slices/product";

export const getMovie = (): AxiosPromise<ProductListResponse> =>
  apiMovie.get("/movie/now_playing");
