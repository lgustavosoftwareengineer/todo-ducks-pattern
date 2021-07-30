import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ToDoNavigator from './source/todo/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <ToDoNavigator />
    </NavigationContainer>
  );
};

export default App;
