
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import gettingBioLinkService from './getLinkService'

// Get user from 

const initialState = {
    getBioLink: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMsg: '',
}

// creating____________bioLink____________________
export const gettingBioLink = createAsyncThunk(
    'getBioLink/gettingBioLink',

    async (_, thunkAPI) => {

        try {
            return await gettingBioLinkService.gettingBioLink()  // getting getlink data from getlink services 
        } catch (error) { // handle all error like with status code  404 or 500 or 300 , not under 200
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
export const gettingBioLinkSlice = createSlice({  // handle the api response(promise coming from api) , either 
    name: 'getBioLink',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(gettingBioLink.pending, (state) => {
                state.isLoading = true
            })
            .addCase(gettingBioLink.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.createdBioLink = action.payload
            })
            .addCase(gettingBioLink.rejected, (state, action) => {
                console.log('@action', action)
                state.isLoading = false
                state.isError = true
                state.errorMsg = action.payload   // error from catch will come here via action.payload and update errorMsg
            })

    },
})

// export const { resetUser } = authSlice.actions
export default gettingBioLinkSlice.reducer
