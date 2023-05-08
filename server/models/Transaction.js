const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Transaction extends Model {};

Transaction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
            validate: {
              isIn: [['buy', 'sell']],
            },
          },
        portfolio_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'portfolio',
                key: 'id',
            },
        },
    },
    {
        //Table options
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'transaction',
    },
);

module.exports = Transaction;