import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { specialists } from '@src/store/data';

export type Specialist = {
  name: string;
  specialization: string;
  imgUrl?: string;
};

export type SpecialistWithUserData = Specialist & {
  rank?: number;
  liked?: boolean;
};

type SpecialistsState = {
  specialists: SpecialistWithUserData[];
};

const initialState: SpecialistsState = {
  specialists: [],
};

export const specialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchSpecialists.fulfilled,
      (state: SpecialistsState, action) => {
        state.specialists = action.payload;
      },
    );
  },
});

const specialistPromise = () => {
  return new Promise(
    (
      resolve: <T>(value?: T | PromiseLike<T>) => void,
      reject: (reason?: string) => void,
    ) => {
      try {
        resolve(specialists);
      } catch {
        reject('error getting data');
      }
    },
  );
};
//FIXME: I believe that more than 5000 records is to much for frontend search operations.
// Even implementing search result infinite scroll, pagination or list virtualization seems too much.
// I'll try to be clever and try to implement some kind of pseud backend with filters and queries, if time allows.
// If not i'll do infinite scroll of results.
export const fetchSpecialists = createAsyncThunk<SpecialistWithUserData[]>(
  'specialists/fetchSpecialists',
  async () => {
    const response = await specialistPromise();
    return response as SpecialistWithUserData[];
  },
);

export default specialistsSlice;
