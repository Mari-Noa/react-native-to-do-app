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
const SPACING = 5;

function Card({title}) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

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

function AnimatedCard({item, index, scrollX}) {
  const {scale, translateY, opacity} = useCarouselAnimation(scrollX, index);

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
      <Card title={item.title} />
    </Animated.View>
  );
}

export default function AnimatedFlatList({data}) {
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
        paddingHorizontal: (width - CARD_WIDTH) / 2,
      }}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: true,
      })}
      renderItem={({item, index}) => (
        <AnimatedCard item={item} index={index} scrollX={scrollX} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  animatedCard: {
    width: CARD_WIDTH,
    marginHorizontal: SPACING / 2,
  },

  card: {
    height: 200,
    borderRadius: 16,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
