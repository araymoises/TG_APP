import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import classroomTitleReducer from './reducers/classroomTitle';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    classroomTitle: classroomTitleReducer,
  },
});