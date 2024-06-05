export const calculateTotalPagesService = async (modalName: any, count: number) => {
  const countPerPage = count || 5; // default to 5 if not provided
  const totalApartments = await modalName.count();
  const totalPagesNumber = Math.ceil(totalApartments / countPerPage);
  return totalPagesNumber;
}