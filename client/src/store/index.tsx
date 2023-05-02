import * as toolkitRaw from '@reduxjs/toolkit';

const { createSlice } = toolkitRaw.default ?? toolkitRaw;



const initialState = {
    mode: "dark",
    userId: "63701cc1f03239b7f700000e"
}

 const globalSLice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setMode(state:any){
            state.mode = state.mode === "light" ? "dark" : "light"
        }
    }
})


export const {setMode} = globalSLice.actions



export const globalReducer=  globalSLice.reducer