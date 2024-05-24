import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      rootBackground: string;
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
        textColorHover: string;
        textSize: string;
      };
      footer: {
        backgroundColor: string;
        textColor: string;
        textSize: string;
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
    rootBackground: "#0A090B",
    background: "#ffffff",
    text: "#212529",
    success: "#28a745",
    info: "#17a2b8",
    warning: "#ffc107",
    danger: "#dc3545",
  },
  layout: {
    Navbar: {
      backgroundColor: "#3c3c3c",
      textColor: "#ffffff",
      textColorHover: "#6c757d",
      textSize: "18px",
    },
    footer: {
      backgroundColor: "#3c3c3c",
      textColor: "#ffffff",
      textSize: "18px",
    },
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
