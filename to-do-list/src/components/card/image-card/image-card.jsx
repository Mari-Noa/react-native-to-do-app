import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import {Card} from "../card-typography";
import React from "react";
import {
  COLORS,
  SPACING,
  RADIUS,
  FONT_SIZE,
  FONT_WEIGHT,
  MARGINS,
  HEIGHT,
  ALIGN,
} from "../../../style/theme";
import {Asset} from "expo-asset";

const {width: SCREEN_WIDTH} = Dimensions.get("window");

const Item = ({content, uri}) => (
  <View style={styles.content}>
    <Image source={{uri: uri}} resizeMode="contain" style={styles.image} />
  </View>
);

export default function ImageCard({content, uri, style}) {
  console.log(uri);
  //const localImage = Asset.fromModule(uri).uri;

  return (
    <View>
      <Card variant="medium_card" style={[styles.task_card_pallet, style]}>
        <Item content={content} uri={uri}></Item>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  task_card_pallet: {
    backgroundColor: COLORS.textPrimary,
    padding: SCREEN_WIDTH > 600 ? 24 : 12, // יותר שוליים ב-iPad
    overflow: "hidden", // מוודא שהתמונה נשארת בתוך הכרטיס
  },

  content: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});
