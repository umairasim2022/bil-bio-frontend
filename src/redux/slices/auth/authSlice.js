import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('userReg'))

const initialState = {
  user: user ||  "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// registerUser user
export const registerUser = createAsyncThunk(
  'auth/registerUser',

  async (user, thunkAPI) => {
    console.log('userr@', user)
    try {
      return await authService.registerUser(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      console.log('regerror', message)
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// loginUser user
export const loginUser = createAsyncThunk('auth/loginUser', async (user, thunkAPI) => {
  try {
    return await authService.loginUser(user)
  } catch (error) {
    // alert('auth cathch')
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
return    authService.logoutUser()

})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {

        state.isLoading = true
        console.log('userpending', { ...state })

      })
      .addCase(registerUser.fulfilled, (state, action) => {

        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
        console.log('userfullfilled', { ...state })


      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log('@action', action)

        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
        console.log('userrejected', { ...state })


      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, action) => {

        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
        console.log('stateloginff##', { ...state })

      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log('loginresp', action.payload)
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
        console.log('statelogin##', { ...state })

      })
      .addCase(logoutUser.pending, (state) => {
        console.log('logoutState', { ...state })
        state.isLoading = true


      })

      .addCase(logoutUser.fulfilled, (state , action) => {
        state.isSuccess = true 
        state.isLoading = false 
        state.user = action.payload
        console.log('logoutSta@@te', { ...state })

        

      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true 
        state.isSuccess = false 
        state.message = action.payload
        console.log('logoutState', { ...state })

      })
  },
})

export const { resetUser } = authSlice.actions
export default authSlice.reducer
