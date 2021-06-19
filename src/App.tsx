import React, { useState } from 'react';
import styles from './App.module.scss';

import { Todo } from '@jfdpaul/alphaa-todo-dto';

import InputField from './components/InputField';
import TodoItem from './components/TodoItem';

function App(props: any) {
  const [todos, setTodos] = useState(props.todos);

  const handleAdd = (value: string) => {
    const newTodo = new Todo();
    newTodo.title = value;
    setTodos([...todos, newTodo]);
  };

  const handleTodoDelete = (index: number) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]);
  };

  const handleTodoEdit = (index: number, value: string) => {
    const newTodo = new Todo();
    newTodo.title = value;
    setTodos([...todos.slice(0, index), newTodo, ...todos.slice(index + 1, todos.length)]);
  };

  return (
    <div className={styles.container}>
      <InputField handleAdd={handleAdd} />
      {todos.length>0?todos.map((todo: Todo, index: number) => (
        <TodoItem onDelete={() => handleTodoDelete(index)} onEdit={(value: any) => handleTodoEdit(index, value)} todo={todo} />
      )): <div>It's Emtpy here! Add Some Todos</div>}
    </div>
  );
}

App.defaultProps = {
  todos: [],
}
export default App;
