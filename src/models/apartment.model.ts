import ApartmentSchema  from '../schemas/apartment.schema';

const ApartmentModel = ApartmentSchema;

ApartmentModel.sync({ force: true })
  .then(() => console.log('Apartment table created'))
  .catch(error => console.error('Failed to create Apartment table:', error));

  export default ApartmentModel;