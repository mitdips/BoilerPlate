import React, { useEffect, useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import { router } from "expo-router";
import {
  ActionButton,
  ApplyButton,
  ApplyText,
  ButtonView,
  ClearButton,
  ClearText,
  FilterBtn,
  FilterName,
  FilterView,
  NavView,
  NavViewContainer,
  Review,
  ReviewDate,
  ReviewDetails,
  ReviewerName,
  ReviewMessage,
  ReviewsContainer,
} from "./Reviews.style";
import { FireStoreDB } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import {
  FlatList,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import PlusIcon from "@atoms/Illustrations/PlusIcon";
import { useAppTheme } from "@constants/theme";
import moment from "moment";
import { FilterModal } from "@molecules/FilterModal/FilterModal";

const Reviews = () => {
  const { colors } = useAppTheme();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<any>();
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("date_desc");
  const [sortOption, setSortOption] = useState("date_desc");

  const fetchReviews = async () => {
    setLoading(true);
    const reviewsCollectionRef = collection(FireStoreDB, "reviews");
    const querySnapshot = await getDocs(reviewsCollectionRef);
    const fetchedReviews = querySnapshot.docs.flatMap(
      (doc) => doc.data().reviewMessages?.map((item: any) => item) || [],
    );
    setReviews(fetchedReviews);
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleAddReview = () => router.navigate("/(protected)/AddReview");

  const applyFilters = (res: any) => {
    let sortedReviews = [...reviews];
    switch (res) {
      case "rating_asc":
        sortedReviews.sort((a, b) => a.rating - b.rating);
        break;
      case "rating_desc":
        sortedReviews.sort((a, b) => b.rating - a.rating);
        break;
      case "date_asc":
        sortedReviews.sort(
          (a, b) =>
            toDate(a.timestamp).getTime() - toDate(b.timestamp).getTime(),
        );
        break;
      case "date_desc":
        sortedReviews.sort(
          (a, b) =>
            toDate(b.timestamp).getTime() - toDate(a.timestamp).getTime(),
        );
        break;
    }
    setReviews(sortedReviews);
    setSortOption(res);
    setFilterModalVisible(false);
  };

  const clearFilters = () => {
    setSelectedFilter("date_desc");
    setSortOption("date_desc");
    setFilterModalVisible(false);
    applyFilters("date_desc");
  };

  const toDate = (timestamp: { seconds: number; nanoseconds: number }) => {
    return new Date(timestamp.seconds * 1000);
  };
  return (
    <ScreenTemplate>
      <NavViewContainer>
        <TitleWithButton text="Reviews" onBackPress={router.back} />
        <NavView onPress={() => setFilterModalVisible(true)}>
          <ReviewerName>⋮</ReviewerName>
        </NavView>
      </NavViewContainer>
      <ReviewsContainer>
        <FlatList
          data={reviews}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item, index }) => {
            return (
              <Review key={index}>
                <ReviewDetails>
                  <ReviewerName numberOfLines={1}>{item.name}</ReviewerName>
                  <StarRatingDisplay rating={item.rating} starSize={24} />
                </ReviewDetails>
                <ReviewMessage>{item.review}</ReviewMessage>
                <ReviewDate>
                  {moment(toDate(item.timestamp)).format("DD MMM YYYY")}
                </ReviewDate>
              </Review>
            );
          }}
        />
      </ReviewsContainer>
      <ActionButton>
        <PlusIcon onPress={handleAddReview} color={colors.main} />
      </ActionButton>

      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
        onApply={(res) => applyFilters(res)}
        onClear={clearFilters}
        selectedFilter={selectedFilter}
        filters={[
          { label: "Rating (Low to High)", value: "rating_asc" },
          { label: "Rating (High to Low)", value: "rating_desc" },
          { label: "Date (Oldest First)", value: "date_asc" },
          { label: "Date (Newest First)", value: "date_desc" },
        ]}
      />
    </ScreenTemplate>
  );
};

export default Reviews;
