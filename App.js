import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import ItemList from "./components/ItemList";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ItemList />
      <StatusBar auto="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
