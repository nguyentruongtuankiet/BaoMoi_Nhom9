import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border } from "../GlobalStyles";

const Container = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.anh2Parent, styles.wrapperLayout]}>
        <View style={[styles.anh2, styles.wrapperLayout]} />
        <Image
          style={[styles.anh2, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
      </View>
      <View style={[styles.anh3Wrapper, styles.wrapperLayout]}>
        <Image
          style={[styles.anh2, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/anh3.png")}
        />
      </View>
      <View style={[styles.anh4Wrapper, styles.wrapperLayout]}>
        <Image
          style={[styles.anh2, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/anh4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 88,
    left: 0,
    width: 157,
    position: "absolute",
  },
  anh2: {
    borderRadius: Border.br_4xs,
    top: 0,
    left: 0,
  },
  anh2Parent: {
    top: 0,
    left: 0,
  },
  anh3Wrapper: {
    top: 108,
  },
  anh4Wrapper: {
    top: 216,
  },
  groupParent: {
    top: 135,
    left: 4,
    height: 304,
    width: 157,
    position: "absolute",
  },
});

export default Container;
