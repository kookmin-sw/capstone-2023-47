import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const loginButtonPressed = async () => {
    const redirectUrl = await WebBrowser.openAuthSessionAsync(
      'https://apps.kookmin.ac.kr/',
      'https://your-redirect-url' 

    if (redirectUrl) {
      
      navigation.navigate('Match');
    } else {

    }
  };

  const registerButtonPressed = async () => {
    await WebBrowser.openBrowserAsync('https://apps.kookmin.ac.kr/');
    // 회원가입 완료 후 Userinfo로 화면 전환
    navigation.navigate('Userinfo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KoMpanion</Text>

      <Image source={require('./images/logincar.png')} style={styles.logo} />

      <TouchableOpacity style={styles.button} onPress={loginButtonPressed}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={registerButtonPressed}>
        <Text>회원가입하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
