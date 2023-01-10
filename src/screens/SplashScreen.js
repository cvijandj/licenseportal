import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";

function LoadingScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.midContainer}>
        <Image
          style={styles.image}
          source={require("../assets/adaptive-icon.png")}
        />
        <Text>Transportation License Portal</Text>
      </View>
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 250,
  },
  midContainer: {
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 150,
  },
  image: {
    width: 130,
    height: 160,
  },
  loading: {
    paddingTop: 150,
  },
});

export default LoadingScreen;
