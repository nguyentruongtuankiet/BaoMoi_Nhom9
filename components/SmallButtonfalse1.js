import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SmallButtonfalse1 = ({
  text = "Xem ngay",
  propPosition,
  propTop,
  propLeft,
  propElevation,
  propColor,
}) => {
  const smallButtonfalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", propPosition),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("elevation", propElevation),
    };
  }, [propPosition, propTop, propLeft, propElevation]);

  const getItStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View
      style={[
        styles.smallButtonfalse,
        styles.buttonFlexBox,
        smallButtonfalseStyle,
      ]}
    >
      <LinearGradient
        style={[styles.button, styles.buttonFlexBox]}
        locations={[0, 1]}
        colors={["#330867", "#671308"]}
      >
        <Text style={[styles.getIt, getItStyle]}>{text}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  getIt: {
    fontSize: FontSize.size_sm,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  button: {
    borderRadius: Border.br_980xl,
    overflow: "hidden",
    paddingHorizontal: Padding.p_lg,
    paddingVertical: Padding.p_2xs,
    backgroundColor: "transparent",
  },
  smallButtonfalse: {
    position: "absolute",
    top: 267,
    left: 173,
    width: 91,
  },
});

export default SmallButtonfalse1;
