import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, FlatList } from "react-native";
import { StyleSheet, View, TextInput, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Search({navigation}) {
  const [originalData, setOriginalData] = useState([]);
  const [datalist, setDataList] = useState([]);
  const data = ["Cho bạn", "Nóng", "Mới", "Tổng hợp", "Bóng Đá VN"];
  const [inputText, setInputText] = useState("");

  const [showAll, setShowAll] = useState(false);
  const initialItemsToShow = 3;
  const itemsToShow = showAll ? datalist.length : initialItemsToShow;

  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((response) => response.json())
      .then((json) => {
        setDataList(json);
        setOriginalData(json);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleSearch = () => {
    if (inputText === "") {
      setDataList(originalData);
      return;
    }
    const filteredData = originalData.filter((item) =>
      item.name.toLowerCase().includes(inputText.toLowerCase())
    );
    setDataList(filteredData);
  };

  const handleSearchSwift = () => {
    let filteredData = originalData;
    let newSearchSwift = "";
    if (inputText === "Cho bạn") {
      newSearchSwift = "";
    } else if (inputText === "Nóng") {
      newSearchSwift = "nong";
    } else if (inputText === "Mới") {
      newSearchSwift = "moi";
    } else if (inputText === "Tổng hợp") {
      newSearchSwift = "tonghop";
    } else if (inputText === "Bóng Đá VN") {
      newSearchSwift = "sport";
    }
  
    if (newSearchSwift !== "") {
      filteredData = originalData.filter((item) =>
        item.type && typeof item.type === 'string' && item.type.toLowerCase().includes(newSearchSwift.toLowerCase())
      );
    }
  
    setDataList(filteredData);
  };

  const handleTextPress = (item) => {
    setInputText(item); // Hiển thị chữ trong TextInput khi một mục được chọ // Áp dụng bộ lọc tìm kiếm
  };
  useEffect(() => {
    handleSearchSwift();
  }, [inputText]);
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
            onChangeText={(text) => {
              setInputText(text);
              handleSearch(); // Gọi hàm xử lý tìm kiếm khi dữ liệu nhập thay đổi
            }}
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
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handleTextPress(item);
                }}
              >
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
              data={datalist.slice(0, itemsToShow)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("screendocbao", {
                      articleId: item.id,
                      name: item.name,
                      content: item.content,
                      image: item.image,
                    })
                  }
                >
                  <View
                    style={{
                      height: 95,
                      width: 350,
                      alignItems: "center",
                      marginTop: 12,
                    }}
                  >
                    <View
                      style={{
                        height: 88,
                        width: 350,
                        flexDirection: "row",
                        margin: 5,
                      }}
                    >
                      <Image
                        source={{ uri: item.path }}
                        style={{ height: 86, width: 157, borderRadius: 9 }}
                      />
                      <View
                        style={{
                          height: 86,
                          width: 180,
                          justifyContent: "space-between",
                          marginLeft: 8,
                        }}
                      >
                        <Text
                          style={{
                            marginTop: 10,
                            color: "#000",
                            fontFamily: "Inter",
                            fontSize: 14,
                            fontStyle: "normal",
                            fontWeight: 500,
                          }}
                        >
                          {item.name}
                        </Text>
                        <Image
                          source={require("../images/Zinglogo.png")}
                          style={{ height: 16, width: 31 }}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        height: 1,
                        width: 350,
                        backgroundColor: "rgba(0, 0, 0, 0.10)",
                        marginVertical: 3,
                      }}
                    ></View>
                  </View>
                </TouchableOpacity>
              )}
            ></FlatList>
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
