import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Property1Default = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.property1default}>
      <Image
        style={[styles.property1defaultChild, styles.property1defaultLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-990.png")}
      />
      <Text style={styles.howWasYour}>{`How was 
your ride ?`}</Text>
      <ImageBackground
        style={styles.user2Icon}
        resizeMode="cover"
        source={require("../assets/user2.png")}
      />
      <Text style={styles.alice455}>{`Alice 4.5/5 `}</Text>
      <Image
        style={[styles.property1defaultItem, styles.property1defaultLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-992.png")}
      />
      <Image
        style={[styles.property1defaultInner, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-993.png")}
      />
      <Text
        style={[styles.giveAScore, styles.giveAScoreTypo]}
      >{`Give a score `}</Text>
      <Text
        style={[styles.writeAReview, styles.giveAScoreTypo]}
      >{`Write a review
`}</Text>
      <Image
        style={styles.arrowIcon}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <Pressable
        style={styles.cancel1}
        onPress={() => navigation.navigate("LOGIN")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/cancel-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  property1defaultLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 45,
    width: 265,
    borderRadius: Border.br_3xs,
    left: 66,
    position: "absolute",
  },
  giveAScoreTypo: {
    width: 252,
    left: 138,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  property1defaultChild: {
    top: 142,
    width: 335,
    height: 468,
    left: 27,
    borderRadius: Border.br_xl,
  },
  howWasYour: {
    top: 67,
    fontSize: FontSize.size_17xl,
    lineHeight: 4,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    width: 325,
    height: 75,
    textAlign: "left",
    color: Color.deepskyblue,
    left: 27,
    position: "absolute",
  },
  user2Icon: {
    top: 198,
    left: 128,
    width: 123,
    height: 123,
    position: "absolute",
  },
  alice455: {
    top: 344,
    left: 147,
    width: 187,
    height: 32,
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  property1defaultItem: {
    top: 467,
    left: 160,
    width: 91,
    height: 43,
  },
  property1defaultInner: {
    top: 399,
  },
  rectangleIcon: {
    top: 472,
  },
  giveAScore: {
    top: 420,
    height: 24,
    color: Color.deepskyblue,
    width: 252,
    left: 138,
  },
  writeAReview: {
    top: 495,
    height: 33,
    color: Color.white,
  },
  arrowIcon: {
    top: 550,
    left: 289,
    width: 33,
    height: 22,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  cancel1: {
    left: 313,
    top: 52,
    width: 58,
    height: 58,
    position: "absolute",
  },
  property1default: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Property1Default;
