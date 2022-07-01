import { createSlice } from "@reduxjs/toolkit";

const employee = createSlice({
    name: 'employee',
    initialState: {
        id: 0,
        first_name: '',
        last_name: '',
        age: 0,
        gender: '',
        height: ''
    },
    reducers: {
        setEmployeeSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { setEmployeeSlice } = employee.actions
export default employee.reducer