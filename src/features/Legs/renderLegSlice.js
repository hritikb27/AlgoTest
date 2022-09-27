import { createSlice } from '@reduxjs/toolkit';

export const renderLegSlice = createSlice({
    name: 'renderLegs',
    initialState: {
        legs: [

        ]
    },
    reducers: {
        updateLeg: (state, action) => {
            state.legs = action.payload;
        },

        addLeg: (state, action) => {
            state.legs.push(action.payload);
        }
    }
});

// this is for dispatch
export const { updateLeg, addLeg } = renderLegSlice.actions;

// this is for configureStore
export default renderLegSlice.reducer;