/* eslint-disable import/no-unresolved */
import { AppTheme } from "@constants/theme";
import { ThemedStyledInterface } from "styled-components/index";
import baseStyled from "styled-components/native";

export const styled = baseStyled as unknown as ThemedStyledInterface<AppTheme>;
