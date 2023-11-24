import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

export default function Screen3({ route, navigation }) {
  const userData = route.params;
  console.log("dữ liệu" + userData);
  const [data, setData] = useState([]);
  const tabName = route.params?.tabName ?? "";
  console.log(tabName);
  useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((response) => response.json())
      .then((responseData) => {
        const filteredData =
          tabName === "Cho bạn"
            ? responseData
            : responseData.filter((item) => item.type === tabName);
        setData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [tabName]);

  // Rest of your code

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
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
        </View>
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
