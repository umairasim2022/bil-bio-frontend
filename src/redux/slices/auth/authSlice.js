import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user || "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMsg: '',
}

// registerUser user
export const registerUser = createAsyncThunk(
  'auth/registerUser',

  async (user, thunkAPI) => {
    console.log('userr@', user)
    try {
      return await authService.registerUser(user)
    } catch (error) {
      const errorMsg =
        (error.response &&
          error.response.data &&
          error.response.data.errorMsg) ||
        error.errorMsg ||
        error.toString()
      console.log('regerror', errorMsg)
      return thunkAPI.rejectWithValue(errorMsg)
    }
  }
)

// loginUser user
export const loginUser = createAsyncThunk('auth/loginUser', async (user, thunkAPI) => {
  try {
    return await authService.loginUser(user)
  } catch (error) {
    // alert('auth cathch')
    const errorMsg =
      (error.response && error.response.data && error.response.data.errorMsg) ||
      error.errorMsg ||
      error.toString()
    return thunkAPI.rejectWithValue(errorMsg)
  }
})
// logout user 
export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  return authService.logoutUser()

})

// resetpassoword user
export const resetUserPassword = createAsyncThunk('auth/resetUserPassword', async (user, thunkAPI) => {
  try {
    return await authService.resetUserPassword(user)
  } catch (error) {
    const errorMsg =
      (error.response && error.response.data && error.response.data.errorMsg) ||
      error.errorMsg ||
      error.toString()
    return thunkAPI.rejectWithValue(errorMsg)
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.errorMsg = ''
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
        state.errorMsg = action.payload
        // state.user = null
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
        state.isLoading = false
        state.isError = true
        state.errorMsg = action.payload
        // state.user = null
      })
      .addCase(logoutUser.pending, (state) => {
        console.log('logoutState', { ...state })
        state.isLoading = true
      })

      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isSuccess = true
        state.isLoading = false
        state.user = action.payload
        console.log('logoutSta@@te', { ...state })



      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.errorMsg = action.payload

      })

      // resetpassword 
      .addCase(resetUserPassword.pending, (state) => {
        state.isLoading = true
      })
      .addCase(resetUserPassword.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(resetUserPassword.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false

        state.errorMsg = action.payload
        console.log('statelogin##', { ...state })

      })
  },
})

export const { resetUser } = authSlice.actions
export default authSlice.reducer
