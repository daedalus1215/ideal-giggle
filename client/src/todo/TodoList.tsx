import React from 'react';
import cn from 'classnames';
import styles from './TodoList.module.css';
import useLocalStorage from '../useLocalStorage';
import Todo from './Todo';

const TodoList = () => {
    const [listOfTodos, setListOfTodos] = useLocalStorage("todos", [{"id": 1, "title": "First Note"}]);

    return (<div className={styles.container}>
        <h1>To-Do List <i id="btn-plus" className="fa fa-plus"></i></h1>
          <input 
            className={cn(styles.newNote, styles.btnPlus)}
            type="text" 
            placeholder="Add New Todo" 
          />
        <ul id="list">
            {listOfTodos?.map((todo: { title: string }) => <Todo title={todo.title} />)}
        </ul>
    </div>)
};

export default TodoList;