import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import login from 'backend';

const Login = () => {
  const navigation = useNavigation();

  const loginToBackend = async () => {
    try {
      const response = await axios.post('./backend./src./controller./login');
      // 응답 처리 로직 추가하기
      // 예: 응답 데이터에 따라 Match로 이동하는 등의 작업 수행
      if (response.data.success) {
        navigation.navigate('Match');
      }
    } catch (error) {
      // 에러 처리 로직 추가하기
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KoMpanion</Text>

      <TouchableOpacity style={styles.button} onPress={loginToBackend}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Userinfo')}>
        <Text>회원가입하기</Text>
      </TouchableOpacity>

    </View>
  ) 
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
