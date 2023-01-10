import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppPasswordInput from "../components/AppPasswordInput";
import AppButton from "../components/AppButton";
import { colors } from "../config/colors";
import * as loginData from "../config/login.json";
import SingUpButton from "../components/SingUpButton";

const onSubmit = () => {
  /*move from inline signin function to here*/
};

function LoginScreen(props) {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);

  return (
    <Screen style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        // TODO add primary as first color in gradient
        colors={[colors.primary_light, "transparent"]}
        style={styles.background}
      />
      <View style={styles.cont}>
        <Image
          style={styles.image}
          source={require("../assets/adaptive-icon.png")}
        />

        <Text style={styles.text} numberOfLines={3}>
          A front line government agency showcasing fast and efficient public
          service for a progressive land transport sector
        </Text>
      </View>

      <Text style={styles.loginText}>Login</Text>

      <AppTextInput
        onSubmitEditing={(event) => {
          setEmail(event.nativeEvent.text);
        }}
        style={styles.email}
        icon={"email-outline"}
        placeholder={email ? email : "Email adress"}
      />
      <AppPasswordInput
        onSubmitEditing={(event) => {
          setPassword(event.nativeEvent.text);
        }}
        setVisiblePass={setVisiblePass}
        visiblePass={visiblePass}
        style={styles.email}
        icon={"lock"}
        placeholder={"Password"}
      />
      <View style={styles.checkContainer}>
        <TouchableOpacity
          onPress={() => {
            setRemember(!remember);
            /*TODO Implement function to store email and pass*/
          }}
          style={styles.remember}
        >
          <MaterialCommunityIcons
            style={styles.icon}
            name={remember ? "square" : "square-off-outline"}
            size={20}
            color={colors.secondary}
          />

          <Text> Remember me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /*TODO implement function to switch page to lost pass*/
          }}
          style={styles.forgot}
        >
          <Text> Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <AppButton
        onPress={() => {
          if (!email || !password) {
            console.log("empty login creditials");
          } else {
            if (email === loginData.email || password === loginData.password) {
              console.log("logged in");
            } else {
              console.log("wrong everything");
            }
          }
        }}
        style={styles.button}
        icon={"chevron-right"}
        title={"Log in"}
      />
      <View style={styles.dontHave}>
        <View style={styles.hairline} />
        <Text style={styles.loginButtonBelowText1}>Don't have an account?</Text>
        <View style={styles.hairline} />
      </View>

      <SingUpButton
        onPress={() => {
          console.log("wants to sing up!");
          /*TODO make a function to swtich to SingUP page*/
        }}
        icon={"chevron-right"}
        title={"Sing up"}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  hairline: {
    marginTop: 10,
    backgroundColor: "#eae8e6",
    height: 2,
    width: 66,
  },
  dontHave: {
    marginTop: 40,
    flexDirection: "row",
  },
  loginButtonBelowText1: {
    fontSize: 14,
    paddingHorizontal: 5,
    alignSelf: "center",
    color: "#A2A2A2",
  },
  button: {
    marginTop: 50,
  },
  checkContainer: {
    flexDirection: "row",
    marginLeft: 30,
    alignItems: "flex-start",
    width: "92%",
  },
  remember: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  forgot: {
    flexDirection: "row",
    marginLeft: 100,
    alignItems: "flex-start",
  },
  email: {
    color: colors.primary,
  },
  loginText: {
    fontSize: 20,
    fontWeight: "800",
    marginLeft: 56,
    marginBottom: 10,
    width: "100%",
    alignItems: "flex-start",
  },
  text: {
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "center",
    width: 330,
    marginVertical: 15,
  },
  cont: {
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 60,
  },
});

export default LoginScreen;
