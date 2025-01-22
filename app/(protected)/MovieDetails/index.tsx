import React from "react";
import { router } from "expo-router";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import {
  MovieImage,
  MovieOverview,
  MovieText,
  MovieTextView,
  MovieTitle,
} from "./Movies.style";
import { useAppTheme } from "@constants/theme";
import { ScrollView } from "react-native-gesture-handler";
import { useSearchParams } from "expo-router/build/hooks";
const MovieDetails = () => {
  const { colors } = useAppTheme();
  const movie = useSearchParams();
  const movieData = JSON.parse(movie.get("movie"));
  console.log("movieData: ", movieData?.title);
  return (
    <ScreenTemplate>
      <TitleWithButton text="Movie Details" onBackPress={() => router.back()} />
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          flex: 1,
          backgroundColor: colors.white,
        }}
      >
        <MovieImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieData?.poster_path}`,
          }}
          resizeMode="cover"
        />
        <MovieTextView>
          <MovieText>{movieData.title}</MovieText>
        </MovieTextView>
        <MovieTitle>Release Date: {movieData?.release_date}</MovieTitle>
        <MovieOverview
          style={{ fontSize: 16, textAlign: "justify", color: "#333" }}
        >
          {movieData?.overview}
        </MovieOverview>
      </ScrollView>
    </ScreenTemplate>
  );
};

export default MovieDetails;
