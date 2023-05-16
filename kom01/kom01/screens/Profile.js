import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/rectangle-989.png")}
      />
      <View style={styles.user1} />
      <ImageBackground
        style={styles.user2Icon}
        resizeMode="cover"
        source={require("../assets/user2.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/arrow-12.png")}
        />
      </Pressable>
      <Text style={[styles.nameAlice, styles.logOutTypo]}>{`Name : Alice
Rating : 4.5/5
Gender : Female
Smokes : Yes
`}</Text>
      <Text style={styles.reviewsSeeAll}>Reviews See all</Text>
      <Image
        style={[styles.profileItem, styles.profileLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-982.png")}
      />
      <View style={[styles.profileInner, styles.profileLayout]} />
      <ImageBackground
        style={[styles.user3Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user3.png")}
      />
      <ImageBackground
        style={[styles.user4Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/user4.png")}
      />
      <Text style={[styles.julia15, styles.anna45Typo]}>{`Julia  :  1/5

She was  so rude `}</Text>
      <Text style={[styles.anna45, styles.anna45Typo]}>{`Anna  :  4/5

She was okey . Not a talkative 
person.`}</Text>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("LOGIN")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
      </Pressable>
      <Text style={[styles.logOut, styles.logOutTypo]}>LOG OUT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logOutTypo: {
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  profileLayout: {
    height: 152,
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: 58,
    left: 12,
    height: 58,
    position: "absolute",
  },
  anna45Typo: {
    width: 294,
    left: 96,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  profileChild: {
    top: 0,
    height: 406,
    width: 390,
    left: 0,
    position: "absolute",
  },
  user1: {
    top: 125,
    width: 124,
    height: 100,
    left: 133,
    position: "absolute",
  },
  user2Icon: {
    top: 114,
    left: 126,
    width: 123,
    height: 123,
    position: "absolute",
  },
  wrapper: {
    left: 27,
    top: 30,
    width: 33,
    height: 22,
    position: "absolute",
  },
  nameAlice: {
    top: 261,
    width: 184,
    left: 133,
  },
  reviewsSeeAll: {
    top: 430,
    left: 25,
    width: 365,
    height: 58,
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 2,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  profileItem: {
    top: 459,
    borderRadius: Border.br_xl,
  },
  profileInner: {
    top: 611,
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 1,
    backgroundColor: Color.white,
    height: 152,
  },
  user3Icon: {
    top: 487,
  },
  user4Icon: {
    top: 637,
  },
  julia15: {
    top: 500,
  },
  anna45: {
    top: 652,
    height: 111,
  },
  icon1: {
    borderRadius: Border.br_3xs,
  },
  container: {
    left: 66,
    top: 780,
    width: 265,
    height: 45,
    position: "absolute",
  },
  logOut: {
    top: 804,
    left: 158,
    width: 82,
    height: 9,
  },
  profile: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Profile;
