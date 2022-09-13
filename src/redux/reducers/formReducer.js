import { createSlice } from '@reduxjs/toolkit'

export const hotelReducer = createSlice({
  name: 'hotel',
  initialState:{},
  reducers: {
    formdata: (state,action) => {
        return{
            ...state,
            hotelFormData: action.payload.initialValues
        }
    },
    userData: (state,action) => {
        return {
            ...state,
            hotelFormData: {
                ...state.hotelFormData,
                name: Number(action.payload.name),
                email: Number(action.payload.email)
            }
        } 
    },
    selectedGuest: (state,action) => {
        return {
            ...state,
            hotelFormData: {
                ...state.hotelFormData,
                guest: Number(action.payload.selectguest)
            }
        }
    },
    selectedRoom: (state,action) => {
        return {
            ...state,
            hotelFormData: {
                ...state.hotelFormData,
                room: Number(action.payload.selectroom)
            }
        }
    },
    selectedDate: (state,action) => {
        return {
            ...state,
            hotelFormData: {
                ...state.hotelFormData,
                checkIn: Number(action.payload.selectdate)
            }
        }
    },
    
  },
})

export const { userData, selectedGuest, formdata, selectedRoom,selectedDate } = hotelReducer.actions

export default hotelReducer.reducer