import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

export default function AppTextInput({
  visiblePass,
  setVisiblePass,
  icon,
  ...otherProps
}) {
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
      <TextInput
        maxLength={32}
        secureTextEntry={!visiblePass ? true : false}
        {...otherProps}
      />
      <TouchableOpacity
        onPress={() => {
          setVisiblePass(!visiblePass);
        }}
        style={styles.remember}
      >
        <MaterialCommunityIcons
          style={styles.iconV}
          name={visiblePass ? "eye" : "eye-off"}
          size={20}
          color={colors.secondary}
        />
      </TouchableOpacity>
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
  remember: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  icon: {
    marginRight: 10,
    right: 1,
  },
  iconV: {
    position: "relative",
    marginLeft: 0,
  },
});
