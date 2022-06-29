import { createSlice } from '@reduxjs/toolkit'

const getNewId = (arr) => {
    const ids = arr.map(object => {
        return object.id;
    });
    return Math.max(...ids) + 1;
}

// { state.list }.push({ ...action.payload, "id": getNewId(state.list) })

export const companySlice = createSlice({
    name: 'company',
    initialState: {
        list: [
            { "id": 1, "name": "Vodafone Ireland", "title": "Customer Service", "year": 2016, "order": 1 },
            { "id": 2, "name": "Teleperformance", "title": "Travel Advisor", "year": 2017, "order": 2 }
        ],
        editCompany: false
    },
    reducers: {
        addCompany: (state, action) => {
            state.list = [...state.list, { ...action.payload, "id": getNewId(state.list) }]
        },
        removeCompany: (state, action) => {
            state.list = state.list.filter((company) => company.id !== action.payload.id)
        },
        updateCompany: (state, action) => {
            state.list = state.list.map((company) => {
                if (company.id === action.payload.id) {
                    console.log(action.payload.id);
                    return { ...action.payload }
                }
                return company
            })
        },
        changeEditCompany: (state, action) => {
            state.editCompany = action.payload
        },
    },
})

export const { addCompany, removeCompany, updateCompany, changeEditCompany } = companySlice.actions



export const selectCompanyList = (state) => state.company.list
export const editCompany = (state) => state.company.editCompany

export default companySlice.reducer