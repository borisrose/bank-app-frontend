import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from "../../service/mongoService"


// THUNK ONE 
export const loginUser = createAsyncThunk('user/login', async (data) => {
  
  console.log('-----------thunk 1-------------')
  const user = await client.post("login", data)
  const token = user.body.token
  const { body : profile }= await client.post("profile", {}, token)
  return { token, ...profile}
})

// THUNK TWO 

export const updateUser = createAsyncThunk('user/update', async (data) => {

  console.log('-----------thunk 2-------------')
  const profileData = {
    firstName : data.firstName,
    lastName : data.lastName
  }
  const token = data.token
  const updateAction = await client.put("profile", profileData, token)
  const { body : profile }= await client.post("profile", {}, token)
  return { token, ...profile }

});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status : "none",
    isLoggedIn : false,
  },
  reducers: {
 
    logout: (state, action) => {

      state.status = 'none';
      state.isLoggedIn = false;
      state.token = null;
      console.log('user is disconnected');
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
        state.token = action.payload.token
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        console.log("whole state", state)
      })
      .addCase(updateUser.pending, (state, action) => {
        state.status = 'pending'
        console.log('the user update is pending')
      })
      .addCase(updateUser.fulfilled, (state, action) => {   
        state.status = 'fulfilled'
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
      })
  }
})

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

 
export default userSlice.reducer



