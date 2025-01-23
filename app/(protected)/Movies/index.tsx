import React, { useCallback, useEffect, useState } from "react";
import { router } from "expo-router";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import { ActivityIndicator, FlatList } from "react-native";
import {
  RenderImage,
  RenderItemView,
  RenderReleaseText,
  RenderText,
  ViewContainer,
} from "./Movies.style";
import { useAppTheme } from "@constants/theme";
import { useFocusEffect } from "@react-navigation/native";
const Movies = () => {
  const { colors } = useAppTheme();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (pageNumber: any) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjJjOTFhZDNhYTY1Mzc1MWI0NjQ0MzM0Zjg3NmYyMCIsIm5iZiI6MTczNzE4ODg5OS45Niwic3ViIjoiNjc4YjY2MjM2OGUwZDg3MzYzNmRjZDM0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1KTn9V-WHcChYqBFam5lBqt4dm3Dzm6IxJseFaqrQUo",
      },
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`,
        options
      );
      console.log("response:-----> ", response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setLoading(false);
      setIsLoadingMore(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  useFocusEffect(
    useCallback(() => {
      if (movies.length === 0) {
        setLoading(true);
        fetchMovies(1);
      }
    }, [movies])
  );

  const loadMoreMovies = () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (!isLoadingMore) return null;
    return (
      <ActivityIndicator
        size="large"
        color={colors.main}
        style={{ marginVertical: 20 }}
      />
    );
  };

  const renderMovieItem = ({ item }: any) => (
    <RenderItemView
      onPress={() =>
        router.push({
          pathname: "/(protected)/MovieDetails",
          params: {
            movie: JSON.stringify(item),
          },
        })
      }
    >
      <RenderImage
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        resizeMode="cover"
      />
      <RenderText numberOfLines={1}>{item.title}</RenderText>
      <RenderReleaseText>Release: {item.release_date}</RenderReleaseText>
    </RenderItemView>
  );

  return (
    <ScreenTemplate>
      <TitleWithButton text="Latest Movies" onBackPress={() => router.back()} />
      <ViewContainer>
        {loading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <FlatList
            data={movies}
            renderItem={renderMovieItem}
            keyExtractor={(item: any) => item.id.toString()}
            numColumns={2}
            onEndReached={loadMoreMovies}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          />
        )}
      </ViewContainer>
    </ScreenTemplate>
  );
};

export default Movies;
