import React from "react";


// const testClick = (e) => {
//     console.log("test click: ", e.target.innerHTML);
// }

const TodoList = (props) => {

    const { tasks } = props.state;
    const { toggleDone } = props;
    
    return(
        <ul>
            {
            tasks.map((item)=>{
                return (
                    <li 
                        key={item.taskId} 
                        onClick={()=>{toggleDone(item.taskId)}}
                        className={item.taskDone ?  "done" : ""}
                        //this needs to be an anonymous function
                        // to be able to work onClick
                        //otherwise it just fires immediately only once

                    >{item.taskName}</li>
                );
             })
            }
        </ul>
    );
}

export default TodoList;