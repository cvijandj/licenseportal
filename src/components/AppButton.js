import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

function AppButton({ title, icon, style, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <View style={styles.textCont}>
        <Text style={styles.text}>{title}</Text>
        {icon && (
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon}
            size={20}
            color={colors.white}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    padding: 13,
    height: 50,
    marginVertical: 15,
  },
  icon: {},
  textCont: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: colors.white,
    fontSize: 18,

    fontWeight: "bold",
  },
});

export default AppButton;
