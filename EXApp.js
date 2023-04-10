import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button, Picker } from 'react-native';

export default function App() {
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [passengerCount, setPassengerCount] = useState('');
  const [desiredPassengerCount, setDesiredPassengerCount] = useState('');
  const [smokingAllowed, setSmokingAllowed] = useState(false);
  const [currentPassengerCount, setCurrentPassengerCount] = useState('');
  const [totalPassengerCount, setTotalPassengerCount] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(1);
  
 

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

  //const handleCurrentPassengerCountChange = (text) => {
  //  setCurrentPassengerCount(text);
  //};
  const handleCurrentNumberChange = (number) => {
    setSelectedNumber(number);
  }


  //const handleTotalPassengerCountChange = (text) => {
  //  setTotalPassengerCount(text);
  //};
  const handleTotalNumberChange = (number) => {
    setSelectedNumber(number);
  }

  const handleMatchButtonPress = () => {
    // 매칭 결과 화면으로 이동하는 코드
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KoMpanion  </Text>
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
        
      
      <View>
        <Picker
        selectedValue={selectedNumber}
        onValueChange={handlecurrentNumberChange}
        >
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
      </Picker>
      </View>
      <View>
        <Picker
        selectedValue={selectedNumber}
        onValueChange={handletotalNumberChange}
        >
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
      </Picker>
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
});
