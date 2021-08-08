import React, {useReducer} from 'react';
import {createContext} from 'react';
import {useReducerBindActionsReducer} from '../../core/hooks/';
import toDoReducer from '../reducers/toDoReducer';
import {Actions, ToDoContext} from '../types/toDoTypes';

type ContextValue = ToDoContext | undefined;

const ToDoProviderContext = createContext<ContextValue>(undefined);

type Props = {
  children: React.ReactNode;
};

const ToDoProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(toDoReducer, toDoReducer.initialState);

  const actions: Actions = useReducerBindActionsReducer(
    toDoReducer.actions,
    dispatch,
  );

  return (
    <ToDoProviderContext.Provider value={[state, actions]}>
      {children}
    </ToDoProviderContext.Provider>
  );
};

ToDoProvider.Context = ToDoProviderContext;

export default ToDoProvider;
