import React, { useState } from "react";
import { TouchableOpacity, Text, FlatList } from "react-native";
import { StyleSheet, View, TextInput, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const dataDanguocQuanTam = [
  {
    link: "https://halodalat.vn/wp-content/uploads/2020/06/anh-bia-2.jpg",
    name: "Chụp ảnh chiều thu trên đồi đà lạt thơ mộng ",
  },
  {
    link: "https://fantasea.vn/wp-content/uploads/2020/04/%C4%90%E1%BB%93i-%C4%90a-Ph%C3%BA.jpg",
    name: "Cảnh đà lạt vào sáng sớm xinh đẹp",
  },
  {
    link: "https://idalat.vn/blog/wp-content/uploads/sites/2/2020/08/doi-thien-phuc-duc.jpg",
    name: "top địa điểm chụp ảnh đẹp cho cặp đôi",
  },
  {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNHXcbebLb-ZWmwAeSPovZb66_UzwZgS_rc2cJYsMR4EIHKBv4IKerx3V6iG1gI8_hjk&usqp=CAU",
    name: "Cặp đôi từng hứa yêu nhau trọn đời đã chia tay sau khi đi chơi đà lạt",
  },
  {
    link: "https://afamilycdn.com/150157425591193600/2020/6/16/dscf1349-1592277999018846826522.jpg",
    name: "Chân đồi ánh nắng lóe vàng thích hợp chụp ảnh pphong cảnh ",
  },
  {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzfyBzv5Yzu-vlZ8OgFa-sc9LjK9iJKrvDyX_dvORL78NceWrwfBkCGliDE07PCDhmgM&usqp=CAU",
    name: "Đà lạt mùa hạ xinh đẹp cùng cảnh quan thiên nhiên tươi đẹp",
  },
];
const dataNong24h = [
  {
    link: "https://thegioianh.diendandoanhnghiep.vn/wp-content/uploads/2023/03/2-4.jpg",
    name: "Bờ biển thơ mông của VN là tiên cảnh giữa chốn thiên nhiên hiu quạnh  ",
  },
  {
    link: "https://i.pinimg.com/736x/a7/41/35/a741356a49d4e15ddf4231e130dace8d.jpg",
    name: "Bờ biển sau khi đã được dọn sạch rác ở vũng Tàu Việt Nam tươi đẹp",
  },
  {
    link: "https://toquoc.mediacdn.vn/Uploaded/myda/2017_07_17/nhungbaibientrentg/100_WCQJ.jpg",
    name: "Biển xanh cát trắng thích hợp cho các cuộc du lịch dài hạn và không có phố thị sô bồ",
  },
  {
    link: "https://file.vfo.vn/hinh/2016/08/hinh-anh-ve-bien-14.jpg",
    name: "Top những địa điểm du lịch thicha hợp năm nay cho mọi người có thể lựa chọn tùy ý thích của mình",
  },
];
export default function Search() {
  const data = ["Cho bạn", "Nóng", "Mới", "Tổng hợp", "Bóng Đá VN"];
  const [inputText, setInputText] = useState("");
  const [showAll, setShowAll] = useState(false);
  const initialItemsToShow = 3;
  const itemsToShow = showAll ? dataDanguocQuanTam.length : initialItemsToShow;
  const [showAll1, setShowAll1] = useState(false);
  const initialItemsToShow1 = 3;
  const itemsToShow1 = showAll1 ? dataNong24h.length : initialItemsToShow1;

  const handleTextPress = (item) => {
    setInputText(item);
  };
  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled>
      <View
        style={{
          flexDirection: "row",
          height: 40,
          width: "100%",
          // backgroundColor: "red",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Icon
          name="search"
          size={21}
          color="black"
          style={{ position: "absolute", left: 27 }}
        />
        <TextInput
          style={{
            borderRadius: 5,
            paddingLeft: 35,
            height: 30,
            width: 280,
            borderWidth: 0.5,
            borderBlockColor: "rgba(0, 0, 0, 0.42)",
            marginRight: 15,
            color: "rgba(0, 0, 0, 0.42)",
          }}
          placeholder="Search"
          placeholderTextColor="#666"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity>
          <Text
            style={{
              color: "#000",
              fontFamily: "arial",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 700,
              marginRight: 10,
            }}
          >
            Đóng
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 105,
          width: 370,
          marginVertical: 2,
          shadowColor: "#000",
          borderRadius: 2,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        }}
      >
        <Text
          style={{
            height: 20,
            color: "rgba(0, 0, 0, 0.42)",
            fontSize: 13,
            fontStyle: "normal",
            fontWeight: 700,
            marginLeft: 15,
            marginTop: 5,
            // backgroundColor:"green",
          }}
        >
          TÌM NHANH
        </Text>
        <View
          style={{
            alignItems: "center",
            // backgroundColor:"red",
            width: 370,
            height: 65,
            borderRadius: 2,
            flexDirection: "row", // Sắp xếp theo hàng ngang
            flexWrap: "wrap", // Cho phép xuống dòng khi không đủ chỗ
          }}
        >
          {data.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleTextPress(item)}>
              <Text
                key={index}
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  borderRadius: 4,
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderColor: "#CCC",
                  paddingVertical: 2,
                  backgroundColor: "rgba(206, 204, 204, 0.50)",
                  color: "rgba(0, 0, 0, 0.42)",
                  marginHorizontal: 10, // Khoảng cách giữa các chữ
                  fontSize: 14,
                  fontStyle: "normal",
                  fontWeight: "bold",
                  paddingBottom: 3,
                  margin: 6,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View
        style={{
          height: 20,
          width: 350,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            color: "rgba(0, 0, 0, 0.42)",
            fontSize: 13,
            fontStyle: "normal",
            fontWeight: 750,
            marginLeft: 5,
          }}
        >
          Nóng 24H
        </Text>
      </View>
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <ScrollView nestedScrollEnabled>
          <FlatList
            data={dataDanguocQuanTam.slice(0, itemsToShow)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View
                  style={{
                    height: 105,
                    width: 350,
                    backgroundColor: "#FFF",
                    flexDirection: "row",
                    marginTop: 15,
                  }}
                >
                  <Image
                    style={{ height: 90, width: 160, borderRadius: 9 }}
                    source={{ uri: item.link }}
                  />
                  <View
                    style={{
                      height: 90,
                      width: 160,
                      marginLeft: 15,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: 13,
                        fontStyle: "normal",
                        fontWeight: 550,
                      }}
                    >
                      {item.name}
                    </Text>
                    {/* <Image
                      style={{ height: 15, width: 30 }}
                      source={require("../images/Zinglogo.png")}
                    /> */}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            <Text
              style={{
                color: "#767474",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: 500,
                marginTop: 7,
              }}
            >
              {showAll ? "Thu gọn ↑" : "Đọc thêm ↓"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View
        style={{ height: 1, width: "100%", backgroundColor: "#EEECEC" }}
      ></View>
      </ScrollView>
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
