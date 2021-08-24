import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
  deleteTodo(id: number): any;
}

const _App: React.FC<AppProps> = (props: AppProps): JSX.Element => {
  const onButtonClick = (): void => {
    props.fetchTodos();
  };
  const onTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };
  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return <li key={todo.id} onClick={() => onTodoClick(todo.id)}>{todo.title}</li>;
    });
  };
  return <div>
    <button onClick={onButtonClick}>Fetch</button>
    <ul>
      {renderList()}
    </ul>
  </div>;
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
