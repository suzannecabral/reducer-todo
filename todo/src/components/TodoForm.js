import React from "react";

const TodoForm = (props) => {
    const { handleChanges, handleSubmit, deleteDone } = props;
    // console.log(props);
    return(
        <form>
            <input id="todoInput" type="text" placeholder="New Task" name="todoInput" onChange={handleChanges}/>
            <button type="submit" onClick={handleSubmit}>Add</button>
            <button onClick={deleteDone}>Clear Complete</button>
        </form>
    );

    


}

export default TodoForm;