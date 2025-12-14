import {Dimensions} from "react-native";

export const COLORS = {
  // Brand
  primary: "#FFB56B",
  primaryDark: "#F29F4B",
  accent: "#F45B69",
  accentSoft: "#FFD6DC",

  // Backgrounds
  background: "#FFF3D9",
  surface: "#FFFFFF",
  surfaceSoft: "#FFF7EB",

  // Card background
  cardPrimary: "#e8b376ff",
  cardSecondary: "#FFE2B8",

  // Accent
  accent: "#F45B69",
  accentSoft: "#FFD1D6",

  // Text
  textPrimary: "#2B2B2B",
  textSecondary: "#7A6F63",
  textMuted: "#9CA3AF",

  // Icons
  icon: "#2B2B2B",
  iconMuted: "#9C8F82",

  // Surface
  surface: "#FFFFFF",
  divider: "#F1D6A8",

  // UI
  border: "#0c0b09ff",
  divider: "#EFE3CF",

  // Status
  success: "#2FBF71",
  warning: "#F4A261",
  error: "#E63946",
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};
export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 20,
  xl: 28,
  pill: 999,
};
export const FONT_SIZE = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  title: 22,
};

export const FONT_WEIGHT = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
};

export const MARGINS = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const HEIGHT = {
  none: 0,
  xs: 50,
  sm: 100,
  md: 150,
  lg: 200,
  xl: 300,
  xxl: 400,
};

export const ALIGN = {
  center: "center",
};

export const WIDTH = {
  none: 0,
  xxs: 0.7,
  xs: 50,
  sm: 100,
  md: 150,
  lg: 200,
  xl: 300,
  xxl: 400,
};

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
