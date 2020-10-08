import shortid from "shortid";

//generated from shortid:
//n46IX7mLB
//kUMVAQpSgP
//0y2jKQdRRd
//XbIIKrNQKc

export const initialState = {
    copied:true,
    tasks:[
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
    ],
};

export const reducer = (state, action) => {
    switch(action.type){
        //ADD_TASK
        case "ADD_TASK":
            // console.log("Added Task", action.payload);
            const nextStateAdd = {
                ...state,
                tasks:[...state.tasks,
                    {   taskName:action.payload,
                        taskDone:false,
                        taskId:shortid.generate(), 
                    }
                ]
            };
            return(
                //updates state with contents (replaces)
                nextStateAdd
            );
        //DELETE_DONE
                //filter
        case "DELETE_DONE":
            const nextStateDelete = { 
                ...state,
                tasks:
                    state.tasks.filter( item => item.taskDone===false)
            }   
            return nextStateDelete;

        //TOGGLE_DONE
        case "TOGGLE_DONE":
            //map: need id, change status of the one that matches id from click function
                // return full item with taskdone:true
                // make sure whole object is in return

            const nextStateToggle = {
                ...state,
                tasks:
                    state.tasks.map((item)=>{
                        if(item.taskId===action.payload){
                            return({
                                ...item,
                                taskDone: !item.taskDone
                            });
                        }else{
                            return item;
                        };
                    })
            }

            return(nextStateToggle);
        default:return state;
    }
};