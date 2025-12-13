import * as React from "react";
import {useState, useRef} from "react";
import {FlatList, StatusBar, StyleSheet, View} from "react-native";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import Task from "../../components/task/TaskItem";
import {Text, ScrollView, Animated, Dimensions} from "react-native";

const {height} = Dimensions.get("window");
const CARD_HEIGHT = 70;
const SPACING = 10;
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "First Item",
  },
  {
    id: "5",
    title: "Second Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "8",
    title: "First Item",
  },
  {
    id: "9",
    title: "Second Item",
  },
  {
    id: "10",
    title: "Third Item",
  },
];

function renderItem({item}) {
  return <Task id={item.title}></Task>;
}

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const CENTER_OFFSET = height / 2 - CARD_HEIGHT / 2;

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToInterval={CARD_HEIGHT + SPACING} // <-- כאן עושה את ה-“קפיצה”
      decelerationRate="fast" // <-- מעבר “קשיח”
      contentContainerStyle={{paddingVertical: CENTER_OFFSET}}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        useNativeDriver: true,
      })}
    >
      {DATA.map((_, i) => {
        const input = [
          (i - 1) * (CARD_HEIGHT + SPACING),
          i * (CARD_HEIGHT + SPACING),
          (i + 1) * (CARD_HEIGHT + SPACING),
        ];

        const scale = scrollY.interpolate({
          inputRange: input,
          outputRange: [0.9, 1, 0.9],
          extrapolate: "clamp",
        });

        const translateX = scrollY.interpolate({
          inputRange: input,
          outputRange: [20, 0, -20],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i}
            style={{
              transform: [{scale}, {translateX}],
              marginVertical: SPACING / 2,
            }}
          >
            <View style={styles.card}>
              <Text style={{color: "#fff"}}>Card {i + 1}</Text>
            </View>
          </Animated.View>
        );
      })}
    </Animated.ScrollView>
  );
}

/*
  <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Details")}>
        Go to Details
      </Button> 
*/

const styles = StyleSheet.create({
  card: {
    height: CARD_HEIGHT,
    width: "80%",
    borderRadius: 12,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
  },
});
