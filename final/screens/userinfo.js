import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

const Userinfo = () => {

  const navigation = useNavigation();

  const [isSmoking, Smoking] = useState(false);
  const [isNotsmoking, Notsmoking] = useState(false);

  const [isMale, Male] = useState(false);
  const [isFemale, Female] = useState(false);

  const smoking = () => {
    if (!isSmoking) {
      Smoking(true);
      Notsmoking(false);
    }
  };
  
  const notsmoking = () => {
    if (!isNotsmoking) {
      Smoking(false);
      Notsmoking(true);
    }
  };

  const male = () => {
    if (!isMale) {
      Male(true);
      Female(false);
    }
  };
  
  const female = () => {
    if (!isFemale) {
      Male(false);
      Female(true);
    }
  };

  return (
    <View style={styles.container}>      
      <Text style={styles.title}>유저정보</Text>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isSmoking} onValueChange={smoking} />
        <Text style={styles.paragraph}>흡연자</Text> 
        <Checkbox style={styles.checkbox} value={isNotsmoking} onValueChange={notsmoking} />
        <Text style={styles.paragraph}>비흡연자</Text> 
      </View>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isMale} onValueChange={male} />
        <Text style={styles.paragraph}>남성</Text> 
        <Checkbox style={styles.checkbox} value={isFemale} onValueChange={female} />
        <Text style={styles.paragraph}>여성</Text> 
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>회원가입완료</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Userinfo;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      marginVertical: 10,
      width: '80%',
      borderRadius: 5,
    },
  
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
      width: '80%',
    },
  
    switchLabel: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 20,
    },
    checkbox: {
      margin: 8,
    },
    button: {
      backgroundColor: '#007AFF',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });