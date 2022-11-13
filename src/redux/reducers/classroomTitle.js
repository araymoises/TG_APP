import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Información',
  isPlaneSelected: false,
}

export const classroomTitle = createSlice({
  name: 'classroomTitle',
  initialState,
  reducers: {
    setClassroomTitle: (state, action) => {
      state.value = action.payload
    },
    setPlaneSelected: (state, action) => {
      state.isPlaneSelected = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setClassroomTitle, setPlaneSelected } = classroomTitle.actions

export default classroomTitle.reducer