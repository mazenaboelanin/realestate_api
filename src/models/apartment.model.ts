import ApartmentSchema  from '../schemas/apartment.schema';
import { apartmentsSeed } from './apartmentsSeed';

const ApartmentModel = ApartmentSchema;

ApartmentModel.sync({ force: true })
  .then(async () => { 
    console.log('Apartment table created');
    await ApartmentModel.bulkCreate(apartmentsSeed);
  })
  .catch(error => console.error('Failed to create Apartment table:', error));

  export default ApartmentModel;