import React from "react";
import { connect } from "react-redux";
import { ITodo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: ITodo[];
  fetchTodos: Function;
  deleteTodo: Function;
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderTodos(): JSX.Element[] {
    return this.props.todos.map((todo: ITodo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderTodos()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: ITodo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
