import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PlusIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={48} height={48} fill="none" {...props} viewBox="0 0 24 24">
    <Path
      fill={color ? color : "#B5E7FF"}
      d="M0 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4 7h5V4h2v5h5v2h-5v5H9v-5H4z"
    />
  </Svg>
);
export default PlusIcon;
