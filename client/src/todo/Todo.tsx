import React from 'react';
import styles from './Todo.module.css';

interface props {
    title: string;
}
const Todo:React.FC<props> = ({title}) => {
    return (<li className={styles.item}>
        <span className={styles.Trash}><i className="fa fa-trash"></i></span> 
        {title}
    </li>)
};

export default Todo;