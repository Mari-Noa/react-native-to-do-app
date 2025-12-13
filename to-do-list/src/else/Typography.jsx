import React from "react";
import {Text, StyleSheet} from "react-native";
import {
  COLORS,
  SPACING,
  RADIUS,
  FONT_SIZE,
  FONT_WEIGHT,
  MARGINS,
} from "../style/theme";
import {View} from "react-native";

export const Card = ({children, variant = "small_card", ...props}) => (
  <View style={[styles[variant]]} {...props}>
    {children}
  </View>
);

export const Caption = ({
  children,
  style,
  variant = "caption_small",
  ...props
}) => (
  <Text style={[styles[variant], style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  small_card: {
    backgroundColor: COLORS.cardPrimary,
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    marginVertical: MARGINS.sm,
    marginHorizontal: MARGINS.xs,
  },
  caption_small: {
    fontSize: FONT_SIZE.lg,
    fontWeight: FONT_WEIGHT.semibold,
    color: COLORS.textPrimary,
  },
});
