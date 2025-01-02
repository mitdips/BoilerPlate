import React from "react";
import {
  Menu as RNMenu,
  MenuTrigger,
  MenuOptions,
  MenuOption,
} from "react-native-popup-menu";
import { MenuIcon, MenuOptionText } from "./Menu.style";

const Menu = (props: any) => {
  return (
    <RNMenu>
      <MenuTrigger>
        <MenuIcon source={props.icon} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: { width: 100 },
        }}
      >
        {props.options.map((item: any) => {
          return (
            <MenuOption onSelect={item.callback} key={item.id}>
              <MenuOptionText>{item.title}</MenuOptionText>
            </MenuOption>
          );
        })}
      </MenuOptions>
    </RNMenu>
  );
};

export default Menu;
