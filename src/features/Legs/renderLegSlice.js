import { createSlice } from '@reduxjs/toolkit';

export const renderLegSlice = createSlice({
    name: 'renderLegs',
    initialState: {
        legs: [
            {
                id: 1,
                type: 'options',
                value: 1,
                SM: {
                    checked: true,
                    type: 'Underlying Percentage ↓',
                    value: 2
                },
                TSL: {
                    checked: true,
                    type: 'Points',
                    value1: 0,
                    value2: 0,
                }
            }]
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