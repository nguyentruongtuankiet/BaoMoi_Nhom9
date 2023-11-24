import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  FlatList,
  ImageBackground,
} from "react-native";
import { StyleSheet, View, TextInput, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
export default function utilities({ navigation }) {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.container}>
        <View
          style={{
            marginTop: 10,
            justifyContent: "flex-start",
            height: 55,
            width: 360,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              name="arrowleft"
              size={32}
              color="rgb(51,55,64)"
              style={{ position: "absolute", top: 7 }}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: "rgba(0, 0, 0, 0.59)",
              fontSize: 33,
              fontStyle: "normal",
              fontWeight: 700,
              marginLeft: 40,
            }}
          >
            Tiện ích
          </Text>
          <Image
            source={require("../images/avata.png")}
            style={{
              height: 46,
              width: 47,
              borderRadius: 50,
              position: "absolute",
              top: 5,
              right: 15,
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            color: "rgba(0, 0, 0, 0.33)",
            height: 31,
            width: 360,
            fontSize: 27,
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          Xổ số
        </Text>
        <ImageBackground
          source={require("../images/backgroupXoSo.png")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 140,
            width: 326,
            borderRadius: 20,
            marginTop: 20,
          }}
          resizeMode="contain"
        >
          <View
            style={{
              justifyContent: "space-around",
              height: 130,
              width: 320,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../images/ketquaSoXo.png")}
              style={{ height: 130, width: 64, marginLeft: 20 }}
              resizeMode="contain"
            />
            <View
              style={{
                height: 130,
                width: 230,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginTop: 10,
                  color: "#260D44",
                  textAlign: "center",
                  fontSize: 22,
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                KẾT QUẢ XỔ SỐ
              </Text>
              <Text
                style={{
                  color: "#260D44",
                  textAlign: "center",
                  fontSize: 17,
                  fontStyle: "normal",
                  fontWeight: 700,
                }}
              >
                TRỰC TIẾP HÀNG NGÀY{" "}
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    marginBottom: 20,
                    marginTop: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 36,
                    width: 96,
                    borderRadius: 99,
                    backgroundColor: "#671308",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFF",
                      fontSize: 14,
                      fontStyle: "normal",
                      fontWeight: 700,
                    }}
                  >
                    Xem ngay
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <Text
          style={{
            marginTop: 10,
            color: "rgba(0, 0, 0, 0.33)",
            height: 31,
            width: 360,
            fontSize: 27,
            fontStyle: "normal",
            fontWeight: 700,
          }}
        >
          Lịch Việt
        </Text>
        <ImageBackground
          source={require("../images/backgroupLichViet.png")}
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
            height: 330,
            width: 320,
            borderRadius: 20,
            marginTop: 5,
          }}
          resizeMode="cover"
        >
          <View
            style={{
              height: 270,
              width: 320,
              flexDirection: "row",
            }}
          >
            <View style={{ width: 160, height: 290 }}>
              <Image
                source={require("../images/Ellipse 4.png")}
                style={{
                  width: 96,
                  height: 88,
                  marginTop: 15,
                  zIndex: 1,
                  marginLeft: 5,
                }}
              />
              <View
                style={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 95,
                  width: 66,
                  backgroundColor: "#6699E5",
                  position: "absolute",
                  marginLeft: 20,
                  top: 90,
                  zIndex: 0,
                }}
              >
                <Text
                  style={{
                    marginTop: 5,
                    color: "#000",
                    fontSize: 12,
                    fontStyle: "normal",
                    fontWeight: 400,
                  }}
                >
                  Thứ Tư
                </Text>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 25,
                    fontStyle: "normal",
                    fontWeight: 400,
                  }}
                >
                  9
                </Text>
                <Text
                  style={{
                    color: "#000",
                    fontSize: 12,
                    fontStyle: "normal",
                    fontWeight: 400,
                    marginHorizontal: 10,
                  }}
                >
                  TH.11 - 2022
                </Text>
              </View>

              <View
                style={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 100,
                  width: 66,
                  top: 80,
                  zIndex: 0,
                  marginLeft: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#FFF",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: 400,
                  }}
                >
                  Ngày 16 tháng 10 (Đ), năm Nhâm Dần
                </Text>
              </View>
            </View>
            <View
              style={{
                width: 160,
                height: 270,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 15,
                  fontStyle: "normal",
                  fontWeight: 400,
                }}
              >
                Không có sự kiện
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: 17,
              height: 35,
              width: 320,
              flexDirection: "row",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  height: 34,
                  width: 110,
                  borderRadius: 50,
                  backgroundColor: "#A1C4FD",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginLeft: 10,
                  marginBottom: 7,
                }}
              >
                <Image
                  source={require("../images/editday.png")}
                  style={{ height: 23, width: 23, marginRight: 7 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "#000",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: 700,
                  }}
                >
                  Đổi ngày
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  height: 34,
                  width: 150,
                  borderRadius: 50,
                  backgroundColor: "#A1C4FD",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  marginRight: 10,
                  marginBottom: 7,
                }}
              >
                <Image
                  source={require("../images/calendar.png")}
                  style={{ height: 23, width: 23, marginRight: 7 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    color: "#000",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: 700,
                  }}
                >
                  Xem lịch tháng
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
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
