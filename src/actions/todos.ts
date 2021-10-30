import { ActionTypes } from "./types";
import axios from "axios";
import { Dispatch } from "redux";

export interface ITodo {
  id: number;
  title: string;
  comleted: boolean;
}

//! описание объекта внутри отправляемого dispatch-фактически это интерфейс action-здесь он опциональный и выполняет функцию защиты диспатча от ошибок, но в редюсере он будет нужен для анотации action в аргументах
export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    //! import { Dispatch } from "redux";
    try {
      const response = await axios.get<ITodo[]>(url); //!Interface
      dispatch<FetchTodosAction>({
        //!FetchTodosAction
        type: ActionTypes.fetchTodos, //!Enum
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
