const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Stock extends Model { };

Stock.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        ticker_symbol: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        watchlist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'watchlist',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'stock',
    },
);

module.exports = Stock;