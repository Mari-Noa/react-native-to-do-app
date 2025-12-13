import React, {useRef} from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  PanResponder,
} from "react-native";

export default function AnimationsPenResponder() {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    })
  ).current;

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            transform: [{translateX: pan.x}, {translateY: pan.y}],
            borderRadius: 100 / 2,
            backgroundColor: "red",
          },
        ]}
        {...panResponder.panHandlers}
      ></Animated.View>
    </View>
  );
}
