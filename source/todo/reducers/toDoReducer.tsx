import {ToDo, Action, State, Actions} from '../types/toDoTypes';

const Types = {
  ADD_TO_DO: 'toDo-addToDo',
  CHECK_TO_DO: 'toDo-checkToDo',
};

const Actions: Actions = {
  addToDo: (toDo: ToDo) => ({type: Types.ADD_TO_DO, payload: toDo}),
  checkToDo: (toDoIndex: number) => ({
    type: Types.CHECK_TO_DO,
    payload: toDoIndex,
  }),
};

const INITIAL_STATE: State = {
  data: [],
};

const toDoReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case Types.ADD_TO_DO: {
      const {payload: toDo} = action;
      toDo.check = false;
      const {data} = state;

      return {
        data: [...data, toDo],
      };
    }

    case Types.CHECK_TO_DO: {
      const {payload: toDoIndex} = action;
      const {data} = state;

      if (!toDoIndex) {
        return {
          ...state,
        };
      }

      const findToDo = data.find((_, index) => toDoIndex === index);

      if (findToDo) {
        findToDo.check = !findToDo.check;
        return {
          data: [
            ...data.splice(0, toDoIndex),
            findToDo,
            ...data.splice(toDoIndex + 1),
          ],
        };
      }

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

toDoReducer.actions = Actions;
toDoReducer.initialState = INITIAL_STATE;

export default toDoReducer;
