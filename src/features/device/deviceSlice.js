import { createSlice } from '@reduxjs/toolkit'

const getNewId = (arr) => {
    const ids = arr.map(object => {
        return object.id;
    });
    return Math.max(...ids) + 1;
}

export const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        list: [
            { "id": 1, "name": "IPhone", "model": "12 Pro", "year": 2021 },
            { "id": 2, "name": "Macbook", "model": "M1 pro 14 Inch", "year": 2022 }
        ],
    },
    reducers: {
      
          addDevice: (state, action) => {
            state.list = [...state.list, { ...action.payload, "id": getNewId(state.list) }]
        },
        removeDevice: (state, action) => {
            state.list = state.list.filter((device) => device.id !== action.payload.id)
        },
    },
})

export const { addDevice,removeDevice } = deviceSlice.actions



export const devices = (state) => state.device.list

export default deviceSlice.reducer


