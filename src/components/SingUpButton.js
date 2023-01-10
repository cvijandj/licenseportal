import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

function AppButton({ title, icon, style, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, style, { backgroundColor: colors.white }]}
      onPress={onPress}
    >
      <View style={styles.textCont}>
        <Text style={styles.text}>{title}</Text>
        {icon && (
          <MaterialCommunityIcons
            style={styles.icon}
            name={icon}
            size={20}
            color={colors.primary}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    padding: 10,
    height: 50,
    marginVertical: 15,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  icon: {},
  textCont: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AppButton;
