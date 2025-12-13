import React, {useRef} from "react";
import {
  View,
  Text,
  Animated,
  Dimensions,
  StyleSheet,
  FlatList,
} from "react-native";
import AnimationsPenResponder from "../../components/animations/AnimationsPenResponder";
import AnimatedFlatList from "../../components/list/AnimatedFlatList";
import TaskCard from "../../components/card/task-card/task-card";
import PressableCard from "../../components/card/pressable-card/pressable-card.jsx";

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
  return (
    <View>
      <View>
        <Text>HIHIIHIHIHI</Text>
      </View>
      <AnimatedFlatList
        data={DATA}
        renderItem={({item}) => (
          <PressableCard>
            <TaskCard>{item.title}</TaskCard>
          </PressableCard>
        )}
      ></AnimatedFlatList>
      <AnimationsPenResponder></AnimationsPenResponder>
    </View>
  );
}
