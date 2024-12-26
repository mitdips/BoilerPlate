import { View, Text, Modal, Image } from "react-native";
import React from "react";
import { ModalProps } from "./RNModal.props";
import { BlurView } from "@react-native-community/blur";
import {
  AbsoluteView,
  CenteredView,
  Description,
  GoToLoginBtn,
  ModalContent,
  ModalView,
  SuccessIcon,
  Title,
} from "./RNModal.styles";
import images from "../../../assets/index";
import { ButtonSubmit } from "@organisms/LoginForm/LoginForm.styles";
import { useAppTheme } from "@constants/theme";
const RNModal: React.FC<ModalProps> = ({
  visible,
  image,
  title,
  description,
  button,
  onPress,
}) => {
  const { colors } = useAppTheme();
  return (
    <AbsoluteView transparent visible={visible} animationType="fade">
      <CenteredView>
        <ModalView>
          <ModalContent>
            <SuccessIcon source={image} />
            <Title>{title}</Title>
            <Description>{description}</Description>

            <GoToLoginBtn onPress={onPress} textColor={colors.white}>
              {button}
            </GoToLoginBtn>
          </ModalContent>
        </ModalView>
      </CenteredView>
    </AbsoluteView>
  );
};

export default RNModal;
