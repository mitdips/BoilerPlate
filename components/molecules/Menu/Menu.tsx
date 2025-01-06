import React from "react";
import {
  Menu as RNMenu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from "react-native-popup-menu";
import { MenuIcon, MenuOptionText } from "./Menu.style";
import { MenuProps, optionsData } from "./Menu.props";
import { ViewStyle } from "react-native";

const MenyOpetionStyles: ViewStyle = {
  justifyContent: "flex-start",
  alignItems: "flex-start",
};

const Menu: React.FC<MenuProps> = (props: MenuProps) => {
  return (
    <RNMenu>
      <MenuTrigger>
        <MenuIcon source={props.icon} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: { width: "20%" },
        }}
      >
        {props.options.map((item: optionsData) => {
          return (
            <MenuOption
              onSelect={item.callback}
              key={item.id}
              style={MenyOpetionStyles}
            >
              <MenuOptionText>{item.title}</MenuOptionText>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </RNMenu>
  );
};

export default Menu;
