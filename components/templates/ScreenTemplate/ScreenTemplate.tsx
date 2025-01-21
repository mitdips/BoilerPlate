import React from "react";
import {
  Container,
  ImageView,
  IntroText,
  SafeAreaContainer,
  ScreenTemplateView,
} from "./ScreenTemplate.styles";
import { ScreenTemplateProps } from "./ScreenTemplate.props";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import { useAppTheme } from "@constants/theme";
import StatusBar from "@atoms/StatusBar";
import { Spacer } from "@atoms/common/common.styles";

const ScreenTemplate: React.FC<ScreenTemplateProps> = ({
  children,
  backgroundColor,
  title,
  onBackPress,
  statusBarColor,
  isHeader,
  img,
  pagetitle,
}) => {
  const { colors } = useAppTheme();
  return (
    <SafeAreaContainer edges={title ? ["top", "left", "right"] : null}>
      <StatusBar
        style={"auto"}
        backgroundColor={statusBarColor || colors.white}
      />
      <Container backgroundColor={backgroundColor}>
        {!!isHeader && (
          <TitleWithButton text={title} onBackPress={onBackPress} />
        )}
        <ScreenTemplateView>
          {img && (
            <>
              <Spacer size={10} />
              <ImageView source={img} />
              <Spacer size={10} />
            </>
          )}
          {pagetitle && (
            <>
              <IntroText>{pagetitle}</IntroText>
              <Spacer size={10} />
            </>
          )}
          {children}
        </ScreenTemplateView>
      </Container>
    </SafeAreaContainer>
  );
};

export default ScreenTemplate;
