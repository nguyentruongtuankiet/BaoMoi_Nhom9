import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Screen1({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = React.useState([])
  React.useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then((x)=> x.json())
    .then((data) => {setData(data)})
}, [])
var handleLogin = () => {
  const account = data.find((item) => item.username === username && item.password === password);
  if (account) {
    navigation.navigate("screen3");
  } else {
    window.alert("Invalid email or password");
  }
};
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../images/logobaomoi.png")}
          resizeMode="contain"
          style={{ height: 69, width: 254 }}
        ></Image>
      </View>
      <View style={{ flex: 3, justifyContent: "space-around" }}>
        <View style={{ alignItems: "center" }}>
          <TextInput
            placeholder="Tên đăng nhập"
            style={{
              height: 50,
              width: 350,
              borderRadius: 10,
              paddingLeft: 10,
              borderWidth: 1,
              marginTop: 20,
              color: "#b6bdc3",
              backgroundColor: "#fff",
            }}
            onChangeText={(text) => setUsername(text)}
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
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          {error && (
            <Text
              style={{
                color: "red",
                textAlign: "center",
                fontSize: 15,
                marginBottom: 10,
              }}
            >
              Vui lòng nhập đúng thông tin
            </Text>
          )}
        </View>
        <Text
          style={{
            textAlign: "right",
            color: "#fff",
            fontSize: 13,
            paddingRight: 20,
          }}
        >
          Quên mật khẩu?
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => {
            handleLogin();
          }}
        >
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
              Đăng nhập
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 14, textAlign: "center" }}>Tiếp tục với</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Image
            source={require("../images/google.png")}
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
          ></Image>
          <Image
            source={require("../images/apple.png")}
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
          ></Image>
          <Image
            source={require("../images/facebook.png")}
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
          ></Image>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 16, color: "#fff" }}>
          Bạn chưa là thành viên?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("screen2");
            }}
          >
            <span style={{ color: "#438ff6", fontSize: 16 }}>
              {" "}
              Hãy đăng ký!
            </span>
          </TouchableOpacity>
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
