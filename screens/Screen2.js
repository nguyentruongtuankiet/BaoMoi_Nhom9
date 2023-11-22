import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from 'react';


export default function Screen2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  const isValidEmail = (email) => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };
  const handleRegister = async () => {
    if (!username || !password || !confirmPassword || !email) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Email không hợp lệ.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp.");
      return;
    }

    try {
      const maxId = Math.max(...users.map((user) => parseInt(user.id || 0)));
      const newUserId = maxId + 1;

      const newUser = {
        id: newUserId.toString(),
        email: email,
        password: password,
        username: username,
        img: "",
      };

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert("Đăng ký thành công!");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
        setEmail("");
        navigation.navigate("screen1");
      } else {
        alert("Có lỗi xảy ra khi đăng ký.");
      }
    } catch (error) {
      alert("Đã xảy ra lỗi: " + error.message);
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
              color: "#b6bdc3",
              backgroundColor: "#fff",
            }}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
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
              color: "#b6bdc3",
              backgroundColor: "#fff",
            }}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry={true}
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
              color: "#b6bdc3",
              backgroundColor: "#fff",
            }}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={handleRegister}
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
              Đăng ký
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <Text style={{ fontSize: 16, color: "#fff", marginBottom: 10 }}>
          Bạn có sẵn sàng để tạo tài khoảng?{" "}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("screen1");
            }}
          >
            <span style={{ color: "#438ff6", fontSize: 16 }}>Đăng nhập</span>
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
