import { Op } from 'sequelize';

export const filtersService = (filters: string) => {
  let whereCondition: { area?: any; price?: any;} = {};
  const parsedfilters = JSON.parse(filters);

  // Check and apply area filter
  if (parsedfilters?.area?.min && parsedfilters?.area?.max) {
    whereCondition.area = { [Op.between]: [parsedfilters.area.min, parsedfilters.area.max] };
  }

  // Check and apply price filter
  if (parsedfilters?.price?.min && parsedfilters?.price?.max) {
    whereCondition.price = { [Op.between]: [parsedfilters.price.min * 1000000, parsedfilters.price.max * 1000000] };
  }

  return whereCondition;
}