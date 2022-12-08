import { createSlice } from '@reduxjs/toolkit'

export const createUser= createSlice({
  name: 'createUser',
  initialState: {
	name:"",
	email:"",
	password:""
  },
  reducers: {
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
