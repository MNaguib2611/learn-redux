import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        fullname: "Mohammed",
        dateOfBirth: "1993-09-12"
    },
    reducers: {
        changeProfile: (state, action) => {
            state.fullname = action.payload.fullname
            state.dateOfBirth = action.payload.dateOfBirth
        }
    },
})

export const { changeProfile } = profileSlice.actions



export const profile = (state) => state.profile

export default profileSlice.reducer