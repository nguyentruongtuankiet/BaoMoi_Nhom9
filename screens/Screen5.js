import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function Screen5({navigation}) {
  const [datalist1, setDataList1] = useState([]);
  const [datalist2, setDataList2] = useState([]);
  const [datalist, setDataList] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const initialItemsToShow = 3;
  const itemsToShow = showAll ? datalist.length : initialItemsToShow;
  const [showAll1, setShowAll1] = useState(false);
  const initialItemsToShow1 = 3;
  const itemsToShow1 = showAll1 ? datalist.length : initialItemsToShow1;

  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((response) => response.json())
      .then((json) => {
        setDataList(json);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    const nongItems = datalist.filter((item) => item.type === "nong");
    const shuffledData = datalist.sort(() => Math.random() - 0.5);
    const half = Math.ceil(shuffledData.length / 2);
    const firstHalf = shuffledData.slice(0, half);
    setDataList1(firstHalf);
    setDataList2(nongItems);
  }, [datalist]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundImage: "linear-gradient(to right, #5eb4ba, #155380)",
          alignItems: "center",
        }}
      >
        <Text style={styles.fontVideo}>Xu hướng</Text>
      </View>
      <View style={styles.listvideo}>
        <ScrollView nestedScrollEnabled>
          {" "}
          <View
            style={{
              height: 20,
              width: 350,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Image
              source={require("../images/trend.png")}
              style={{ height: 18, width: 18, marginRight: 10, marginLeft: 10 }}
            />
            <Text
              style={{
                color: "#26ACAF",
                fontFamily: "Inter",
                fontSize: 10,
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              ĐANG ĐƯỢC QUAN TÂM
            </Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <ScrollView nestedScrollEnabled>
              <FlatList
                data={datalist1.slice(0, itemsToShow)}
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
                        height: 105,
                        width: 350,
                        backgroundColor: "#FFF",
                        flexDirection: "row",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        style={{ height: 90, width: 160, borderRadius: 9 }}
                        source={{ uri: item.path }}
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
                        <Image
                          style={{ height: 15, width: 30 }}
                          source={require("../images/Zinglogo.png")}
                        />
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
          <View
            style={{
              height: 20,
              width: 350,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Image
              source={require("../images/trend.png")}
              style={{ height: 18, width: 18, marginRight: 10, marginLeft: 10 }}
            />
            <Text
              style={{
                color: "#26ACAF",
                fontFamily: "Inter",
                fontSize: 10,
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              Nóng 24H
            </Text>
          </View>
          <View style={{ alignItems: "center", marginBottom: 30 }}>
            <ScrollView nestedScrollEnabled>
              <FlatList
                data={datalist2.slice(0, itemsToShow1)}
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
                        height: 105,
                        width: 350,
                        backgroundColor: "#FFF",
                        flexDirection: "row",
                        marginTop: 5,
                      }}
                    >
                      <Image
                        style={{ height: 90, width: 160, borderRadius: 9 }}
                        source={{ uri: item.path }}
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
                        <Image
                          style={{ height: 15, width: 30 }}
                          source={require("../images/Zinglogo.png")}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity onPress={() => setShowAll1(!showAll1)}>
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
                  {showAll1 ? "Thu gọn ↑" : "Đọc thêm ↓"}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listvideo: {
    flex: 9,
    alignItems: "center",
  },
  fontVideo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
