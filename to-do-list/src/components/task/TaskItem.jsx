import {Text, View} from "react-native";
import {Card, Caption} from "../Typography";

const Item = ({id}) => <Caption>{id}</Caption>;

export default function Task({id}) {
  return (
    <View>
      <Card variant="small_card">
        <Item id={id}></Item>
      </Card>
    </View>
  );
}
