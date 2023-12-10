import { Specialist } from './specialistsSlice';

type FilterType = {
  isLikedPage: boolean;
  searchTerm: string;
};

export const filterData = (collection: Specialist[], filters: FilterType) => {
  const hasSearchQuery = filters.searchTerm.length;
  return collection.filter((item) => {
    if (!hasSearchQuery) {
      return filters.isLikedPage ? item.liked : true;
    }
    if (!filters.isLikedPage) {
      return item.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
    }
    return (
      item.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
      item.liked
    );
  });
};
