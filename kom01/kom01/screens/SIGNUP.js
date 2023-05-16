import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, TextInput, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SIGNUP = () => {
  const [genderTextInput, setGenderTextInput] = useState("text");
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <Image
        style={[styles.signUpChild, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <TextInput
        style={[styles.gender, styles.genderTypo]}
        placeholder="Gender"
        keyboardType="default"
        value={genderTextInput}
        onChangeText={setGenderTextInput}
        placeholderTextColor="#d9d9d9"
      />
      <Pressable
        style={styles.doHaveAnContainer}
        onPress={() => navigation.navigate("LOGIN")}
      >
        <Text style={[styles.text, styles.textLayout]}>
          <Text style={styles.doHaveAnAccount}>
            <Text style={styles.doHave}>Do have an account ?</Text>
            <Text style={styles.text1}>{` `}</Text>
          </Text>
          <Text style={styles.text1}>
            <Text style={styles.logIn1}>Log in</Text>
          </Text>
        </Text>
      </Pressable>
      <Image
        style={styles.signUpItem}
        contentFit="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={styles.signUpInner}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text style={[styles.signUp1, styles.signFlexBox]}>Sign up</Text>
      <Image
        style={[styles.rectangleIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-10.png")}
        />
      </Pressable>
      <TextInput
        style={[styles.smokes, styles.genderTypo]}
        placeholder="Smokes"
        keyboardType="default"
        placeholderTextColor="#d9d9d9"
      />
      <Text style={[styles.signUp2, styles.signFlexBox]}>SIGN UP</Text>
      <Image
        style={styles.car11}
        contentFit="cover"
        source={require("../assets/car-1-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 45,
    width: 265,
    left: 66,
    position: "absolute",
  },
  genderTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.latoRegular,
  },
  textLayout: {
    lineHeight: 21,
    letterSpacing: 0,
  },
  signFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  signUpChild: {
    top: 437,
    borderRadius: Border.br_3xs,
  },
  gender: {
    top: 449,
    left: 74,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  doHave: {
    color: Color.darkslategray,
  },
  text1: {
    color: Color.black,
  },
  doHaveAnAccount: {
    fontFamily: FontFamily.latoRegular,
  },
  logIn1: {
    fontFamily: FontFamily.latoBold,
    fontWeight: "700",
  },
  text: {
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  doHaveAnContainer: {
    left: 138,
    top: 723,
    position: "absolute",
  },
  signUpItem: {
    top: 78,
    left: 57,
    width: 100,
    height: 100,
    position: "absolute",
  },
  signUpInner: {
    top: 0,
    left: 0,
    width: 390,
    height: 342,
    position: "absolute",
  },
  signUp1: {
    top: 233,
    left: 9,
    fontSize: FontSize.size_21xl,
    lineHeight: 127,
    fontFamily: FontFamily.robotoBold,
    width: 303,
    height: 72,
    fontWeight: "700",
  },
  rectangleIcon: {
    top: 534,
    borderRadius: Border.br_3xs,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  wrapper: {
    top: 636,
  },
  smokes: {
    top: 546,
    left: 74,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  signUp2: {
    top: 648,
    left: 167,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.latoRegular,
  },
  car11: {
    top: 212,
    left: 174,
    width: 115,
    height: 115,
    position: "absolute",
  },
  signUp: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default SIGNUP;
