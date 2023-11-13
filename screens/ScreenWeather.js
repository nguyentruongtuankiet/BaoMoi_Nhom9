import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons'; 

export default function ScreenWeather() {
  return (
    <LinearGradient
    style={styles.thiTit}
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    locations={[0, 1]}
    colors={["#4481eb", "#04befe"]}
  >
    <View style = {{flex: 1, flexDirection:"row", justifyContent:"space-between"}}>
        <View>
        <TouchableOpacity 
            
            >
                <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
        </View>
        <View>
            <Text style = {{color:"#fff",fontSize: 16}}>TP.Hồ Chí Minh</Text>
        </View>
        <View style = {{flexDirection:"row"}}>
        <TouchableOpacity 
            
            >
                <AntDesign name="bars" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
                
            >
               <AntDesign name="ellipsis1" size={24} color="white" />
            </TouchableOpacity>
        </View>
       
        
    
    </View>    
    <View style = {{flex: 4, alignItems:"center"}}>
        <Image
            source={require("../images/cloud.png")}
            resizeMode="contain"
            style = {{height: 100, width: 100, alignItems:"center"}}
        ></Image>
        <View style = {{flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
            <View>
                <Text style = {{color:"#fff",fontSize: 24}}>27 C</Text>
            </View>
            <View>
                <Text style = {{color:"#fff",fontSize: 24}}>Nhiều mây</Text>
            </View>
        </View>
        <View style = {{flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
            <View>
                <Text style = {{color:"#fff",fontSize: 16}}>Hôm nay</Text>
            </View>
            <View>
                <Text style = {{color:"#fff",fontSize: 16}}>Thứ 6, 26/03</Text>
            </View>
        </View>
    </View>
    <View style = {{flex: 2, justifyContent:"flex-start"}}>
        <Image
            source={require("../images/thongtin.png")}
            resizeMode="contain"
            style = {{height: 200, width: "100%", alignItems:"center"}}
        ></Image>
    </View>
    <View style = {{flex: 3}}></View>

  </LinearGradient>
  );
}
const styles = StyleSheet.create({
  thiTit: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});
