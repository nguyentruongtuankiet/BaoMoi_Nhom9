import { StyleSheet, View, Text, Image, TextInput,TouchableOpacity } from "react-native";
import React from "react";



export default function Screen1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, backgroundColor: "#2a3b92",alignItems:"center", justifyContent:"center"  }}>
          <Image
            source={require("../images/logobaomoi.png")}
            resizeMode="contain"
            style= {{height: 69, width: 254}}
            

          ></Image>
      </View>
      <View style = {{flex: 2, justifyContent:"space-around", backgroundColor:"#15668e"}}>
        <View style = {{alignItems:"center"}}>
        <TextInput
            placeholder="Tên đăng nhập"
            style = {{height: 50, width: 350, borderRadius: 10, paddingLeft: 10, borderWidth: 1}}
            
          >

          </TextInput>
        </View>
        <View style = {{alignItems:"center"}}>
        <TextInput
            placeholder="Mật khẩu"
            style = {{height: 50, width: 350, borderRadius: 10, paddingLeft: 10, borderWidth: 1}}
            
          >

          </TextInput>
        </View>
        <Text style = {{textAlign:"right", color:"#fff", fontSize: 10, paddingRight: 20}}>Quên mật khẩu?</Text>
        
      </View>
      <View style = {{flex: 1, alignItems:'center', justifyContent:"center", backgroundColor:"#0c7b8d"}}>
      <TouchableOpacity style={styles.touchableOpacity}>
        <View style={{ 
          width: 350, 
          height: 45, 
          borderRadius: 8,
          overflow: 'hidden', 
          backgroundColor: 'transparent', 
          boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
        }}>
          <Text
            style={{ 
              backgroundColor: 'transparent', 
              textAlign: 'center', 
              lineHeight: 40, 
              color: '#fff',
              backgroundImage: 'linear-gradient(to right, #0c7b8d, #15668e)',
            }}>
            Đăng nhập
          </Text>
        </View>
      </TouchableOpacity>
      </View>
      <View style = {{flex: 1, justifyContent:"center"}}>
            <Text style = {{fontSize: 14, textAlign:"center"}}>Tiếp tục với</Text>
      </View>
      <View style = {{flex: 1,justifyContent:"center"}}>
          <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <Image
            source={require("../images/google.png")}
            resizeMode="contain"
            style= {{height: 50, width: 50}}
            

          ></Image>
          <Image
            source={require("../images/apple.png")}
            resizeMode="contain"
            style= {{height: 50, width: 50}}
            

          ></Image>
          <Image
            source={require("../images/facebook.png")}
            resizeMode="contain"
            style= {{height: 50, width: 50}}
            

          ></Image>
          </View>
      </View>
      <View style = {{flex: 1, justifyContent:"flex-end", alignItems:"center"}}>
            <Text style = {{fontSize: 14, color: "#fff"}} >Bạn chưa là thành viên? <span style={{color:'#378de1'}}>Hãy đăng ký!</span></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchableOpacity: {
    borderRadius: 5,
    height: 45,
    width: 350,
    alignItems: "center",
    borderWidth: 1,
  },
});
