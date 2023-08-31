import { configureStore } from "@reduxjs/toolkit";
import Slice  from "../redux/state";
console.log(Slice);
//TODO : STEP 2: Configired store
export const store=configureStore({
    reducer:{
       user:Slice
    }
})
