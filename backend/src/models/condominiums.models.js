const db = require('../utils/database');
<<<<<<< HEAD
const { DataTypes } = require('sequelize');
const Users = require('./users.model');

const Condominium = db.define('condo', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      model: Users,
      key: 'id'
    }
  },
  tower: {
    type: DataTypes.STRING,
    allowNull: false
  },
  room: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
=======
const {DataTypes} = require('sequelize');
const Users = require('./users.model')

const Condominium = db.define('condo' , {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
          model: Users,
          key: 'id'
      }
    },
    tower : {
        type: DataTypes.STRING,
        allowNull: false
    },
    room : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

>>>>>>> origin/main
});

module.exports = Condominium;
