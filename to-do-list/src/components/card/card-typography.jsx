import React from "react";
import {Text, StyleSheet} from "react-native";
import {
  COLORS,
  SPACING,
  RADIUS,
  FONT_SIZE,
  FONT_WEIGHT,
  MARGINS,
  HEIGHT,
  ALIGN,
  WIDTH,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
} from "../../style/theme";
import {View} from "react-native";

export const Card = ({children, variant = "medium_card", style, ...props}) => (
  <View style={[styles[variant], style]} {...props}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  medium_card: {
    height: HEIGHT.lg,
    width: WIDTH.xxs,
    borderRadius: RADIUS.md,
    justifyContent: ALIGN.center,
    alignItems: ALIGN.center,
  },
  caption_small: {
    fontSize: FONT_SIZE.lg,
    fontWeight: FONT_WEIGHT.semibold,
    color: COLORS.textPrimary,
  },
});
