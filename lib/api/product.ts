import { AxiosPromise } from "axios";
import { api } from "./api";
import { ProductListResponse } from "@type/redux/slices/product";

export const getProducts = (): AxiosPromise<ProductListResponse> =>
  api.get("/products");
