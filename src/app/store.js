import { configureStore } from '@reduxjs/toolkit';
import legReducer from '../features/Legs/legSlice';
import renderLegReducer from '../features/Legs/renderLegSlice';
import futureReducer from '../features/staticLeg/futureSlice';
import optionReducer from '../features/staticLeg/optionSlice';

export default configureStore({
  reducer: {
    legSlice: legReducer,
    renderLegSlice: renderLegReducer,
    futureSlice: futureReducer,
    optionSlice: optionReducer,
  },
});