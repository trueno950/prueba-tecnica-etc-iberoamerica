import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        location: ''
    },
    reducers: {
        setDataForm: (state, action) => {
            state[action.payload.name] = action.payload.value
        }
    }
})

export const { setDataForm } = formSlice.actions
export default formSlice.reducer;