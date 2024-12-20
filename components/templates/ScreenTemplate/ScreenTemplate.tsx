import React from "react";
import {
  Container,
  SafeAreaContainer,
  ScreenTemplateView,
} from "./ScreenTemplate.styles";
import { ScreenTemplateProps } from "./ScreenTemplate.props";
import TitleWithButton from "@molecules/TitleWithButton/TitleWithButton";
import MoreMenuButton from "@molecules/MoreMenuButton/MoreMenuButton";
import StatusBar from "@/components/atoms/StatusBar";
import { useAppTheme } from "@/constants/theme";

const ScreenTemplate: React.FC<ScreenTemplateProps> = ({
  children,
  backgroundColor,
  moreVisible,
  title,
  onBackPress,
  statusBarColor,
}) => {
  const { colors } = useAppTheme();
  return (
    <SafeAreaContainer edges={title ? ["top", "left", "right"] : null}>
      <StatusBar
        barStyle={"default"}
        backgroundColor={statusBarColor || colors.welcomeScreenBackground}
      />
      <Container backgroundColor={backgroundColor}>
        <TitleWithButton text={title} onBackPress={onBackPress} />
        {moreVisible && <MoreMenuButton />}
        <ScreenTemplateView>{children}</ScreenTemplateView>
      </Container>
    </SafeAreaContainer>
  );
};

export default ScreenTemplate;
