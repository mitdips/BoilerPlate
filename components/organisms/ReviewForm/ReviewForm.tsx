import React, { useEffect, useState } from "react";
import { ButtonSubmit, Container, RatingView } from "./ReviewForm.style";
import { Field, useFormState } from "react-final-form";
import FieldTextInput from "@molecules/FieldTextInput/FieldTextInput";
import {
  composeValidators,
  emailValidator,
  minLengthValidator,
  requiredValidator,
} from "@utils/formValidators";
import { Spacer } from "@atoms/common/common.styles";
import { ReviewFormProps } from "./ReviewForm.props";
import StarRating from "react-native-star-rating-widget";

const ReviewForm: React.FC<ReviewFormProps> = ({ loading, form }) => {
  const [rating, setRating] = useState(5);
  const { valid } = useFormState();
  useEffect(() => {
    form.initialize({ rating: 5 });
  }, []);
  useEffect(() => {
    form.change("rating", rating);
  }, [rating]);
  return (
    <Container>
      <Field
        name="name"
        placeholder={"Name"}
        component={FieldTextInput}
        validate={composeValidators((value) =>
          requiredValidator("Name", value)
        )}
      />
      <Spacer size={16} />
      <Field
        name="email"
        placeholder={"Email Address"}
        component={FieldTextInput}
        keyboardType="email-address"
        validate={composeValidators(
          (value) => requiredValidator("Email address", value),
          (value) => minLengthValidator("Email address", value),
          emailValidator
        )}
      />
      <Spacer size={16} />
      <Field
        name="review"
        placeholder={"Review"}
        component={FieldTextInput}
        validate={composeValidators((value) =>
          requiredValidator("Review", value)
        )}
        multiline
        numberOfLines={5}
      />
      <Spacer size={16} />
      <RatingView>
        <StarRating rating={rating} onChange={setRating} />
      </RatingView>
      <Spacer size={16} />
      <ButtonSubmit
        onPress={!loading && form.submit}
        loading={loading}
        variant={valid}
        disabled={loading}
      >
        Submit
      </ButtonSubmit>
    </Container>
  );
};

export default ReviewForm;
