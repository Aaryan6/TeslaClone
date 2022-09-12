import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React from "react";
import CarsData from "./CarsData";
import Item from "./Item";

const ItemList = () => {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <FlatList
        data={CarsData}
        renderItem={({ item }) => {
          return <Item item={item} />;
        }}
        keyExtractor={(item, index) => {
          return index;
        }}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default ItemList;

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
    fontWeight: "bold",
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
    backgroundColor: "#e9e9e9",
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
    padding: 8,
    fontSize: 15,
    textAlign: "center",
  },
});
