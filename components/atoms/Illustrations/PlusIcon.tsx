import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PlusIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={50} height={50} {...props}>
    <Path
      fill={color || "#CECECE"}
      d="M25 2C12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23S37.683 2 25 2zm12 24H26v11h-2V26H13v-2h11V13h2v11h11v2z"
    />
  </Svg>
);
export default PlusIcon;
