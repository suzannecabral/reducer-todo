import React from "react";

const TodoForm = (props) => {

    return(
        <form>
            <input type="text" placeholder="New Task" name="todoInput"/>
            <button type="submit">Add</button>
            <button>Clear Complete</button>
        </form>
    );

    


}

export default TodoForm;