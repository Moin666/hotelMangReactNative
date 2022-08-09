import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'hotel',
  initialState: {
    list:[],
    loader:false
  },
  reducers: {
    hotelDataLoaded:(hotel,actions)=>{
        hotel.list = actions.payload;
        // console.log("===.",actions.payload["data"])
    } 
  }
})

export const {hotelDataLoaded} = slice.actions;
export default  slice.reducer
 
