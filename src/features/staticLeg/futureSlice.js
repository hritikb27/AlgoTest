import { createSlice } from '@reduxjs/toolkit';

export const futureSlice = createSlice({
    name: 'futureSlice',
    initialState: {totalLot:1, position:'Sell'},
    reducers: {
        updateTotalLot: (state, action) => {
            state.totalLot = action.payload;
        },
        updatePosition: (state, action) => {
            state.position = action.payload;
        },
    }
});

// this is for dispatch
export const { updateTotalLot, updatePosition } = futureSlice.actions;

// this is for configureStore
export default futureSlice.reducer;