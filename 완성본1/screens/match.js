import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const Match = () => {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [isCarChecked, setCarChecked] = useState(false);
  const [isTaxiChecked, setTaxiChecked] = useState(false);

  const handleCarChange = () => {
    if (!isCarChecked) {
      setCarChecked(true);
      setTaxiChecked(false);
    }
  };
  
  const handleTaxiChange = () => {
    if (!isTaxiChecked) {
      setCarChecked(false);
      setTaxiChecked(true);
    }
  };

  const handleStartChange = (text) => {
    setStart(text);
  };

  const handleDestinationChange = (text) => {
    setDestination(text);
  };

  const handleMatchButtonPress = () => {
    // 매칭 결과 화면으로 이동하는 코드
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KoMpanion</Text>

      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isCarChecked} onValueChange={handleCarChange} />
        <Text style={styles.paragraph}>운전자</Text> 
        <Checkbox style={styles.checkbox} value={isTaxiChecked} onValueChange={handleTaxiChange} />
        <Text style={styles.paragraph}>동행자</Text> 
      </View>
      
      
      <TextInput
        style={styles.input}
        onChangeText={handleStartChange}
        value={start}
        placeholder="출발지"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleDestinationChange}
        value={destination}
        placeholder="도착지"
      />

      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>동행 찾기</Text>
        </TouchableOpacity>
      </View>
      
      </View>
  )
}

export default Match;
      
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