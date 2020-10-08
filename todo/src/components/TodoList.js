import React from "react";
// import shortid from "shortid";

const tasks = [
    {
        taskName:"Write Lists",
        taskDone:false,
        taskId:"w8NUAz9AZq",
    },
    {
        taskName:"Bake Cookies",
        taskDone:false,
        taskId:"r7bEZzB3Lr",
    },
    {
        taskName:"Carve a Pumpkin",
        taskDone:false,
        taskId:"nDwfYvPTP1",
    },
];

//generated from shortid:
//n46IX7mLB
//kUMVAQpSgP
//0y2jKQdRRd
//XbIIKrNQKc

const TodoList = (props) => {

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