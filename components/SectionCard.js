import * as React from "react";
import { StyleSheet, View, Text } from "react-native";


const SectionCard = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={styles.chnCh}>CHỌN CHẾ ĐỘ ĐỌC</Text>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.danhSchTo, styles.danhTypo]}>Danh sách to</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.danhSchNh, styles.danhTypo]}>Danh sách nhỏ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 22,
    width: 145,
    top: 28,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: 9,
    height: 22,
    width: 145,
    top: 0,
    left: 0,
    position: "absolute",
  },
  danhTypo: {
    color: "#fff",
    left: 36,
    textAlign: "left",
  
    fontWeight: "700",
    fontSize: 16,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#555",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#555",
    borderWidth: 0.5,
    top: 0,
    height: 60,
    width: 360,
    left: 0,
    position: "absolute",
  },
  chnCh: {
    top: 8,
    color: "#555",
    width: 121,
    height: 15,
    textAlign: "left",

    fontWeight: "700",
    fontSize: 16,
    left: 21,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: "#cecccc",
  },
  danhSchTo: {
    top: 5,
    width: 72,
    height: 15,
  },
  rectangleGroup: {
    left: 21,
    height: 22,
    width: 145,
    top: 28,
  },
  groupInner: {
    backgroundColor: "#4d9e95",
  },
  danhSchNh: {
    top: 3,
    width: 83,
    height: 17,
  },
  rectangleContainer: {
    left: 196,
  },
  rectangleParent: {
    top: 58,
    height: 60,
    width: 360,
    left: 0,
    position: "absolute",
  },
});

export default SectionCard;
