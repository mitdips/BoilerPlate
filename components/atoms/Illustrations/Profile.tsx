import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ProfileIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      stroke={color || "#CECECE"}
      d="M5 20v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </Svg>
);
export default ProfileIcon;
