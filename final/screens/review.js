import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Review = () => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (text) => {
    const parsedRating = parseFloat(text);
    if (!isNaN(parsedRating)) {
      setRating(parsedRating);
    }
  };

  const done = () => {

  }
  const handleRate = () => {
    navigation.navigate('Match');
    // 여기에서 평점을 사용하도록 원하는 로직을 추가하세요.
    console.log('평점:', rating);
  };

  const handleExit = () => {
    // main.js로 이동하는 코드를 작성하세요.
    // 네비게이션 라이브러리를 사용하거나 다른 방법으로 화면 전환을 구현할 수 있습니다.
    navigation.navigate('Match');
    console.log('화면을 나갑니다.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How was KoMpanion?</Text>
      <View style={styles.ratingContainer}>
        <Image source={require('./images/park.png')} style={styles.image} />
        <Text style={styles.label}>이름</Text>
        <Text style={styles.label}>평점/5</Text>
        <TextInput
          style={styles.input}
          placeholder="평점을 입력하세요"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
          onChangeText={handleRatingChange}
          keyboardType="numeric"
          returnKeyType="done" // 완료 버튼 설정
          onSubmitEditing={done} // 완료 버튼 클릭 시 동작할 함수 설정
        />
        <TouchableOpacity onPress={handleRate}>
          <Text style={styles.rateButton}>평점주기</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleExit} style={styles.exitButton}>
        <Text style={styles.exitText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
  },
  ratingContainer: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    alignSelf: 'center',
    marginTop: 10,
  },
  label: {
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    textAlign: 'center',
    marginTop: 10,
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
  },
  rateButton: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  exitText: {
    fontSize: 30,
  },
});
