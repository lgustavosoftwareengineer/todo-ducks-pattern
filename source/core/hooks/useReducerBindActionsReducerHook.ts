import {useMemo} from 'react';

const bindActions = (actions: any, dispatch: any) => {
  const bindedActions: any = {};

  for (const action in actions) {
    if (typeof actions[action] !== 'function') {
      throw Error('Action must be a function');
    }
    bindedActions[action] = (...args: any) =>
      dispatch(actions[action](...args));
  }

  return bindedActions;
};

const useReducerBindActionsReducerHook = (actions: any, dispatch: any) => {
  return useMemo(() => bindActions(actions, dispatch), [actions, dispatch]);
};

export default useReducerBindActionsReducerHook;
