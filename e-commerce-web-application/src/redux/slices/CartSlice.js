import { createSlice } from "@reduxjs/toolkit"; 

// import { enableMapSet } from 'immer';
// import { enableMapSet } from "immer"; 

// Call enableMapSet() before using any Map or Set objects with Immer

 
let initialState ={
    list :[],
    total:0,
    userMap:new Map(),
    loggedIn:false,
    onLogin:false,
    categoty:"all"
}

export const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add : (state,action)=>{

            state.list.push(action.payload); 
            state.list.map((item)=>(console.log(item)));
             
        },

        remove : (state,action)=>{
            console.log("it is remove",action.payload);

            // Assuming action.payload is the id of the item you want to remove
            const itemIdToRemove = action.payload;
            // Find the index using findIndex and a predicate that checks the id
            const index = state.list.findIndex(item => item.id === itemIdToRemove);
            if (index > -1) {
                state.list.splice(index, 1);
            }
        },

        increment : (state,action)=>{

        },

        decrement : (state,action)=>{
            
        },
        // to check if login is done or not
        setLogIn : (state)=>{
            state.loggedIn = !state.loggedIn;
        },
        // to check if current page is login
        setOnLogin :(state,action)=>{
            state.onLogin = action.payload;
        }
        ,
        setCategoty: (state,action)=>{
            state.categoty = action.payload;
        }




    }
})

export const {add,remove,increment,decrement,setLogIn,setOnLogin,setCategoty} = CartSlice.actions;
export default CartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     value:0,
// }

// export const CounterSlice = createSlice({
//     name:"counter",
//     initialState,
//     reducers:{
//         increment : (state)=>{
//             state.value+=1;
//         },
//         decrement: (state)=>{
//             state.value-=1;
//         }
//     }
// }) 

// export const {increment,decrement}= CounterSlice.actions;
// export default CounterSlice.reducer;