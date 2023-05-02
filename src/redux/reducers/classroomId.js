import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}
export const classroomId = createSlice({
  name: 'classroomId',
  initialState,
  reducers: {
    setClassroomId: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setClassroomId } = classroomId.actions

export default classroomId.reducer