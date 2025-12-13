import React, {useRef} from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function AnimaionsBallResize() {
  const leftValue = useRef(new Animated.Value(0)).current;
  const width = useRef(new Animated.Value(100)).current;
  const height = useRef(new Animated.Value(0)).current;
  const onPress = () => {
    ResizeBall();
    moveBall();
  };
  function ResizeBall() {
    Animated.timing(width, {
      toValue: width._value + 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  function moveBall() {
    Animated.spring(leftValue, {
      toValue: leftValue._value + 50,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Animated.View
          style={[
            {
              width: width,
              height: 100,
              marginBottom: leftValue,
              borderRadius: 100 / 2,
              backgroundColor: "red",
            },
          ]}
        >
          <TouchableOpacity
            style={[
              {
                flex: 1,
                justifyContent: "center",
                paddingHorizontal: 10,
              },
            ]}
            onPress={onPress}
          ></TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
