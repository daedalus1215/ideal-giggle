import React, { useEffect, useState } from 'react'
import './App.css'
import useLocalStorage from './useLocalStorage';
import TodoList from './todo/TodoList';

function App() {
  const [name, setName] = useLocalStorage("sne", "ddd");

  useEffect(() => {
    setName("smegle");

  }, [])
  console.log('name', name)
  return <TodoList />;
}

export default App
