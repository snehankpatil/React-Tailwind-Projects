import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice"; 



export const store = configureStore({
    reducer:{
        cart:CartSlice
    }
})

export default store;



// import { configureStore } from "@reduxjs/toolkit";
// import CounterSlice from "./slices/CounterSlice";

// export const store = configureStore({
//     reducer:{
//         counter:CounterSlice
//     }
// }) 