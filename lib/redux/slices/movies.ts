import { getMoviesAction } from "@redux/actions/movies";
import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { MovieListResponse, MoviesType } from "@type/redux/slices/movies";
export interface MovieState {
  data: MoviesType[] | null;
  error: SerializedError | null;
}

const initialState: MovieState = {
  data: null,
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getMoviesAction.fulfilled,
        (state, action: PayloadAction<MovieListResponse>) => {
          state.data = action.payload.data;
        }
      )
      .addCase(getMoviesAction.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const {} = movieSlice.actions;

export default movieSlice.reducer;
