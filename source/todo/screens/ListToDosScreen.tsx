import React from 'react';
import {Text, View} from 'react-native';

const ListToDosScreen = () => {
  return (
    <View>
      <Text>List of ToDos</Text>
    </View>
  );
};

ListToDosScreen.navigationOptions = {
  tabBarLabel: 'Listar todos os ToDos',
};

export default ListToDosScreen;
