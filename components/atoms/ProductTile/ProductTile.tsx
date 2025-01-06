import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import {
  Container,
  ProductDetails,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./ProductTile.style";
import { ProductTileProps } from "./ProductTile.props";
import { Spacer } from "@atoms/common/common.styles";

const ProductTile = ({ product }: ProductTileProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <Container>
        <ProductImage source={product.image} />
        <ProductDetails>
          <ProductName numberOfLines={2}>{product.productName}</ProductName>
          <Spacer size={10} />
          <ProductPrice numberOfLines={2}>${product.price}</ProductPrice>
        </ProductDetails>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default ProductTile;
