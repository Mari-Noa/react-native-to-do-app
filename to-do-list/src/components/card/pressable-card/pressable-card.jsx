import React, {useRef, useEffect} from "react";
import {Animated, TouchableWithoutFeedback} from "react-native";
import {Dimensions} from "react-native";
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
} from "../../../style/theme";

export const CARD_WIDTH = 300;
export const CARD_HEIGHT = 200;
export const CARD_BORDER_RADIUS = 16;

export const MAX_CARD_WIDTH = SCREEN_WIDTH * 0.9; // כשהכרטיס לוחץ
export const MAX_CARD_HEIGHT = SCREEN_HEIGHT * 0.8; // כשהכרטיס לוחץ

export default function PressableCard({children}) {
  const widthAnim = useRef(new Animated.Value(CARD_WIDTH)).current;
  const heightAnim = useRef(new Animated.Value(CARD_HEIGHT)).current;

  const onPressIn = () => {
    Animated.parallel([
      Animated.spring(widthAnim, {
        toValue: MAX_CARD_WIDTH,
        useNativeDriver: false,
      }),
      Animated.spring(heightAnim, {
        toValue: MAX_CARD_HEIGHT,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const onPressOut = () => {
    Animated.parallel([
      Animated.spring(widthAnim, {toValue: CARD_WIDTH, useNativeDriver: false}),
      Animated.spring(heightAnim, {
        toValue: CARD_HEIGHT,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={{width: widthAnim, height: heightAnim, alignSelf: "center"}}
      >
        {React.cloneElement(children, {style: {width: "100%", height: "100%"}})}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
