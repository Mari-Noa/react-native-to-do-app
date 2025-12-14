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
import ImageCard from "../../components/card/image-card/image-card";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {Asset} from "expo-asset";

//uri: Asset.fromModule(require()).uri;
const DATA = [
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    content: "Second Item",
    uri: Asset.fromModule(require("../../assets/images/IMG_4640.jpg")).uri,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    content: "Third Item",
    uri: Asset.fromModule(require("../../assets/images/IMG_4639.jpg")).uri,
  },
  {
    id: "1",
    content: "First Item",
    uri: Asset.fromModule(require("../../assets/images/IMG_4519.jpg")).uri,
  },
  {
    id: "2",
    content: "Second Item",
    uri: Asset.fromModule(require("../../assets/images/IMG_4346.jpg")).uri,
  },
  {
    id: "3",
    content: "Third Item",
    uri: Asset.fromModule(require("../../assets/images/IMG_3995.jpg")).uri,
  },
  {
    id: "4",
    content: "First Item",
    uri: Asset.fromModule(require("../../assets/images/IMG_3833.jpg")).uri,
  },
  {
    id: "5",
    content: "Second Item",
    uri: Asset.fromModule(require("../../assets/images/IMG_0755.jpg")).uri,
  },
  {
    id: "6",
    content: "Third Item",
    uri: Asset.fromModule(require("../../assets/images/IMG_3385.jpg")).uri,
  },
];

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
            <ImageCard content={item.content} uri={item.uri}></ImageCard>
          </PressableCard>
        )}
      ></AnimatedFlatList>
      <AnimationsPenResponder></AnimationsPenResponder>
    </View>
  );
}
