import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { specialists } from '@src/store/data';

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
  offset: number;
};

const initialState: SpecialistsState = {
  specialists: [],
  offset: 0,
};

export const specialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {
    likeSpecialist(state, action) {
      const specialist = state.specialists.find(
        (specialist) => specialist.id === action.payload,
      );
      specialist.liked = !specialist.liked;
    },
    voteSpecialist(state, action) {
      const specialist = state.specialists.find(
        (specialist) => specialist.id === action.payload.id,
      );
      specialist.rank = [...specialist.rank, action.payload.score];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSpecialists.fulfilled, (state, action) => {
      state.specialists = [...state.specialists, ...action.payload];
      state.offset += 20;
    });
  },
});

const specialistPromise = (offset: number) => {
  return new Promise(
    (
      resolve: (value?: Specialist[] | PromiseLike<Specialist[]>) => void,
      reject: (reason?: string) => void,
    ) => {
      try {
        resolve(specialists.slice(offset, offset + 20));
      } catch {
        reject('error getting data');
      }
    },
  );
};
//FIXME: I believe that more than 5000 records is to much for frontend search operations and then rendering the list or subset of this list.
// I'll try to be clever and  implement some kind of pseudo backend with filters and queries, if time allows.
// If not i'll do infinite scroll / pagination / list virtualization of the results.
export const fetchSpecialists = createAsyncThunk<Specialist[], number>(
  'specialists/fetchSpecialists',
  async (offset) => {
    const response = await specialistPromise(offset);
    return response;
  },
);

const { likeSpecialist, voteSpecialist } = specialistsSlice.actions;
export { likeSpecialist, voteSpecialist };
export default specialistsSlice;
