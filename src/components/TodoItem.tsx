import React, { useState, FunctionComponent, MouseEventHandler } from 'react';
import cn from 'classnames';
import { Todo } from '@jfdpaul/alphaa-todo-dto';


import styles from './TodoItem.module.scss';

const TodoItem: FunctionComponent<{ todo: Todo, onEdit: Function, onDelete: MouseEventHandler }> = ({ todo, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  console.log(Todo)
  return (
    <div className={styles.container}>
      {
        isEditing ? (
          <input className={styles.todoItemInput} value={title} onChange={(e) => setTitle(e.target.value)} />
        ) : (
          <div className={styles.todoItem}>{todo.title}</div>
        )
      }
      <div className={styles.actions}>
        {
          isEditing ? (
            <button onClick={() => { setIsEditing(false); onEdit(title) }} className={cn([styles.save, styles.button])}>Save</button>
          ) : (
            <button onClick={() => setIsEditing(true)} className={cn([styles.edit, styles.button])}>Edit</button>
          )
        }
        <button onClick={onDelete} className={cn([styles.delete, styles.button])}>Delete</button>
      </div>
    </div >
  );
};

export default TodoItem;
