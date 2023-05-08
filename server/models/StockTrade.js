const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class StockTrade extends Model { };

StockTrade.init(
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
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        transaction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'transaction',
                key: 'id',
            },
        },
    },
    {
        hooks: {
            beforeSave: async (trade) => {
                trade.total_price = trade.price * trade.quantity;
            },
        },

        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'stock_trade',
    },
);

module.exports = StockTrade;