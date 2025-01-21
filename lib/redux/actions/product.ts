import { getProducts } from "@api/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse } from "@type/api/api";
import { ProductListParams } from "@type/redux/slices/product";
import { withToastForError } from "@utils/thunk";

export const getProductsAction = createAsyncThunk(
  "product/getProductsAction",
  withToastForError<ProductListParams, ApiResponse>(
    async () => await getProducts(),
  ),
);
