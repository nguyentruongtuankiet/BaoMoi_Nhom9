import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
// import { Color, FontFamily, FontSize } from "..fonts/GlobalStyles";

const User = ({navigation, route}) => {
  const user = route.params;
  console.log("truyen data"+user);
  
  return (
    <View style={[styles.user, styles.userLayout]}>
      <Image
        style={[styles.userChild, styles.childGroupPosition]}
        contentFit="cover"
        source={require("../images/trangchu/ellipse-1.png")}
      />
      {/* <View style={styles.wifiParent}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../images/trangchu/wifi.png")}
        />
        <Image
          style={styles.batteryIcon}
          contentFit="cover"
          source={require("../images/trangchu/battery.png")}
        />
        <Image
          style={[styles.barChartIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../images/trangchu/barchart.png")}
        />
        <Text style={styles.text}>0:26</Text>
      </View> */}
      <View style={styles.userItem} />
      <View style={[styles.ellipseParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../images/trangchu/ellipse-2.png")}
        />
        <Text style={styles.nguynVnPh}>Nguyễn Văn Phú</Text>
      </View>
      <View style={[styles.ellipseGroup, styles.groupLayout]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../images/trangchu/ellipse-3.png")}
        />
        <Image
          style={[styles.pocketIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../images/trangchu/pocket.png")}
        />
        <Text style={[styles.lu, styles.luTypo]}>Đã lưu</Text>
      </View>
      <View style={[styles.ellipseContainer, styles.groupLayout]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../images/trangchu/ellipse-3.png")}
        />
        <Image
          style={[styles.checkCircleIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../images/trangchu/checkcircle.png")}
        />
        <Text style={[styles.angTheoDi, styles.luTypo]}>Đang theo dõi</Text>
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../images/trangchu/ellipse-3.png")}
        />
        <Image
          style={[styles.shareIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../images/trangchu/share.png")}
        />
        <Text style={[styles.cOffline, styles.cGnYTypo]}>Đọc offline</Text>
      </View>
      <View style={[styles.ellipseParent1, styles.groupViewPosition]}>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../images/trangchu/ellipse-3.png")}
        />
        <Image
          style={[styles.shareIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../images/trangchu/piechart.png")}
        />
        <Text style={[styles.cGnY, styles.cGnYTypo]}>Đọc gần đây</Text>
      </View>
      <View>  <Text style={styles.tinCh}>TIỆN ÍCH</Text></View>
     
      <Image
        style={[styles.calendarIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../images/trangchu/calendar.png")}
      />
      <TouchableOpacity onPress={() => {
        navigation.navigate("tienich");
      }}>
      <Text style={[styles.lchVit, styles.titTypo]}>Lịch Việt</Text>
      </TouchableOpacity>
     
      <Pressable style={[styles.thiTit, styles.titPosition]} onPress={() => {
        navigation.navigate("screenweather");
      }}>
        <Text style={[styles.thiTit1, styles.titTypo]}>Thời tiết</Text>
      </Pressable>
      <Text style={[styles.titKim3g4g, styles.titTypo]}>
        Tiết kiệm 3G/4G truy cập
      </Text>
      <Text style={[styles.tinChKhc, styles.titTypo]}>Tiện ích khác</Text>
      <Image
        style={[styles.cloudSnowIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../images/trangchu/cloudsnow.png")}
      />
      <Image
        style={[styles.radioIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../images/trangchu/radio.png")}
      />
      <Image
        style={[styles.moreHorizontalIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../images/trangchu/morehorizontal.png")}
      />
      <View style={styles.userInner} />
      <Pressable style={styles.arrowRight} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.userLayout]}
          contentFit="cover"
          source={require("../images/trangchu/arrowright.png")}
        />
      </Pressable>
      <Pressable style={styles.ngXut} onPress={() => {}}>
        <Text style={styles.ngXut1}>Đăng xuất</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  userLayout: {
    overflow: "hidden",
    width: "100%",
  },
  childGroupPosition: {
    left: -25,
    top: 0,
  },
  iconLayout2: {
    height: 11,
    top: 1,
    width: 13,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 36,
    position: "absolute",
  },
  groupLayout: {
    height: 31,
    position: "absolute",
  },
  iconLayout1: {
    height: 17,
    width: 17,
    left: 7,
    position: "absolute",
    overflow: "hidden",
  },
  luTypo: {
    // color: Color.colorGray_100,
    // fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    // fontSize: FontSize.size_3xs,
    height: 13,
    textAlign: "left",
    position: "absolute",
  },
  groupViewPosition: {
    top: 132,
    height: 31,
    position: "absolute",
  },
  cGnYTypo: {
    left: 45,
    top: 9,
    // color: Color.colorGray_100,
    // fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    // fontSize: FontSize.size_3xs,
    height: 13,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    width: 16,
    height: 16,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  titTypo: {
    height: 14,
    // color: Color.colorGray_100,
    // fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    // fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  titPosition: {
    left: 51,
    position: "absolute",
  },
  userChild: {
    width: 450,
    height: 120,
    position: "absolute",
  },
  wifiIcon: {
    left: 303,
  },
  batteryIcon: {
    left: 330,
    height: 12,
    width: 13,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  barChartIcon: {
    left: 317,
  },
  text: {
    top: 2,
    fontSize: 11,
    width: 29,
    height: 13,
    textAlign: "left",
    // color: Color.colorWhite,
    // fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  wifiParent: {
    top: 5,
    left: 8,
    width: 343,
    height: 15,
    position: "absolute",
  },
  userItem: {
    top: 65,
    borderRadius: 19,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 329,
    height: 112,
    left: 27,
    position: "absolute",
    // backgroundColor: Color.colorWhite,
    backgroundColor:"#fff"
  },
  groupChild: {
    width: 36,
    left: 0,
    top: 0,
    
  },
  nguynVnPh: {
    left: 50,
    fontSize: 12,
    height: 19,
    width: 124,
    top: 8,
    textAlign: "left",
    // color: Color.colorWhite,
    // fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  ellipseParent: {
    width: 174,
    left: 40,
    top: 25,
  },
  groupItem: {
    width: 31,
    left: 0,
    top: 0,
  },
  pocketIcon: {
    top: 8,
  },
  lu: {
    left: 44,
    width: 60,
    top: 8,
  },
  ellipseGroup: {
    top: 81,
    left: 41,
    width: 84,
  },
  checkCircleIcon: {
    top: 6,
  },
  angTheoDi: {
    top: 10,
    left: 46,
    width: 100,
  },
  ellipseContainer: {
    top: 83,
    left: 192,
    width: 119,
  },
  shareIcon: {
    top: 7,
  },
  cOffline: {
    width: 100,
  },
  groupView: {
    width: 101,
    left: 40,
  },
  cGnY: {
    width: 100,
  },
  ellipseParent1: {
    left: 193,
    width: 108,
  },
  tinCh: {
    top: 197,
    width: 100,
    height: 16,
    // color: Color.colorTeal,
    // fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    // fontSize: FontSize.size_3xs,
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  calendarIcon: {
    top: 224,
  },
  lchVit: {
    top: 227,
    width: 100,
    height: 14,
    left: 51,
    position: "absolute",
  },
  thiTit1: {
    width: 69,
    height: 14,
  },
  thiTit: {
    top: 261,
  },
  titKim3g4g: {
    top: 297,
    left: 51,
    position: "absolute",
    width: 170,
  },
  tinChKhc: {
    top: 333,
    width: 150,
    left: 51,
    position: "absolute",
  },
  cloudSnowIcon: {
    top: 260,
  },
  radioIcon: {
    top: 296,
  },
  moreHorizontalIcon: {
    top: 332,
  },
  userInner: {
    top: 363,
    left: -1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderTopWidth: 2,
    width: 362,
    height: 2,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowRight: {
    left: 321,
    width: 20,
    height: 20,
    top: 25,
    position: "absolute",
  },
  ngXut1: {
    fontSize: 14,
    width: 77,
    height: 20,
    // color: Color.colorTeal,
    textAlign: "left",
    // fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  ngXut: {
    left: 13,
    top: 769,
    position: "absolute",
  },
  user: {
    flex: 1,
    height: 800,
     backgroundColor: "#fff",
    overflow: "hidden",
    width: "100%",
  },
});

export default User;
