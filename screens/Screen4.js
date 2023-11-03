import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FlatList } from "react-native";


const data = [
  {
    id: "1",
    link: "https://youtu.be/niPkap1ozUA",
    name: "2/11 Tuấn Kiệt được khen là người đẹp nhất server trái đất",
  },
  {
    id: "2",
    link: "https://youtu.be/jXwR4_58uy0",
    name: "Sốc Tuân Kiệt tiêu diệt yêu quái giải cứu công chúa",
  },
];

export default function Screen4() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 750,
          width: 360,
          alignItems: "center",
        }}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                height: 300,
                width: 330,
                alignItems: "center",
                marginTop: 12,
                backgroundColor: "red",
              }}
            >
             
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
