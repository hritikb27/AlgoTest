import { createSlice } from '@reduxjs/toolkit';

export const optionSlice = createSlice({
    name: 'optionSlice',
    initialState: {totalLot:1, position:'Sell', optionType: 'Call', expiry: 'Weekly', strikeCriteria:'Strike Type', strikeType: 'ITM1'},
    reducers: {
        updateTotalLot: (state, action) => {
            state.totalLot = action.payload;
        },
        updatePosition: (state, action) => {
            state.position = action.payload;
        },
        updateOptionType: (state, action) => {
            state.optionType = action.payload;
        },
        updateExpiry: (state, action) => {
            state.expiry = action.payload;
        },
        updateStrikeCriteria: (state, action) => {
            state.strikeCriteria = action.payload;
        },
        updateStrikeType: (state, action) => {
            state.strikeType = action.payload;
        },
    }
});

// this is for dispatch
export const { updateTotalLot, updatePosition, updateOptionType, updateExpiry, updateStrikeCriteria, updateStrikeType } = optionSlice.actions;

// this is for configureStore
export default optionSlice.reducer;