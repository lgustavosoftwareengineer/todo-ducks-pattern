import React from 'react';
import {Text, View, Button} from 'react-native';
import {useToDo} from '../hooks';

const ListToDosScreen = () => {
  const [state, actions] = useToDo();
  const {addToDo} = actions;
  const {data: toDos} = state;

  console.log(toDos);

  return (
    <View>
      <Button title="Testing" onPress={() => addToDo({title: 'Teste1'})} />
      <Text>List of ToDos</Text>
    </View>
  );
};

ListToDosScreen.navigationOptions = {
  tabBarLabel: 'Listar todos os ToDos',
};

export default ListToDosScreen;
