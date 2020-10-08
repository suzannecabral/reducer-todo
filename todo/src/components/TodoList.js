import React from "react";

const TodoList = (props) => {

    const { tasks } = props.state
    
    return(
        <ul>
            {
            tasks.map((item)=>{
                return (
                    <li key={item.taskId}>{item.taskName}</li>
                );
             })
            }
        </ul>
    );
}

export default TodoList;