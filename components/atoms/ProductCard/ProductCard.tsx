import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import {
  Container,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./ProductCard.style";
import { ProductCardProps } from "./ProductCard.props";

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <Container>
        <ProductImage source={{ uri: product.image }} />
        <ProductDetails>
          <ProductName numberOfLines={2}>{product.title}</ProductName>
          <ProductPrice numberOfLines={2}>${product.price}</ProductPrice>
        </ProductDetails>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
