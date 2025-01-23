import { getMovie } from "@api/movie";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse } from "@type/api/api";
import { MovieListResponse } from "@type/redux/slices/movies";
import { withToastForError } from "@utils/thunk";

export const getMoviesAction = createAsyncThunk(
  "movie/getMoviesAction",
  withToastForError<MovieListResponse, ApiResponse>(
    async () => await getMovie()
  )
);
