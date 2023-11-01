import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../images/logobaomoi.png")}
          resizeMode="contain"
          style={{ height: 69, width: 254 }}
        ></Image>
      </View>
      <View style={{ flex: 4, justifyContent: "space-around" }}>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="Tên đăng nhập"
            style={{
              height: 50,
              width: 350,
              borderRadius: 10,
              paddingLeft: 10,
              borderWidth: 1,
              color:"#b6bdc3",
              backgroundColor:"#fff"
            }}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="Mật khẩu"
            style={{
              height: 50,
              width: 350,
              borderRadius: 10,
              paddingLeft: 10,
              borderWidth: 1,
              color:"#b6bdc3",
              backgroundColor:"#fff"
            }}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="Nhập lại mật khẩu"
            style={{
              height: 50,
              width: 350,
              borderRadius: 10,
              paddingLeft: 10,
              borderWidth: 1,
              color:"#b6bdc3",
              backgroundColor:"#fff"
            }}
          ></TextInput>
        </View>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="E-mail"
            style={{
              height: 50,
              width: 350,
              borderRadius: 10,
              paddingLeft: 10,
              borderWidth: 1,
              color:"#b6bdc3",
              backgroundColor:"#fff"
            }}
          ></TextInput>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.touchableOpacity}>
          <View
            style={{
              width: 345,
              height: 43,
              borderRadius: 10,
              // overflow: 'hidden',
              // backgroundColor: 'transparent',
              // boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
            }}
          >
            <Text
              style={{
                backgroundColor: "transparent",
                textAlign: "center",
                lineHeight: 40,
                color: "#fff",
                backgroundImage: "linear-gradient(to right, #03b1e9, #036cde)",
              }}
            >
              Đăng ký
            </Text>
          </View>
        </TouchableOpacity>
      </View>
 
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <Text style={{ fontSize: 16, color: "#fff", marginBottom: 10}}>
          Bạn có sẵn sàng để tạo tài khoảng?{" "}
          <TouchableOpacity onPress={()=>{
              navigation.navigate("screen1")
            }}><span style={{color:'#438ff6', fontSize: 16}}
              
              >Đăng nhập</span></TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(to bottom, #2a3a92,#136c8e, #06888b)",
  },
  touchableOpacity: {
    borderRadius: 10,
    height: 45,
    width: 350,
    alignItems: "center",
    // borderWidth: 1,
  },
});
