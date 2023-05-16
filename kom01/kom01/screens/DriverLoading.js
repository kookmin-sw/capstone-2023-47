import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DriverLoading = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.driverLoading}>
      <ImageBackground
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/33044461.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Main")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/arrow-11.png")}
        />
      </Pressable>
      <Text style={styles.loading}>{`LOADING...
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 192,
    left: -6,
    width: 401,
    height: 401,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 19,
    top: 42,
    width: 33,
    height: 22,
    position: "absolute",
  },
  loading: {
    top: 134,
    left: 51,
    fontSize: FontSize.size_21xl,
    lineHeight: 127,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.deepskyblue,
    textAlign: "left",
    width: 303,
    height: 78,
    position: "absolute",
  },
  driverLoading: {
    backgroundColor: Color.white,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default DriverLoading;
