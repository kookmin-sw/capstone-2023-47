import React, { useState } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { CheckBox as RNKCheckBox } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MatchingScreen = () => {
  const [rectangleCheckboxchecked, setRectangleCheckboxchecked] =
    useState(undefined);
  const [rectangleCheckbox1checked, setRectangleCheckbox1checked] =
    useState(undefined);
  const [rectangleCheckbox2checked, setRectangleCheckbox2checked] =
    useState(undefined);
  const [rectangleCheckbox3checked, setRectangleCheckbox3checked] =
    useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.matchingScreen}>
      <Image
        style={styles.matchingScreenChild}
        contentFit="cover"
        source={require("../assets/rectangle-980.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Property1Default")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-981.png")}
        />
      </Pressable>
      <Text
        style={[styles.alice455Female, styles.femaleTypo1]}
      >{`Alice     4.5/5

Female / Smokes `}</Text>
      <Image
        style={[styles.matchingScreenItem, styles.rectangleViewLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-982.png")}
      />
      <View style={[styles.matchingScreenInner, styles.wrapperLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.fromKookmin, styles.continueTypo]}>{`
From :   Kookmin Univ
To :        Kookmin Univ`}</Text>
      <ImageBackground
        style={[styles.user1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user3.png")}
      />
      <ImageBackground
        style={[styles.user2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user3.png")}
      />
      <ImageBackground
        style={[styles.user3Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user3.png")}
      />
      <ImageBackground
        style={[styles.user4Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user3.png")}
      />
      <RNKCheckBox
        style={[styles.rectangleRnkcheckbox, styles.matchingChildPosition]}
        disabled={false}
        status="primary"
        checked={rectangleCheckboxchecked}
        onChange={() => setRectangleCheckboxchecked(!rectangleCheckboxchecked)}
      />
      <Text style={[styles.julia45Female, styles.femaleTypo]}>{`Julia     4/5

Female / Smokes / Driver  `}</Text>
      <RNKCheckBox
        style={[styles.matchingScreenChild1, styles.matchingChildPosition]}
        status="basic"
        checked={rectangleCheckbox1checked}
        onChange={() =>
          setRectangleCheckbox1checked(!rectangleCheckbox1checked)
        }
      />
      <Text style={[styles.julia35Female, styles.femaleTypo]}>{`Julia     3/5

Female / Not a smoker  `}</Text>
      <RNKCheckBox
        style={[styles.matchingScreenChild2, styles.matchingChildPosition]}
        status="primary"
        checked={rectangleCheckbox2checked}
        onChange={() =>
          setRectangleCheckbox2checked(!rectangleCheckbox2checked)
        }
      />
      <Text style={[styles.julia35Female1, styles.femaleTypo1]}>{`Julia     3/5

Female /not a smoker / Driver  `}</Text>
      <RNKCheckBox
        style={[styles.matchingScreenChild3, styles.matchingChildPosition]}
        status="basic"
        checked={rectangleCheckbox3checked}
        onChange={() =>
          setRectangleCheckbox3checked(!rectangleCheckbox3checked)
        }
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-51.png")}
      />
      <Text style={[styles.continue, styles.continueTypo]}>CONTINUE</Text>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-12.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 152,
    width: 390,
    left: 0,
    position: "absolute",
  },
  femaleTypo1: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    left: 96,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_xl,
    height: 152,
    width: 390,
    left: 0,
    position: "absolute",
  },
  continueTypo: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconLayout: {
    height: 58,
    width: 58,
    left: 12,
    position: "absolute",
  },
  matchingChildPosition: {
    left: 314,
    position: "absolute",
  },
  femaleTypo: {
    width: 267,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    left: 96,
    position: "absolute",
  },
  matchingScreenChild: {
    top: 0,
    height: 127,
    width: 390,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: 127,
  },
  alice455Female: {
    top: 180,
    width: 156,
    height: 14,
  },
  matchingScreenItem: {
    top: 279,
  },
  matchingScreenInner: {
    top: 430,
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  rectangleView: {
    top: 582,
    backgroundColor: Color.gainsboro,
  },
  fromKookmin: {
    left: 70,
    width: 264,
    height: 63,
    top: 36,
  },
  user1Icon: {
    top: 147,
  },
  user2Icon: {
    top: 299,
  },
  user3Icon: {
    top: 450,
  },
  user4Icon: {
    top: 602,
  },
  rectangleRnkcheckbox: {
    top: 158,
  },
  julia45Female: {
    top: 340,
    height: 78,
  },
  matchingScreenChild1: {
    top: 310,
  },
  julia35Female: {
    top: 464,
    height: 52,
  },
  matchingScreenChild2: {
    top: 461,
  },
  julia35Female1: {
    top: 618,
    width: 294,
    height: 48,
  },
  matchingScreenChild3: {
    top: 608,
  },
  rectangleIcon: {
    top: 746,
    left: 66,
    borderRadius: Border.br_3xs,
    width: 265,
    height: 45,
    position: "absolute",
  },
  continue: {
    top: 765,
    left: 155,
    width: 154,
    height: 11,
  },
  container: {
    left: 18,
    width: 33,
    height: 22,
    top: 36,
    position: "absolute",
  },
  matchingScreen: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MatchingScreen;
