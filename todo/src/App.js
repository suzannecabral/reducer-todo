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
//state for the form input:
const [todoState,setTodoState]=useState();


//--useReducer-----
//useReducer(reducer, intitialState);
//"initial state" and "reducer" need to be imported from reducer.js

const [state,dispatch]=useReducer(reducer,initialState);



//----EVENTS-----------

//--handleChanges-----
// just an event listener
const handleChanges = (e) => {
  setTodoState(e.target.value);
};

//--handleSubmit-----
//dispatch to add to tasks[] in state
const handleSubmit = (e) => {
  e.preventDefault();
  document.getElementById("todoInput").value="";
  //dispatch
  //syntax:  dispatch({ type:"ACTION_NAME", payload:formState });
  dispatch({ type:"ADD_TASK", payload:todoState });

};

//--toggleDone-----
//dispatch to change task.taskDone:!task.taskDone in state

const toggleDone = (taskId) => {

  // console.log("toggle done, ID: ", taskId);
  dispatch({ type:"TOGGLE_DONE", payload:taskId });

};


//--deleteDone-----
//dispatch to remove tasks with task.taskDone:true

const deleteDone = (e) => {
  e.preventDefault();
  dispatch({ type:"DELETE_DONE" });
}

  return (
    <div className="App">
        <h1>Todo List</h1>
        <TodoForm 
          handleChanges={handleChanges}
          handleSubmit={handleSubmit}
          deleteDone={deleteDone}
        />
        {/* Todo form needs: 
              1. handleChanges fn
              2. handleSubmit fn
              3. deleteDone fn
        */}

        <TodoList 
          state={state}
          toggleDone={toggleDone}
        />
        {/* Todo LIST needs:
              1. state obj
              2. toggleCompleted fn
        */}
    </div>
  );
}

export default App;
