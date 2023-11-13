import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Weather = () => {
  return (
    <LinearGradient
      style={styles.thiTit}
      locations={[0, 1]}
      colors={["#4481eb", "#04befe"]}
    >
      {/* <View style={styles.wifiParent}>
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={[styles.barChartIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/barchart.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>0:26</Text>
      </View> */}
      {/* <Image
        style={styles.arrowRightIcon}
        contentFit="cover"
        source={require("../assets/arrowright.png")}
      />
      <Image
        style={[styles.listIcon, styles.tpHChLayout]}
        contentFit="cover"
        source={require("../assets/list.png")}
      />
      <Text style={[styles.tpHCh, styles.tpHChTypo]}>TP. Hồ Chí Minh</Text>
      <Image
        style={styles.moreHorizontalIcon}
        contentFit="cover"
        source={require("../assets/morehorizontal.png")}
      />
      <Image
        style={styles.thiTitChild}
        contentFit="cover"
        source={require("../assets/group-48.png")}
      /> */}
      <Text style={[styles.nhiuMy, styles.tpHChTypo]}>Nhiều mây</Text>
      <View style={styles.circle} />
      <View style={[styles.cParent, styles.cLayout]}>
        <Text style={[styles.c, styles.cLayout]}>27 C</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.parent, styles.text1Layout]}>
        <Text style={[styles.text1, styles.text1Layout]}>30 /25</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <Image
        style={styles.thiTitItem}
        contentFit="cover"
        source={require("../assets/rectangle-28.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 12,
    width: 13,
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    left: 0,
  },
  tpHChLayout: {
    height: 16,
    top: 30,
  },
  tpHChTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  cLayout: {
    width: 36,
    height: 20,
    position: "absolute",
  },
  text1Layout: {
    width: 34,
    height: 12,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "7.06%",
    height: "20.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  wifiIcon: {
    left: 303,
    top: 1,
    height: 12,
    width: 13,
  },
  batteryIcon: {
    left: 330,
    top: 0,
  },
  barChartIcon: {
    left: 317,
    top: 1,
    height: 12,
    width: 13,
  },
  text: {
    top: 2,
    fontSize: 11,
    width: 29,
    height: 13,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
    position: "absolute",
  },
  wifiParent: {
    top: 5,
    left: 8,
    width: 343,
    height: 15,
    position: "absolute",
  },
  arrowRightIcon: {
    top: 28,
    left: 12,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  listIcon: {
    left: 306,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  tpHCh: {
    left: 128,
    width: 104,
    height: 16,
    top: 30,
  },
  moreHorizontalIcon: {
    top: 26,
    left: 332,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  thiTitChild: {
    top: 100,
    left: 148,
    width: 65,
    height: 69,
    position: "absolute",
  },
  nhiuMy: {
    top: 186,
    left: 145,
    width: 71,
    height: 19,
  },
  circle: {
    top: 237,
    left: 192,
    width: 5,
    height: 5,
    position: "absolute",
    overflow: "hidden",
  },
  c: {
    fontSize: 15,
    textAlign: "left",
    color: Color.colorWhite,
    left: 0,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
  },
  vectorIcon: {
    height: "14%",
    width: "8.61%",
    top: "15.5%",
    right: "36.94%",
    bottom: "70.5%",
    left: "54.44%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cParent: {
    top: 208,
    left: 161,
  },
  text1: {
    fontSize: 8,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    color: Color.colorWhite,
    left: 0,
    top: 0,
  },
  vectorIcon1: {
    top: "21.55%",
    right: "60.88%",
    bottom: "57.76%",
    left: "32.06%",
  },
  vectorIcon2: {
    top: "20.69%",
    right: "17.94%",
    bottom: "58.62%",
    left: "75%",
  },
  parent: {
    top: 226,
    left: 164,
  },
  thiTitItem: {
    top: 390,
    width: 360,
    height: 183,
    left: 0,
    position: "absolute",
  },
  thiTit: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default W;
