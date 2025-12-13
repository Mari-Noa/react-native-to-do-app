import * as React from "react";
import {useState, useRef} from "react";
import {FlatList, StatusBar, StyleSheet, View} from "react-native";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import Task from "../../components/task/TaskItem";
import {Text, ScrollView, Animated, Dimensions} from "react-native";

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
  return <View></View>;
}
