import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import blockService from './blockService'

// Get user from 

const initialState = {
    headingBlock: [],
    isError: false,
    isBlockSuccess: false,
    isLoading: false,
    errorMsg: '',
}

export const creatingHeadingBlock = createAsyncThunk(
    'headingBlock/creatingHeadingBlock',

    async (headingkData, thunkAPI) => {
        try {
            const response = await blockService.creatingHeadingBlock(headingkData)
            return response
        } catch (error) {
            const errorMsg =
                (error.response &&
                    error.response.data &&
                    error.response.data.errorMsg) ||
                error.errorMsg ||
                error.toString()
            return thunkAPI.rejectWithValue(errorMsg)
        }
    }
)
export const blockSlice = createSlice({
    name: 'headingBlock',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(creatingHeadingBlock.pending, (state) => {
                console.log("pending@", { ...state })
                state.isLoading = true
            })
            .addCase(creatingHeadingBlock.fulfilled, (state, action) => {
                state.isLoading = false
                state.isBlockSuccess = true
                state.headingBlock = action.payload
                console.log('headingstate@', { ...state })
            })
            .addCase(creatingHeadingBlock.rejected, (state, action) => {
                console.log('@action', action)
                state.isLoading = false
                state.isError = true
                state.errorMsg = action.payload   // error from catch will come here via action.payload and update errorMsg
            })

    },
})

export default blockSlice.reducer
