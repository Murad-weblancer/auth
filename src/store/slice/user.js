import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email:null,
    token:null,
    newtoken:null,
    id:null,
    newToken:null,
  },
  reducers:{
    setUser(state,action){
        state.email = action.payload.email
        state.token = action.payload.token
        state.id = action.payload.id
    },
    resetUser(state,action){
        state.newtoken = action.payload
        state.id = action.payload.id
        state.email = action.payload.email

    },


  }

})

export const { setUser,resetUser } = userSlice.actions

export default userSlice.reducer