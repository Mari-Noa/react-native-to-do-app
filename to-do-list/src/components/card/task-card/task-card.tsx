import {View, Text, StyleSheet} from "react-native";
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
const Item = ({content}) => (
  <View>
    <Text>{content}</Text>
  </View>
);

export default function TaskCard({content}) {
  return (
    <View>
      <Card variant="medium_card" style={styles.task_card_pallet}>
        <Item content={content}></Item>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  task_card_pallet: {
    backgroundColor: COLORS.textPrimary,
  },
});
