import * as React from "react";
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";



const BaChm = ({navigation}) => {
  
  const handleImagePress = (screenName) => {
    navigation.navigate(screenName);
  };
  
  return (
    
    <View style = {styles.container}>
    {/* <View style = {{flex: 1}}>
      <Text>dsdsa</Text>
    </View> */}
     <View style = {{flex: 9}}>
     <TouchableOpacity
      onPress={() => handleImagePress("Tab2")}
     >
       <Image
        style={[styles.baChmItem, styles.chmLayout]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-11.png")}
      />
     </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleImagePress("Tab6")}
     >
         <Image
        style={[styles.baChmInner, styles.chmChildLayout2]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-17.png")}
      />
     </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleImagePress("Tab4")}
     >
       
       <Image
        style={[styles.rectangleIcon, styles.chmChildLayout2]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-19.png")}
      />
     </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleImagePress("Tab5")}
     >
      <Image
        style={[styles.rectangleIcon, styles.chmChildLayout2]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-19.png")}
      />
     </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleImagePress("Tab4")}
     >
        <Image
        style={[styles.baChmChild1, styles.chmChildLayout3]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-16.png")}
      />
     </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleImagePress("Tab6")}
     >
          <Image
        style={[styles.baChmChild2, styles.chmLayout]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-15.png")}
      />
     </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleImagePress("Tab5")}
     >
        <Image
        style={[styles.baChmChild3, styles.chmChildLayout1]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-14.png")}
      />
     </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleImagePress("Tab8")}
     >
        <Image
        style={[styles.baChmChild4, styles.chmChildLayout2]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-23.png")}
      />
     </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleImagePress("Tab9")}
     >
      
      <Image
        style={[styles.baChmChild4, styles.chmChildLayout2]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-23.png")}
      />
     </TouchableOpacity>
      <TouchableOpacity
      onPress={() => handleImagePress("Tab10")}
     >
        
        <Image
        style={[styles.baChmChild5, styles.chmChildLayout2]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-22.png")}
      />
     </TouchableOpacity>
    
   
      
    
  
  
      <Image
        style={[styles.baChmChild6, styles.chmChildLayout]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-20.png")}
      />
      <Image
        style={[styles.baChmChild7, styles.chmChildLayout]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-211.png")}
      />
      <Image
        style={[styles.baChmChild8, styles.chmChildLayout1]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-18.png")}
      />
      <TouchableOpacity
        onPress={() => handleImagePress("Tab3")}
      >
          <Image
        style={[styles.baChmChild9, styles.chmChildLayout3]}
        contentFit="cover"
        source={require("../images/chuyenmuc/rectangle-13.png")}
      />
      </TouchableOpacity>
    
      <Text style={[styles.choBn, styles.bngTypo]}>Cho bạn</Text>
      <Text style={[styles.xuHng, styles.bngTypo]}>Xu hướng</Text>
      <Text style={[styles.nng, styles.bngTypo]}>Nóng</Text>
      <Text style={[styles.mi, styles.miLayout]}>Mới</Text>
      <Text style={[styles.tngHp, styles.tngHpTypo]}>Tổng hợp</Text>
      <Text style={[styles.bngVn, styles.bngTypo]}>Bóng đã VN</Text>
      <Text style={[styles.bngQt, styles.miLayout]}>Bóng đã QT</Text>
      <Text style={[styles.cL, styles.cLTypo]}>{`Độc & Lạ`}</Text>
      <Text style={[styles.tnhYu, styles.cLTypo]}>Tình yêu</Text>
      <Text style={[styles.giiTr, styles.bngTypo]}>Giải trí</Text>
      <Text style={[styles.thGii, styles.tngHpTypo]}>Thế giới</Text>
      <Text style={[styles.phpLut, styles.bngTypo]}>Pháp luật</Text>
     </View>
      
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 12,
    width: 13,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "left",
  },
  chuynMcPosition: {
    height: 20,
    top: 25,
    position: "absolute",
  },
  thayIPosition: {
    top: 124,
    position: "absolute",
  },
  chmLayout: {
    height: 93,
    top: 14,
    width: 152,
    borderRadius: 10,
    position: "absolute",
  },
  chmChildLayout2: {
    height: 99,
    width: 152,
    borderRadius: 10,
    position: "absolute",
  },
  chmChildLayout3: {
    width: 152,
    borderRadius: 10,
    position: "absolute",
  },
  chmChildLayout1: {
    left: 22,
    height: 99,
    width: 152,
    borderRadius: 10,
    position: "absolute",
  },
  chmChildLayout: {
    top: 453,
    height: 99,
    width: 152,
    borderRadius: 10,
    position: "absolute",
  },
  bngTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
   
    fontWeight: "700",
  },
  miLayout: {
    height: 48,
    position: "absolute",
  },
  tngHpTypo: {
    width: 116,
    left: 37,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: 16,
    color: "#fff",

    fontWeight: "700",
    position: "absolute",
  },
  cLTypo: {
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
    position: "absolute",
  },
  baChmChild: {
    width: 360,
    height: 58,
    backgroundColor: "transparent",
    top: 0,
  },
 

  text: {
    top: 2,
    fontSize: 16,
    width: 29,
    height: 13,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },

  chuynMc: {
    left: 132,
    fontSize: 16,
    width: 97,
    textAlign: "left",
    color: "#fff",

    fontWeight: "700",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowRight: {
    left: 321,
    width: 20,
  },
  thayI: {
    fontSize: 16,
    fontWeight: "500",

    color: "#2fdbd1",
    width: 56,
    height: 17,
    left: 21,
    textAlign: "left",
  },
  listIcon: {
    left: 334,
    width: 17,
    height: 16,
    overflow: "hidden",
  },
  baChmItem: {
    left: 21,
  },
  baChmInner: {
    left: 198,
    height: 99,
    top: 225,
  },
  rectangleIcon: {
    top: 339,
    left: 198,
    height: 99,
  },
  baChmChild1: {
    top: 121,
    height: 89,
    left: 200,
  },
  baChmChild2: {
    left: 204,
  },
  baChmChild3: {
    top: 225,
  },
  baChmChild4: {
    top: 567,
    left: 188,
  },
  baChmChild5: {
    top: 565,
    left: 17,
  },
  baChmChild6: {
    left: 21,
  },
  baChmChild7: {
    left: 200,
  },
  baChmChild8: {
    top: 337,
  },
  baChmChild9: {
    top: 120,
    height: 90,
    left: 21,
  },
  choBn: {
    top: 32,
    left: 40,
    width: 113,
    height: 54,
    position: "absolute",
  },
  xuHng: {
    top: 33,
    left: 230,
    width: 107,
    height: 53,
    position: "absolute",
  },
  nng: {
    top: 136,
    left: 54,
    width: 99,
    height: 49,
    position: "absolute",
  },
  mi: {
    top: 137,
    left: 218,
    width: 114,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  
    fontWeight: "700",
  },
  tngHp: {
    top: 241,
    height: 56,
  },
  bngVn: {
    top: 245,
    left: 219,
    width: 120,
    height: 63,
    position: "absolute",
  },
  bngQt: {
    top: 363,
    left: 47,
    width: 106,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: 16,
    color:  "#fff",

    fontWeight: "700",
  },
  cL: {
    top: 361,
    left: 209,
    width: 130,
  },
  tnhYu: {
    top: 471,
    left: 41,
    width: 125,
  },
  giiTr: {
    top: 477,
    left: 229,
    width: 108,
    height: 51,
    position: "absolute",
  },
  thGii: {
    top: 590,
    height: 49,
  },
  phpLut: {
    top: 597,
    left: 206,
    width: 129,
    height: 47,
    position: "absolute",
  },
  immediateIcon: {
    top: 153,
    left: 299,
    width: 48,
    overflow: "hidden",
  },
  baChm: {
    backgroundColor: "#fff",
    flex: 1,
    height: 800,
    overflow: "hidden",
  },
});

export default BaChm;