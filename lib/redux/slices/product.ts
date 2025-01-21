import { getProductsAction } from "@redux/actions/product";
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { ProductListResponse, ProductType } from "@type/redux/slices/product";
export interface ProductState {
  data: ProductType[] | null;
  error: SerializedError | null;
}

const initialState: ProductState = {
  data: null,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getProductsAction.fulfilled,
        (state, action: PayloadAction<ProductListResponse>) => {
          state.data = action.payload.data;
        },
      )
      .addCase(getProductsAction.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
