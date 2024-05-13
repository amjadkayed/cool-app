import { createContext, ReactNode } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { defaultTheme } from "../themes/theme";

interface ThemeContextProps {
  theme: DefaultTheme;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme: defaultTheme }}>
      <StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
