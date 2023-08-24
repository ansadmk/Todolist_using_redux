import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:[]
}
const slice=createSlice({
    name:"user",
    initialState,
    reducers:{
        add:(state,action)=>{
            const {payload}=action
            console.log(action);
            if (payload) {
                state.user=[...state.user,payload]
            }
        },
        del:(state,action)=>{
            const {payload}=action
            
            if (payload>=0) {
                state.user.splice(payload,1)
                
            }
        }
    }
})
export const {add,del}=slice.actions
export default slice.reducer