import React, { useEffect, useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import { router } from "expo-router";
import {
  ActionButton,
  FilterBtn,
  FilterName,
  FilterView,
  NavView,
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
} from "react-native";
import PlusIcon from "@atoms/Illustrations/PlusIcon";
import { useAppTheme } from "@constants/theme";
import moment from "moment";
const Reviews = () => {
  const { colors } = useAppTheme();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<ArrayLike<any>>();
  console.log("reviews: ", reviews);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [sortOption, setSortOption] = useState("date_desc");

  console.log("reviews: ", reviews);
  const fetchReviews = async () => {
    setLoading(true);
    const reviewsCollectionRef = collection(FireStoreDB, "reviews");
    const querySnapshot = await getDocs(reviewsCollectionRef);
    setReviews(
      querySnapshot.docs.flatMap(
        (doc) => doc.data().reviewMessages?.map((item: any) => item) || []
      )
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleAddReview = () => router.navigate("/(protected)/AddReview");

  const handleSort = (option: React.SetStateAction<string>) => {
    let sortedReviews = [...reviews];
    switch (option) {
      case "rating_asc":
        sortedReviews.sort((a, b) => a.rating - b.rating);
        break;
      case "rating_desc":
        sortedReviews.sort((a, b) => b.rating - a.rating);
        break;
      case "date_asc":
        sortedReviews.sort(
          (a, b) =>
            toDate(a.timestamp).getTime() - toDate(b.timestamp).getTime()
        );
        break;
      case "date_desc":
        sortedReviews.sort(
          (a, b) =>
            toDate(b.timestamp).getTime() - toDate(a.timestamp).getTime()
        );
        break;
    }
    setReviews(sortedReviews);
    setSortOption(option);
    setFilterModalVisible(false);
  };
  const toDate = (timestamp: { seconds: number; nanoseconds: number }) => {
    return new Date(timestamp.seconds * 1000);
  };
  return (
    <ScreenTemplate>
      <TitleWithButton text="Reviews" onBackPress={router.back} />
      <NavView onPress={() => setFilterModalVisible(true)}>
        <ReviewerName>...</ReviewerName>
      </NavView>
      <ReviewsContainer>
        <FlatList
          data={reviews}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginVertical: 15 }}
          renderItem={({ item, index }) => {
            console.log("item: ", item?.timestamp);
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
        <PlusIcon onPress={handleAddReview} color={colors.black} />
      </ActionButton>

      <Modal
        transparent={true}
        animationType="slide"
        visible={filterModalVisible}
        onRequestClose={() => setFilterModalVisible(false)}
      >
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onPress={() => setFilterModalVisible(false)}
        />
        <FilterView>
          <ReviewerName>Sort By</ReviewerName>
          <FilterBtn onPress={() => handleSort("rating_asc")}>
            <FilterName>Rating (Low to High)</FilterName>
          </FilterBtn>
          <FilterBtn onPress={() => handleSort("rating_desc")}>
            <FilterName>Rating (High to Low)</FilterName>
          </FilterBtn>
          <FilterBtn onPress={() => handleSort("date_asc")}>
            <FilterName>Date (Oldest First)</FilterName>
          </FilterBtn>
          <FilterBtn onPress={() => handleSort("date_desc")}>
            <FilterName>Date (Newest First)</FilterName>
          </FilterBtn>
        </FilterView>
      </Modal>
    </ScreenTemplate>
  );
};

export default Reviews;
