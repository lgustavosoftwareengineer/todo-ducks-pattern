const Types = {
  ADD_TO_DO: 'toDo-addToDo',
  CHECK_TO_DO: 'toDo-checkToDo',
};
type ToDo = {
  title: string;
  check: boolean;
};

type AddToDo = {
  type: string;
  payload: ToDo;
};
type CheckToDo = {
  type: string;
  payload: {toDoIndex: number};
};
type State = {
  data: ToDo[];
};

type ActionType = AddToDo & CheckToDo;

const Actions = {
  addToDo: () => null,
  checkToDo: () => null,
};

const INITIAL_STATE: State = {
  data: [],
};

const toDoReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case Types.ADD_TO_DO: {
      const {payload: toDo} = action;
      const {data} = state;

      return {
        data: [...data, toDo],
      };
    }

    case Types.CHECK_TO_DO: {
      const {payload} = action;
      const {toDoIndex} = payload;
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
