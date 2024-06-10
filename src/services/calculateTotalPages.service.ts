export const calculateTotalPagesService = async (
  modalName: any, count: number, whereCondition: { area?: any; price?: any;} = {}
) => {
  const countPerPage = count || 5; // default to 5 if not provided
  const totalApartments = await modalName.count({
    where: whereCondition || {},
  });
  const totalPagesNumber = Math.ceil(totalApartments / countPerPage);
  return totalPagesNumber;
}