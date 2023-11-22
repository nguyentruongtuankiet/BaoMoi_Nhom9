import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Padding } from "../GlobalStyles";

const RectangleComponent = () => {
  return (
    <View style={styles.frametienichInner}>
      <Image
        style={styles.componentChild}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentChild: {
    width: 328,
    height: 334,
  },
  frametienichInner: {
    position: "absolute",
    top: 377,
    left: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 320,
    paddingRight: Padding.p_xs,
  },
});

export default RectangleComponent;
