import { configureStore } from "@reduxjs/toolkit";
import Slice  from "../redux/state";
console.log(Slice);
export const store=configureStore({
    reducer:{
       user:Slice
    }
})
