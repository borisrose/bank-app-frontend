import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from "../../service/mongoService"

// omit imports and state

export const loginUser = createAsyncThunk('user/login', async (data) => {
  
  console.log('thunk 1')
  const user = await client.post("login", data)
  console.log('thunk 1 return user', user)
  return user

})


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status : "none",
    isLoggedIn : false,
  },
  reducers: {
    login : (state, action) => {
      console.log("user :  login")
    }

  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status = 'loading'
        console.log('login user is pending')
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        state.isLoggedIn = true
        state.token = action.payload.body.token
        console.log("whole state", state)
      })
  }
})

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions

 
export default userSlice.reducer



