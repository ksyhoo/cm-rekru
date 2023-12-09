import { createSlice } from '@reduxjs/toolkit';
import { specialists as originalData } from '@src/store/data';

export type PageType = 'all' | 'favorite';

export type Specialist = {
  id: number;
  name: string;
  specialization: string;
  imgUrl?: string;
  rank: number[];
  liked: boolean;
};

type SpecialistsState = {
  specialists: Specialist[];
  filteredSpecialists: Specialist[];
  offset: number;
  pageType: PageType;
};

const initialState: SpecialistsState = {
  specialists: originalData,
  filteredSpecialists: [],
  offset: 0,
  pageType: 'all',
};

export const specialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {
    likeSpecialist(state, action) {
      const originalSpecialist = state.filteredSpecialists.find(
        (specialist) => specialist.id === action.payload,
      );
      originalSpecialist.liked = !originalSpecialist.liked;
    },
    voteSpecialist(state, action) {
      const originalSpecialist = state.filteredSpecialists.find(
        (specialist) => specialist.id === action.payload,
      );
      originalSpecialist.rank = [
        ...originalSpecialist.rank,
        action.payload.score,
      ];
    },
    setPageType(state, action) {
      state.pageType = action.payload;
    },
    setOffset(state, action) {
      state.offset = action.payload;
    },
    setFilteredSpecialists(state) {
      const sliced = state.specialists.slice(state.offset, state.offset + 20);
      state.filteredSpecialists = [...state.filteredSpecialists, ...sliced];
      state.offset += 20;
    },
  },
});

//FIXME: I believe that more than 5000 records is to much for frontend search operations and then rendering the list or subset of this list.
// I'll try to be clever and  implement some kind of pseudo backend with filters and queries, if time allows.
// If not i'll do infinite scroll / pagination / list virtualization of the results.
//Update: building API like fetch actions turned out to be time consuming. I decided to load all of the list to state

const {
  likeSpecialist,
  voteSpecialist,
  setPageType,
  setOffset,
  setFilteredSpecialists,
} = specialistsSlice.actions;
export {
  likeSpecialist,
  voteSpecialist,
  setPageType,
  setOffset,
  setFilteredSpecialists,
};
export default specialistsSlice;
