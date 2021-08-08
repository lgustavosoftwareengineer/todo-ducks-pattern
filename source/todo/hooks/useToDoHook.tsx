import {useContext} from 'react';
import toDoProvider from '../providers/ToDoProvider';

const useToDoHook = () => {
  const context = useContext(toDoProvider.Context);

  if (!context) {
    throw new Error('This hook must be wrapped by UseToDoProvider');
  }

  return context;
};

export default useToDoHook;
