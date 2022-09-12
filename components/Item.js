import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_600SemiBold,
  Quicksand_400Regular,
} from "@expo-google-fonts/quicksand";

const Item = ({ item }) => {
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_400Regular,
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={item.image} style={styles.image} />
      <View style={styles.header}>
        <Text style={[styles.title, { fontFamily: "Quicksand_700Bold" }]}>
          {item.name}
        </Text>
        <Text style={styles.subtitle}>
          Order Online for{" "}
          <Text style={styles.underlineText}>Touchless Delivery</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={[styles.buttonText1, styles.commonButton]}>
            Custom Order
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={[styles.buttonText2, styles.commonButton]}>
            Existing Inventory
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  header: {
    alignItems: "center",
    position: "absolute",
    top: "15%",
    width: "100%",
  },
  title: {
    fontSize: 35,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "Quicksand_400Regular",
  },
  underlineText: {
    textDecorationLine: "underline",
  },
  buttonsContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
    width: "100%",
  },
  button1: {
    backgroundColor: "#444444",
    borderRadius: 5,
    width: "80%",
  },
  button2: {
    backgroundColor: "#e9e9e9d5",
    borderRadius: 5,
    width: "80%",
    marginTop: 10,
  },
  buttonText1: {
    color: "#ffffff",
  },
  buttonText2: {
    color: "#444444",
  },
  commonButton: {
    fontWeight: "500",
    padding: 9,
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Quicksand_600SemiBold",
  },
});
