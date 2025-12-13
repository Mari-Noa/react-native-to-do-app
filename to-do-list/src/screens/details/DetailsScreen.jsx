import React from "react";
import {View, Text, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function DetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
