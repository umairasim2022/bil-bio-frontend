import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import bioLinkService from './bioLinkServices'

// Get user from 

const initialState = {
    createdBioLink: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMsg: '',
}

// registerUser user
export const creatingBioLink = createAsyncThunk(
    'createdBioLink/creatingBioLink',

    async (createdBioLinkData, thunkAPI) => {
        try {
            return await bioLinkService.creatingBioLink(createdBioLinkData)
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
export const bioLinkCreationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(creatingBioLink.pending, (state) => {
                state.isLoading = true
                console.log('userpending', { ...state })
            })
            .addCase(creatingBioLink.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.createdBioLink = action.payload
                console.log('userfullfilled', { ...state })
            })
            .addCase(creatingBioLink.rejected, (state, action) => {
                console.log('@action', action)
                state.isLoading = false
                state.isError = true
                state.errorMsg = action.payload   // error from catch will come here via action.payload and update errorMsg
                console.log('userrejected', { ...state })
            })

    },
})

// export const { resetUser } = authSlice.actions
export default bioLinkCreationSlice.reducer
