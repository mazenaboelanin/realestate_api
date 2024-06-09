export const orderService = (orderBy: string) => {
  let OrderCondition: Array<[string, 'ASC' | 'DESC']> = [];

  const parsedOrderBy = JSON.parse(orderBy);
  OrderCondition = [[parsedOrderBy.orderBy, parsedOrderBy.orderType]];

  return OrderCondition;
}