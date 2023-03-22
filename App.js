import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native';

export default function App() {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  const [desiredPassengerCount, setDesiredPassengerCount] = useState('');
  const [smokingAllowed, setSmokingAllowed] = useState(false);
  const [currentPassengerCount, setCurrentPassengerCount] = useState('');
  const [totalPassengerCount, setTotalPassengerCount] = useState('');

  const handleStartChange = (text) => {
    setStart(text);
  };

  const handleDestinationChange = (text) => {
    setDestination(text);
  };

  const handlePassengerCountChange = (text) => {
    setPassengerCount(text);
  };

  const handleDesiredPassengerCountChange = (text) => {
    setDesiredPassengerCount(text);
  };

  const handleSmokingAllowedChange = (value) => {
    setSmokingAllowed(value);
  };

  const handleCurrentPassengerCountChange = (text) => {
    setCurrentPassengerCount(text);
  };

  const handleTotalPassengerCountChange = (text) => {
    setTotalPassengerCount(text);
  };

  const handleMatchButtonPress = () => {
    // 매칭 결과 화면으로 이동하는 코드
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>국민대 동행</Text>
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
      <TextInput
        style={styles.input}
        onChangeText={handlePassengerCountChange}
        value={passengerCount}
        placeholder="인원수"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleDesiredPassengerCountChange}
        value={desiredPassengerCount}
        placeholder="동행희망인원수"
        keyboardType="numeric"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>동행자 흡연여부</Text>
        <Switch
          onValueChange={handleSmokingAllowedChange}
          value={smokingAllowed}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={handleCurrentPassengerCountChange}
        value={currentPassengerCount}
        placeholder="현재 인원수"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleTotalPassengerCountChange}
        value={totalPassengerCount}
        placeholder="총 동승자 수"
        keyboardType="numeric"
      />
      <Button title="카풀 매칭" onPress={handleMatchButtonPress} />
    </View>
  );
}


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
});

export default App;