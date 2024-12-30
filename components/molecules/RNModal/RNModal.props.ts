import React from "react";

export interface ModalProps {
  visible: boolean;
  title: string;
  description: string;
  image: any;
  button: string;
  onPress: () => void;
}
