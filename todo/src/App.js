import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

//import useState, useReducer


const App = () => {

//----STATE-----------

//--useState-----

//??? what should this be set to
//need a list of tasks, they have a self contained status


//--useReducer-----
//useReducer(reducer, intitialState);
//"initial state" and "reducer" need to be imported from reducer.js

//??? look up syntax, why is it const=[state, dispatch]



//----EVENTS-----------

//--handleChanges-----
// just an event listener

//--handleSubmit-----
//dispatch to add to tasks[] in state

//--toggleCompleted-----
//dispatch to change task.taskDone:!task.taskDone in state

//--clearcompleted-----
//dispatch to remove tasks with task.taskDone:true



  return (
    <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        {/* Todo form needs: 
              1. handleChanges fn
              2. handleSubmit fn
              3. clearCompleted fn
        */}

        <TodoList />
        {/* Todo LIST needs:
              1. state obj
              2. toggleCompleted fn
        */}
    </div>
  );
}

export default App;
