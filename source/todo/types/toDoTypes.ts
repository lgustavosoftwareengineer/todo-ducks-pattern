export type ToDo = {
  title: string;
  check?: boolean;
};

export type AddToDo = {
  type: string;
  payload: ToDo;
};
export type CheckToDo = {
  type: string;
  payload: number;
};
export type State = {
  data: ToDo[];
};

export type Action = AddToDo & CheckToDo;

export type Actions = {
  addToDo: (toDo: ToDo) => AddToDo;
  checkToDo: (toDoIndex: number) => CheckToDo;
};

export type ToDoContext = [State, Actions];
