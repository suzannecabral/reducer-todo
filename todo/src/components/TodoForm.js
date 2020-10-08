import React from "react";

const TodoForm = (props) => {
    const { handleChanges, handleSubmit } = props;
    // console.log(props);
    return(
        <form>
            <input type="text" placeholder="New Task" name="todoInput" onChange={handleChanges}/>
            <button type="submit" onClick={handleSubmit}>Add</button>
            <button>Clear Complete</button>
        </form>
    );

    


}

export default TodoForm;