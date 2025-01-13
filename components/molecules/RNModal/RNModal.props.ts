import React from "react";

export interface ModalProps {
  visible: boolean;
  title: string;
  description: string;
  image: any;
  button1: string;
  onPress1: () => void;
  button2?: string;
  onPress2?: () => void;
  loading1?: boolean;
  loading2: boolean;
}
