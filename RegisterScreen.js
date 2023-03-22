import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { signUp } from '../aws';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    signUp(
      email,
      password,
      () => {
        navigation.navigate('Verify', { email });
      },
      (error) => {
        setError(error);
      }
    );
  };

  return (
    <View>
      <Text>Create account</Text>
      {error ? <Text>{error}</Text> : null}
      <TextInput
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleRegister}>
        <Text>Create account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}