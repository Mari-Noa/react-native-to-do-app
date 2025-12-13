import React, {useRef} from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";

const {width} = Dimensions.get("window");
const CARD_WIDTH = width * 0.7;
const SPACING = 20;

export default function AnimatedFlatList({data}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
        contentContainerStyle={{paddingHorizontal: (width - CARD_WIDTH) / 2}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true}
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * (CARD_WIDTH + SPACING),
            index * (CARD_WIDTH + SPACING),
            (index + 1) * (CARD_WIDTH + SPACING),
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
            extrapolate: "clamp",
          });

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [20, 0, 20],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              style={{
                transform: [{scale}, {translateY}],
                opacity,
                marginHorizontal: SPACING / 2,
                width: CARD_WIDTH,
              }}
            >
              <View style={styles.card}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 200,
    borderRadius: 16,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {color: "#fff", fontSize: 20, fontWeight: "bold"},
});
