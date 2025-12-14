import React, {useRef} from "react";
import {View, Text, Animated, StyleSheet} from "react-native";
import {
  SCREEN_WIDTH,
  CARD_WIDTH,
  SPACING,
  CARD_HEIGHT,
  CARD_BORDER_RADIUS,
  COLORS,
  FONT_SIZES,
} from "./constants";

// Hook לאנימציה
function useCarouselAnimation(scrollX, index) {
  const inputRange = [
    (index - 1) * (CARD_WIDTH + SPACING),
    index * (CARD_WIDTH + SPACING),
    (index + 1) * (CARD_WIDTH + SPACING),
  ];

  return {
    scale: scrollX.interpolate({
      inputRange,
      outputRange: [0.85, 1, 0.85],
      extrapolate: "clamp",
    }),
    translateY: scrollX.interpolate({
      inputRange,
      outputRange: [20, 0, 20],
      extrapolate: "clamp",
    }),
    opacity: scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: "clamp",
    }),
  };
}

// קומפוננטת FlatList אנימטיבית
export default function AnimatedFlatList({data, renderItem}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + SPACING}
      decelerationRate="fast"
      contentContainerStyle={{
        paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2,
      }}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: true,
      })}
      renderItem={({item, index}) => {
      
        const {scale, translateY, opacity} = useCarouselAnimation(
          scrollX,
          index
        );
        return (
          <Animated.View
            style={[
              styles.animatedCard,
              {
                transform: [{scale}, {translateY}],
                opacity,
              },
            ]}
          >
            {renderItem({item, index})}
          </Animated.View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  animatedCard: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING / 2,
  },

  title: {
    color: COLORS.white,
    fontSize: FONT_SIZES.title,
    fontWeight: "bold",
  },
  desc: {
    color: COLORS.white,
    fontSize: FONT_SIZES.description,
    marginTop: 5,
  },
});
