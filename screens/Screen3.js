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
    image: "https://vapa.vn/wp-content/uploads/2022/12/anh-canh-dep-001-1.jpg",
    name: "Tuấn Kiệt đẹp trai nhất TG",
  },
  {
    image:
      "https://cdn3.ivivu.com/2014/12/chum-anh-tuyet-dep-ve-khung-canh-than-tien-cua-du-lich-nauy-iVIVU.com-1.jpg",
    name: "Tuấn Kiệt cưới hoa hậu",
  },
];
export default function Screen3() {
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
            <View style={{ height: 95,width: 350,alignItems:"center",marginTop: 12}}>
              <View style={{ height: 88,width: 350,flexDirection: "row",margin: 5,}}>
                <Image
                  source={{ uri: item.image }}
                  style={{ height: 86, width: 157, borderRadius: 9 }}
                />
                <View style={{height: 86,width: 180,justifyContent: "space-between",marginLeft:8}}>
                  <Text style={{marginTop:10,color: "#000",fontFamily: "Inter",fontSize: 14, fontStyle: "normal", fontWeight: 500,}} >
                    {item.name}
                  </Text>
                  <Image
                    source={require("../images/Zinglogo.png")}
                    style={{ height: 16, width: 31 }}
                    resizeMode="contain"
                  />
                </View>
                
              </View>
              <View style={{height: 1, width: 350, backgroundColor:"rgba(0, 0, 0, 0.10)",marginVertical:3 }}></View>
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
