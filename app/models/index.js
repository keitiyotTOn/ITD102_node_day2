const config =require('../config/db');
const sequelize =require('sequelize');

const dataType = new sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);