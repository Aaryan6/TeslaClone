import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts, Quicksand_600SemiBold } from "@expo-google-fonts/quicksand";

const Navbar = () => {
  let [fontsLoaded] = useFonts({
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <View style={styles.menuBox}>
        <Text style={styles.menuText}>Menu</Text>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    width: "100%",
    top: 10,
    zIndex: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 110,
    resizeMode: "contain",
  },
  menuBox: {
    backgroundColor: "#c9c9c948",
    borderRadius: 5,
  },
  menuText: {
    color: "#222",
    padding: 5,
    paddingHorizontal: 10,
    fontFamily: "Quicksand_600SemiBold",
  },
});
