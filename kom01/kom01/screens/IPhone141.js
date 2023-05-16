import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const IPhone141 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone141}>
      <Image
        style={styles.iphone141Child}
        contentFit="cover"
        source={require("../assets/rectangle-9901.png")}
      />
      <ImageBackground
        style={[styles.user2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user2.png")}
      />
      <Text style={[styles.matched, styles.matchedFlexBox]}>
        <Text style={styles.matched1}>Matched</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <Image
        style={[styles.speechBubble03a1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/speech-bubble-03a-1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Property1Default")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <Image
        style={styles.iphone141Item}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/line-4.png")}
        />
      </Pressable>
      <Text style={[styles.nameAlice, styles.matchedFlexBox]}>{`Name : Alice
Rating : 4.5/5
Gender : Female
Smokes : Yes
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 123,
    width: 123,
    position: "absolute",
  },
  matchedFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iphone141Child: {
    top: 129,
    left: 18,
    borderRadius: 21,
    width: 354,
    height: 494,
    position: "absolute",
  },
  user2Icon: {
    top: 198,
    left: 128,
  },
  matched1: {
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  text: {
    fontFamily: FontFamily.robotoRegular,
  },
  matched: {
    top: 67,
    left: 27,
    fontSize: FontSize.size_17xl,
    lineHeight: 4,
    color: Color.deepskyblue,
    width: 325,
    height: 75,
  },
  speechBubble03a1Icon: {
    top: 6,
    left: 267,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 298,
    top: 549,
    width: 33,
    height: 22,
    position: "absolute",
  },
  iphone141Item: {
    top: 160,
    left: 296,
    width: 32,
    height: 32,
    position: "absolute",
  },
  container: {
    left: 290,
    top: 159,
    width: 40,
    height: 40,
    position: "absolute",
  },
  nameAlice: {
    top: 376,
    left: 132,
    fontSize: FontSize.size_xl,
    lineHeight: 2,
    color: Color.white,
    width: 184,
    fontFamily: FontFamily.robotoRegular,
  },
  iphone141: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone141;
