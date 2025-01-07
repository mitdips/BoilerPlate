import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AngleRight = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props} viewBox="0 0 16 16">
    <Path
      fill={color || "#969A99"}
      d="M4.38 12.19 8.57 8 4.38 3.81l1.53-1.52L11.62 8l-5.71 5.71-1.53-1.52z"
    />
  </Svg>
);
export default AngleRight;
