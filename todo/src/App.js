import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/reducer"

//import useState, useReducer


const App = () => {

//----STATE-----------

//--useState-----
const [todoState,setTodoState]=useState();

//--useReducer-----
//useReducer(reducer, intitialState);
//"initial state" and "reducer" need to be imported from reducer.js

const [state,dispatch]=useReducer(reducer,initialState);



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

        <TodoList 
          state={state}
        />
        {/* Todo LIST needs:
              1. state obj
              2. toggleCompleted fn
        */}
    </div>
  );
}

export default App;
