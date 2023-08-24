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
                state.user=[...state.user,{Data:payload,Edit:false}]
            }
        },
        del:(state,action)=>{
            const {payload}=action
            
            if (payload>=0) {
                state.user.splice(payload,1)
                
            }
        },
        edit:(state,action)=>{
            const {index,data,open}=action.payload
            if (data) {
                
                state.user.splice(index,1,{Data:data,Edit:false})
            }else if(open=="open"){
                state.user[index].Edit=true

            }

        }

    }
})
export const {add,del,edit}=slice.actions
export default slice.reducer