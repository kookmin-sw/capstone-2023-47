import * as React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LOGIN = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.view} />
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/2891069175067492.png")}
      />
      <Text style={[styles.kompanion, styles.logInFlexBox]}>KOMPANION</Text>
      <Pressable
        style={styles.loginChild}
        onPress={() => navigation.navigate("Main")}
      />
      <Text style={[styles.logIn, styles.logInFlexBox]}>LOG IN</Text>
      <Pressable
        style={styles.doNotHaveContainer}
        onPress={() => navigation.navigate("Main")}
      >
        <Text style={styles.text}>
          <Text style={styles.doNotHaveAnAccount}>
            <Text style={styles.doNotHave}>Do not have an account ?</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.signUp1}>Sign up</Text>
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logInFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  view: {
    top: -673,
    left: -1444,
    width: 3000,
    height: 2000,
    position: "absolute",
  },
  icon: {
    top: 294,
    left: 0,
    width: 393,
    height: 273,
    position: "absolute",
  },
  kompanion: {
    top: 204,
    left: 9,
    fontSize: FontSize.size_21xl,
    lineHeight: 127,
    fontFamily: FontFamily.robotoBold,
    color: Color.deepskyblue,
    width: 303,
    height: 78,
    fontWeight: "700",
  },
  loginChild: {
    top: 638,
    left: 62,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.deepskyblue,
    width: 265,
    height: 45,
    position: "absolute",
  },
  logIn: {
    top: 629,
    left: 167,
    fontSize: FontSize.size_xl,
    lineHeight: 63,
    fontFamily: FontFamily.robotoRegular,
    color: Color.white,
  },
  doNotHave: {
    color: Color.darkslategray,
  },
  text1: {
    color: Color.black,
  },
  doNotHaveAnAccount: {
    fontFamily: FontFamily.latoRegular,
  },
  signUp1: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  text: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: "center",
  },
  doNotHaveContainer: {
    left: 103,
    top: 723,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default LOGIN;
