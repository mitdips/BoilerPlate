import * as React from "react";
import Svg, { Mask, Rect, G, Path, SvgProps } from "react-native-svg";
const SearchIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={24} fill="none" height={24} viewBox="0 0 30 30" {...props}>
    <Path
      fill={color || "#969A99"}
      d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.947 9.947 0 0 0 23 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z"
    />
  </Svg>
);
export default SearchIcon;
