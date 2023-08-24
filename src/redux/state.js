import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:['abc']
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
        delete:(state,action)=>{
            const {payload}=action
            if (payload) {
                state.user.splice(payload,1)
            }
        }
    }
})
export const {add}=slice.actions
export default slice.reducer