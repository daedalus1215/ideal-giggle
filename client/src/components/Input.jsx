import React from 'react';
import styles from './Input.module.css';

const Input = ({ value, onChange }) => <input
    className={styles.input}
    value={value}
    onChange={onChange} />;


export default Input;