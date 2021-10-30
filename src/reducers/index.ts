import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { ITodo } from "../actions";

//? optional -если вдруг при рефакторинге редюсера или акшена произойдут изменения то валидация стора покажет ошибку
export interface StoreState {
  todos: ITodo[];
}

export const reducers = combineReducers<StoreState>({
  //? <StoreState>-optional
  todos: todosReducer,
});
