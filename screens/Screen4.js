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
    link: "https://inkythuatso.com/uploads/thumbnails/800/2023/02/tao-dang-chup-anh-di-dao-trong-rung-3-22-09-46-55.jpg",
    name: "Chụp ảnh chiều thu trên đồi đà lạt thơ mộng ",
  },
  {
    link: "https://nghethuat.vn/wp-content/uploads/2022/11/pasted-image-0-1.png",
    name: "Cặp đôi từng hứa yêu nhau trọn đời đã chia tay sau khi đi chơi đà lạt",
  },
];

export default function Screen4() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ height: 300, width: 330, backgroundColor:"#FFF",marginTop:5 }}>
            <Image
              style={{ height: 170, width: 330, borderRadius: 21  }}
              source={{ uri: item.link }}
            />
            <Image
              style={{ height: 30, width: 100, marginTop:5 }}
              source={require("../images/logoKenh.png")}
              resizeMode="contain"
            />
            <Text style={{width:330,color:"#000",fontFamily:"Inter",fontSize:19,fontStyle:"normal",fontWeight:600}}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#FFF"
  },
});

{
  /* <Video
        source={{
          uri: "https://youtu.be/-5q5mZbe3V8?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVM-5q5mZbe3V8",
        }} // Thay đổi URL video tại đây
        style={styles.video}
        controls={true} // Hiển thị nút điều khiển
        resizeMode="contain" // Tùy chỉnh chế độ hiển thị video
      /> */
}
