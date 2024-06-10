import { RequestHandler, response } from 'express';
import Apartment from '../models/apartment.model';
import { paginationService } from '../services/pagination.service';
import { calculateTotalPagesService } from '../services/calculateTotalPages.service';
import { filtersService } from '../services/filters.service';
import { orderService } from '../services/order.service';

// @desc       get all Apartments
// @route      GET api/v1/apartments
// @access     Public
export const getAllApartments: RequestHandler = async(req, res: { json: (arg0: { success: boolean; msg: string; response?: any; err?: any; }) => void; }, next) => {
  let { page, countPerPage, filterBy, orderBy } = req.query as { page: string, countPerPage: string, filterBy: string, orderBy: string};
  const {skip, limit} = paginationService(page, countPerPage);
  try {
    let whereCondition: { area?: any; price?: any;} = {};
    let OrderCondition: Array<[string, 'ASC' | 'DESC']> = [];

    if(filterBy){
      whereCondition = filtersService(filterBy);
    }

    if(orderBy){
      OrderCondition = orderService(orderBy);
    }

    // Use the dynamically built whereCondition in the findAll query
    const apartments = await Apartment.findAll({
        where: whereCondition, // This now correctly applies only the filters that were provided
        offset: skip,
        limit,
        order: OrderCondition 
    });
      
      if(apartments.length === 0) return res.json({success: false, msg: "No Apartments Found" , response: {data: []}});

      const totalPages = await calculateTotalPagesService(Apartment, Number(countPerPage));

      res.json({success: true, msg: "Get All Apartments Successfully", 
      response: {
        data: apartments,
        meta: {
          totalPages,
        }
      }});
  } catch (err) {
      res.json({success: false, msg: "Error", err});
  }
}


// @desc       get specific Apartment
// @route      GET api/v1/apartments/:id
// @access     Public
export const getApartment: RequestHandler = async(req, res: { json: (arg0: { success: boolean; msg: string; response?: any; err?: any; }) => void; }, next)=>{
  const {id} = req.params;
  try {
    const apartment = await Apartment.findByPk(id);

    if(!apartment) return res.json({success: false, msg: `No Apartment Found with ${id}` , response: {data: null}});

    res.json({success: true, msg: "get Apartment Successfully",
    response: { data: apartment }});
  } catch (err) {
      res.json({success: false, msg: "Error", err});
  }
}


// @desc       create new Apartment
// @route      GET api/v1/apartments
// @access     Public
export const createApartment: RequestHandler = async(req, res: { json: (arg0: { success: boolean; msg: string; response?: any; err?: any; }) => void; }, next)=>{
  const {title, imageUrl, description, area, compound, price, city, phoneNumber, paymentType, finished, finishedDate} = req?.body;
  try {
    const newApartment = await Apartment.create({
      title,
      imageUrl,
      description,
      area,
      compound,
      price,
      city,
      phoneNumber,
      paymentType,
      finished,
      finishedDate
    });

    res.json({success: true, msg: "Created Apartment Successfully", response: {data: newApartment}});
  } catch (err) {
      res.json({success: false, msg: "Error", err});
  }

}

