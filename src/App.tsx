import React, { useEffect, useState } from 'react';

import { Todo } from '@jfdpaul/alphaa-todo-dto';

import InputField from './components/InputField';
import TodoItem from './components/TodoItem';

import styles from './App.module.scss';

import ApiHelper from './ApiHelper';

function App(props: any) {
  const [todos, setTodos] = useState(props.todos);

  useEffect(() => {
    ApiHelper.getTodos()
      .then((allTodos) => {
        setTodos(allTodos);
      });
  }, []);

  const handleAdd = (value: string) => {
    const newTodo = new Todo();
    newTodo.title = value;

    ApiHelper.createTodo(newTodo)
      .then((retTodo) => {
        setTodos([...todos, retTodo]);
      });
  };

  const handleTodoDelete = (index: string) => {
    ApiHelper.deleteTodo(index)
      .then(() => {
        ApiHelper.getTodos()
          .then((allTodos: Todo[]) => {
            setTodos(allTodos);
          });
      });
  };

  const handleTodoEdit = (index: number, todo: Todo, value: string) => {
    todo.title = value;

    ApiHelper.updateTodo(todo._id, todo)
      .then(() => {
        setTodos([...todos.slice(0, index), todo, ...todos.slice(index + 1, todos.length)]);
      });
  };

  return (
    <div className={styles.container}>
      <InputField handleAdd={handleAdd} />
      {todos.length > 0 ? todos.map((todo: Todo, index: number) => (
        <TodoItem onDelete={() => handleTodoDelete(todo._id)} onEdit={(value: any) => handleTodoEdit(index, todo, value)} todo={todo} />
      )) : <div>It's Emtpy here! Add Some Todos</div>}
    </div>
  );
}

App.defaultProps = {
  todos: [],
}
export default App;
