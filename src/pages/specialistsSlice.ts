import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type SpecialistsState = {
  specialists: []
}

const initialState: SpecialistsState = {
    specialists: [],
}

export const specialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {
    setSpecialists: (state, action: PayloadAction<[]>) => {
        state.specialists = action.payload
    },
  },
})

export const { setSpecialists } = specialistsSlice.actions

export default specialistsSlice.reducer