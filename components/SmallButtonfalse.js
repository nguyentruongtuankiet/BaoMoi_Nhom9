import * as React from "react";
import { StyleSheet, View } from "react-native";
import SmallButtonfalse1 from "./SmallButtonfalse1";

const SmallButtonfalse = () => {
  return (
    <View style={styles.smallButtonfalse}>
      <SmallButtonfalse1
        text="      Đổi ngày"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propElevation={4}
        propColor="#000"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  smallButtonfalse: {
    position: "absolute",
    top: 660,
    left: 49,
    flexDirection: "row",
  },
});

export default SmallButtonfalse;
