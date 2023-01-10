import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon}
          size={20}
          color={colors.secondary}
        />
      )}
      <TextInput style={styles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 1,
    borderColor: "#eae8e6",
    borderWidth: 2,
    flexDirection: "row",
    width: "85%",
    padding: 13,
    height: 50,
    marginVertical: 10,
  },
  text: { color: colors.primary },
  icon: {
    marginRight: 10,
  },
});
