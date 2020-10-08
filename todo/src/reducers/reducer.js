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
            console.log("Added Task", action.payload);
            const nextState = {
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
                nextState
            );
        //DELETE_DONE
                //filter

        //TOGGLE_DONE
        case "TOGGLE_DONE":
            //map: need id, change status of the one that matches id from click function
                // return full item with taskdone:true
                // make sure whole object is in return
            return(state);
        default:return state;
    }
};