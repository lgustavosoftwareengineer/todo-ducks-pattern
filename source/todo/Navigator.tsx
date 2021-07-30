import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AddToDoScreen, ListToDosScreen} from './screens';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const ToDoNavigator = () => {
  return (
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
  );
};

export default ToDoNavigator;
