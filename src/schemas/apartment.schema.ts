import { DataTypes }  from 'sequelize';
import database from '../../config/database';


const ApartmentSchema = database.define('Apartment', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please put the image url of the apartment'
      }
    }
  },
  description: {
    type: DataTypes.JSONB,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter the description of the apartment'
      }
    }
  },
  area: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter the area of the apartment'
      }
    }
  },
  compound: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter the price of the apartment'
      }
    }
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter the city'
      }
    }
  },
  phoneNumber: {
    type: DataTypes.STRING(11),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your phone number'
      }
    }
  },
  paymentType: {
    type: DataTypes.STRING,
    defaultValue: 'cash'
  },
  finished: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
  }, 
  {
    tableName: 'apartment',
    timestamps: true
  }
);


export default ApartmentSchema;