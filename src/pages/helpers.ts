import { Specialist } from './specialistsSlice';

type FilterType = Pick<Specialist, 'liked'> & { search?: string };

export const filterData = (collection: Specialist[], filters: FilterType) => {
  return collection.filter((item) => {
    if (filters.liked === undefined) return true;
    return item.liked === filters.liked;
  });
};
