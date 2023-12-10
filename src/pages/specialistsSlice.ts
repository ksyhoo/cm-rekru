import { createSlice } from '@reduxjs/toolkit';
import { specialists } from '@src/store/data';

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
  loadedSpecialists: Specialist[];
  offset: number;
  pageType: PageType;
  search: string;
};

const initialState: SpecialistsState = {
  specialists,
  loadedSpecialists: [],
  offset: 0,
  pageType: 'all',
  search: '',
};

export const specialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {
    likeSpecialist(state, action) {
      const specialistToUpdate = state.loadedSpecialists.find(
        (specialist) => specialist.id === action.payload,
      );
      specialistToUpdate.liked = !specialistToUpdate.liked;
    },
    voteSpecialist(state, action) {
      const specialistToUpdate = state.loadedSpecialists.find(
        (specialist) => specialist.id === action.payload.id,
      );
      specialistToUpdate.rank = [
        ...specialistToUpdate.rank,
        action.payload.score,
      ];
    },
    setPageType(state, action) {
      state.pageType = action.payload;
    },
    setOffset(state, action) {
      state.offset = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setFilteredSpecialists(state) {
      const sliced = state.specialists.slice(state.offset, state.offset + 20);
      state.loadedSpecialists = [...state.loadedSpecialists, ...sliced];
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
  setSearch,
} = specialistsSlice.actions;
export {
  likeSpecialist,
  voteSpecialist,
  setPageType,
  setOffset,
  setFilteredSpecialists,
  setSearch,
};
export default specialistsSlice;
