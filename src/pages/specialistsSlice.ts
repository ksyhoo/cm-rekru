import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { specialists } from '@src/store/data';

export type Specialist = {
  id: number;
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
  offset: number;
};

const initialState: SpecialistsState = {
  specialists: [],
  offset: 0,
};

export const specialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSpecialists.fulfilled, (state, action) => {
      state.specialists = [...state.specialists, ...action.payload];
      state.offset += 20;
    });
    builder.addCase(likeSpecialist, (state, action) => {
      const special = state.specialists.find(
        (specialist) => specialist.id === action.payload,
      );
      special.liked = !special.liked;
    });
  },
});

const specialistPromise = (offset: number) => {
  return new Promise(
    (
      resolve: (
        value?:
          | SpecialistWithUserData[]
          | PromiseLike<SpecialistWithUserData[]>,
      ) => void,
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
export const fetchSpecialists = createAsyncThunk<
  SpecialistWithUserData[],
  number
>('specialists/fetchSpecialists', async (offset) => {
  const response = await specialistPromise(offset);
  return response;
});

export const likeSpecialist = createAction<number>('specialists/like');
export default specialistsSlice;
