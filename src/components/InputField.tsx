import React, { useState, FunctionComponent } from 'react';

import styles from './InputField.module.scss';

const InputField: FunctionComponent<{
    handleAdd: Function;
}> = ({ handleAdd }) => {
    const [todoInput, setTodoInput] = useState('');

    return <div className={styles.container}>
        <input className={styles.inputField} placeholder='type a todo here' value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
        <button className={styles.button} disabled={!todoInput} onClick={() => { handleAdd(todoInput); setTodoInput('') }}>+</button>
    </div>;
};

export default InputField;
