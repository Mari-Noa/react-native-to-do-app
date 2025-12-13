import React, {useRef} from "react";
import {Animated, TouchableWithoutFeedback} from "react-native";
import {Dimensions} from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const CARD_WIDTH = SCREEN_WIDTH * 0.7;
export const CARD_HEIGHT = 200;
export const CARD_BORDER_RADIUS = 16;
export const SPACING = 5;

export const MAX_CARD_WIDTH = SCREEN_WIDTH * 0.9; // כשהכרטיס לוחץ
export const MAX_CARD_HEIGHT = SCREEN_HEIGHT * 0.8; // כשהכרטיס לוחץ

export const COLORS = {
  primary: "#3498db",
  white: "#fff",
};

export const FONT_SIZES = {
  title: 20,
  description: 14,
};

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
