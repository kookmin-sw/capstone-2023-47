import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Main = () => {
  const [groupSwitchValue, setGroupSwitchValue] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Image
        style={styles.mainChild}
        contentFit="cover"
        source={require("../assets/rectangle-7.png")}
      />
      <Text style={styles.whereAreYou}>{`
Where are 
you going?`}</Text>
      <View style={styles.mainItem} />
      <Image
        style={[styles.mainInner, styles.mainInnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.mainInnerLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={styles.mainChild1}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Text style={[styles.from, styles.toLayout]}>From</Text>
      <Text style={[styles.to, styles.kookminPosition]}>To</Text>
      <TextInput
        style={[styles.kookminUniv, styles.kookminPosition]}
        placeholder="Kookmin Univ"
        keyboardType="default"
        placeholderTextColor="#fff"
      />
      <TextInput
        style={[styles.kookminUniv1, styles.kookminPosition]}
        placeholder="Kookmin Univ"
        keyboardType="default"
        placeholderTextColor="#fff"
      />
      <Text style={[styles.driver, styles.toLayout]}>{`DRIVER
`}</Text>
      <Pressable
        style={styles.user1}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/user3.png")}
        />
      </Pressable>
      <Switch
        style={styles.groupSwitch}
        value={groupSwitchValue}
        onValueChange={setGroupSwitchValue}
        thumbColor="rgba(26, 167, 236, 0.55)"
        trackColor={{ false: "#939393", true: "#fff" }}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("MatchingScreen")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout]}
        onPress={() => navigation.navigate("DriverLoading")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-10.png")}
        />
      </Pressable>
      <Text
        style={[styles.findAMatch, styles.driver1Typo]}
      >{`FIND A MATCH `}</Text>
      <Text style={[styles.driver1, styles.driver1Typo]}>{`DRIVER
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainInnerLayout: {
    height: 8,
    width: 8,
    position: "absolute",
  },
  toLayout: {
    width: 116,
    lineHeight: 2,
    textAlign: "left",
  },
  kookminPosition: {
    left: 50,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  wrapperLayout: {
    height: 45,
    left: 66,
    width: 265,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  driver1Typo: {
    fontFamily: FontFamily.latoRegular,
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  mainChild: {
    top: 0,
    left: 0,
    width: 390,
    height: 342,
    position: "absolute",
  },
  whereAreYou: {
    top: 25,
    left: 36,
    fontSize: 26,
    lineHeight: 10,
    width: 125,
    height: 102,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  mainItem: {
    top: 149,
    left: 31,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderRightWidth: 1,
    width: 1,
    height: 113,
    position: "absolute",
  },
  mainInner: {
    top: 264,
    left: 27,
  },
  ellipseIcon: {
    top: 138,
    left: 33,
  },
  mainChild1: {
    top: 140,
    left: 35,
    width: 4,
    height: 4,
    position: "absolute",
  },
  lineIcon: {
    top: 203,
    left: 39,
    height: 1,
    width: 265,
    position: "absolute",
  },
  from: {
    top: 139,
    left: 56,
    height: 20,
    color: Color.gainsboro,
    width: 116,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  to: {
    top: 231,
    width: 116,
    lineHeight: 2,
    textAlign: "left",
    color: Color.gainsboro,
  },
  kookminUniv: {
    top: 176,
  },
  kookminUniv1: {
    top: 268,
  },
  driver: {
    top: 541,
    left: 147,
    height: 3,
    width: 116,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  user1: {
    left: 310,
    top: 56,
    width: 58,
    height: 58,
    position: "absolute",
  },
  groupSwitch: {
    top: 188,
    left: 334,
    width: 26,
    height: 34,
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_3xs,
  },
  wrapper: {
    top: 437,
  },
  container: {
    top: 534,
  },
  findAMatch: {
    top: 449,
    left: 120,
  },
  driver1: {
    top: 546,
    left: 150,
  },
  main: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Main;
