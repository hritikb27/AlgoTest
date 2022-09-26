import { configureStore } from '@reduxjs/toolkit';
import legReducer from '../features/Legs/legSlice';
import renderLegReducer from '../features/Legs/renderLegSlice';

export default configureStore({
  reducer: {
    legSlice: legReducer,
    renderLegSlice: renderLegReducer,
  },
});