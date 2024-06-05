export const paginationService = (page: string, countPerPage: string) => {
  let pageNumber = parseInt(page);
  let count = parseInt(countPerPage);
  if(!pageNumber){
      pageNumber = 1;
  }
  if(!count){
      count = 10;
  }
  const limit = count;
  const skip = (pageNumber - 1) * count;
  return {limit, skip};
}