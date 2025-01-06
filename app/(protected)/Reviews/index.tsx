import React, { useEffect, useState } from "react";
import ScreenTemplate from "@templates/ScreenTemplate/ScreenTemplate";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import { router } from "expo-router";
import {
  ActionButton,
  AddReviewButton,
  Controls,
  Review,
  ReviewDetails,
  ReviewerName,
  ReviewMessage,
  ReviewsContainer,
} from "./Reviews.style";
import { FireStoreDB } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { FlatList } from "react-native";
import images from "../../../assets";
import PlusIcon from "@atoms/Illustrations/PlusIcon";
import { useAppTheme } from "@constants/theme";

const Reviews = () => {
  const { colors } = useAppTheme();
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<ArrayLike<any>>();
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
  const actions = [
    {
      text: "Accessibility",
      icon: images.settings,
      name: "bt_accessibility",
      position: 2,
    },
  ];
  return (
    <ScreenTemplate>
      <TitleWithButton text="Reviews" onBackPress={router.back} />
      {/* <Controls>
        <AddReviewButton onPress={handleAddReview}>Add Review</AddReviewButton>
      </Controls> */}
      <ReviewsContainer>
        <FlatList
          data={reviews}
          renderItem={({ item, index }) => {
            return (
              <Review key={index}>
                <ReviewDetails>
                  <ReviewerName numberOfLines={1}>{item.name}</ReviewerName>
                  <StarRatingDisplay rating={item.rating} starSize={24} />
                </ReviewDetails>
                <ReviewMessage>{item.review}</ReviewMessage>
              </Review>
            );
          }}
        />
      </ReviewsContainer>
      <ActionButton>
        <PlusIcon onPress={handleAddReview} color={colors.black} />
      </ActionButton>
    </ScreenTemplate>
  );
};

export default Reviews;
