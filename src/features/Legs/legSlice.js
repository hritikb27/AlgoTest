import { createSlice } from '@reduxjs/toolkit';

export const legSlice = createSlice({
    name: 'legs',
    initialState: {segment:'options'},
    reducers: {
        updateSegment: (state, action) => {
            state.segment = action.payload;
        },
    }
});

// this is for dispatch
export const { updateSegment } = legSlice.actions;

// this is for configureStore
export default legSlice.reducer;