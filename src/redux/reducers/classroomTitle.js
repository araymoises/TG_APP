import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Información',
}

export const classroomTitle = createSlice({
  name: 'classroomTitle',
  initialState,
  reducers: {
    setClassroomTitle: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setClassroomTitle } = classroomTitle.actions

export default classroomTitle.reducer