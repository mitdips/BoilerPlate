import React from "react";
import { ModalProps } from "./RNModal.props";
import {
  AbsoluteView,
  BtnConainer,
  CenteredView,
  Description,
  GoToLoginBtn,
  GoToLoginBtn1,
  GoToLoginBtn2,
  ModalContent,
  ModalView,
  SuccessIcon,
  Title,
} from "./RNModal.styles";
import { useAppTheme } from "@constants/theme";
const RNModal: React.FC<ModalProps> = ({
  visible,
  image,
  title,
  description,
  button1,
  onPress1,
  button2,
  onPress2,
  loading1,
  loading2,
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
            {button1 && button2 ? (
              <BtnConainer>
                <GoToLoginBtn2
                  onPress={onPress1}
                  textColor={colors.main}
                  loading={loading1}
                >
                  {button1}
                </GoToLoginBtn2>
                <GoToLoginBtn1
                  onPress={onPress2}
                  textColor={colors.white}
                  loading={loading2}
                >
                  {button2}
                </GoToLoginBtn1>
              </BtnConainer>
            ) : (
              <GoToLoginBtn
                onPress={onPress1}
                textColor={colors.white}
                loading={loading2}
              >
                {button1}
              </GoToLoginBtn>
            )}
          </ModalContent>
        </ModalView>
      </CenteredView>
    </AbsoluteView>
  );
};

export default RNModal;
