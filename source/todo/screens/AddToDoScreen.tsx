import React from 'react';
import {Text, View} from 'react-native';

const AddToDoScreen = () => {
  return (
    <View>
      <Text>Add a ToDo</Text>
    </View>
  );
};

AddToDoScreen.navigationOptions = {
  tabBarLabel: 'Adicionar TODO',
};

export default AddToDoScreen;
