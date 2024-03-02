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


// @desc       get specific Apartment
// @route      GET api/v1/apartments/:id
// @access     Public
export const getApartment: RequestHandler = async(req, res: { json: (arg0: { success: boolean; msg: string; response?: any; err?: any; }) => void; }, next)=>{
  const {id} = req.params;
  try {
    const apartment = await Apartment.findByPk(id);

    res.json({success: true, msg: "get Apartment", response: apartment});
  } catch (err) {
      res.json({success: false, msg: "Error", err});
  }
}


// @desc       create new Apartment
// @route      GET api/v1/apartments
// @access     Public
export const createApartment: RequestHandler = async(req, res: { json: (arg0: { success: boolean; msg: string; response?: any; err?: any; }) => void; }, next)=>{
  const {imageUrl, description, area, compound, price, city, phoneNumber, paymentType, finished} = req?.body;
  try {
    const newApartment = await Apartment.create({
      imageUrl,
      description,
      area,
      compound,
      price,
      city,
      phoneNumber,
      paymentType,
      finished
    });

    res.json({success: true, msg: "Create Apartment", response: newApartment});
  } catch (err) {
      res.json({success: false, msg: "Error", err});
  }
}

