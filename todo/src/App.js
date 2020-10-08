import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';



const App = () => {
  return (
    <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
    </div>
  );
}

export default App;
