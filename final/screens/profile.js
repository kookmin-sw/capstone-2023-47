import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const profiles = [
  { id: '1', name: '박기연', grade: '4/5', gender: 'Male', imageUri: require('./images/park.png'), smoking: true },
  { id: '2', name: '푸렙키시그', grade: '5/5', gender: 'Female', imageUri: require('./images/pu.png'), smoking: false },
  { id: '3', name: '황정훈', grade: '4.5/5', gender: 'Male', imageUri: require('./images/hwang.png'), smoking: true },
];

const ProfileCard = ({ name, gender, grade, smoking, imageUri }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
      <View style={{ marginRight: 16 }}>
        <Image source={imageUri} style={{ width: 80, height: 80, borderRadius: 40 }} />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>{grade}</Text>
          </View>
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
            <Icon name={isChecked ? 'check-square-o' : 'square-o'} size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16 }}>{gender}</Text>
          <Text style={{ fontSize: 16, marginHorizontal: 4 }}>•</Text>
          <Text style={{ fontSize: 16 }}>{smoking ? 'Smoker' : 'Non-smoker'}</Text>
        </View>
      </View>
    </View>
  );
};

const MatchButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#007AFF', padding: 16 }} onPress={onPress}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>매칭하기</Text>
    </TouchableOpacity>
  );
};

const Profile = () => {
  const navigation = useNavigation();
  const handleMatch = () => {
    // 매칭 로직
    navigation.navigate('Map')
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={profiles}
        renderItem={({ item }) => <ProfileCard {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
        ListHeaderComponent={() => (
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>동행 List</Text>
          </View>
        )}
      />
      <MatchButton onPress={handleMatch} />
    </View>
  );
};


export default Profile;