import express from 'express';
import  {getAllApartments, getApartment, createApartment} from '../controllers/apartment.controller';
const router = express.Router();

// routes
router.get('/', getAllApartments).post('/', createApartment);
router.get('/:id', getApartment);

export default router;