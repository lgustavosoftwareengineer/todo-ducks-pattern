import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AddToDoScreen, ListToDosScreen} from './screens';
import {ToDoProvider} from './providers';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const ToDoNavigator = () => {
  return (
    <ToDoProvider>
      <Navigator>
        <Screen
          name="AddToDoScreen"
          component={AddToDoScreen}
          options={AddToDoScreen.navigationOptions}
        />
        <Screen
          name="ListToDosScreen"
          component={ListToDosScreen}
          options={ListToDosScreen.navigationOptions}
        />
      </Navigator>
    </ToDoProvider>
  );
};

export default ToDoNavigator;
