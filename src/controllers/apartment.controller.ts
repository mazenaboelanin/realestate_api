import { RequestHandler } from 'express';
import Apartment from '../models/apartment.model';

// @desc       get all Apartments
// @route      GET api/v1/apartments
// @access     Public
export const getAllApartments: RequestHandler = async(req, res: { json: (arg0: { success: boolean; msg: string; response?: any; err?: any; }) => void; }, next)=>{
  try {
      const apartments = await Apartment.findAll();
      res.json({success: true, msg: "Get All Apartments", response: apartments});
  } catch (err) {
      res.json({success: false, msg: "Error", err});
  }
}


