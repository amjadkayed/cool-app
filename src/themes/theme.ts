import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    layout: {
      Navbar: {
        backgroundColor: string;
        textColor: string;
        textSize: string;
      };
      footer: {
        backgroundColor: string;
      };
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    background: "#ffffff",
    text: "#212529",
    success: "#28a745",
    info: "#17a2b8",
    warning: "#ffc107",
    danger: "#dc3545",
  },
  layout: {
    Navbar: {
      backgroundColor: "#007bff",
      textColor: "#ffffff",
      textSize: "18px",
    },
    footer: { backgroundColor: "#007bff" },
  },
  fontSizes: {
    small: "0.8rem",
    medium: "1rem",
    large: "1.2rem",
    extraLarge: "1.5rem",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
};
