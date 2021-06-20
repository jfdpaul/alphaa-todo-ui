import React, { useState, FunctionComponent } from 'react';

import styles from './InputField.module.scss';

const InputField: FunctionComponent<{
    handleAdd: Function;
}> = ({ handleAdd }) => {
    const [todoInput, setTodoInput] = useState('');

    return <>
        <input className={styles.input} value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
        <button onClick={() => handleAdd(todoInput)}>Add</button>
    </>;
};

export default InputField;
