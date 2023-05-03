import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function App() {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [smokingAllowed, setSmokingAllowed] = useState(false);
  const [currentPassengerCount, setCurrentPassengerCount] = useState('');
  const [totalPassengerCount, setTotalPassengerCount] = useState('');
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
      <TextInput
        style={styles.input}
        onChangeText={handleCurrentPassengerCountChange}
        value={currentPassengerCount}
        placeholder="현재 인원 수"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={handleTotalPassengerCountChange}
        value={totalPassengerCount}
        placeholder="희망 동행 인원 수"
        keyboardType="numeric"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>본인 흡연여부</Text>
        <Switch
          onValueChange={handleSmokingAllowedChange}
          value={smokingAllowed}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>동행자 흡연여부</Text>
        <Switch
          onValueChange={handleSmokingAllowedChange}
          value={smokingAllowed}
        />
      </View>
      
      

      <Button title="동행 매칭" onPress={handleMatchButtonPress} />
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
});
