const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('d7p6efp7ubbba7', 'nhpsdmwpjtpdkq', '6b298c5d08e46bce2428e86bd39448c707b79db3529cc5780cc8126c0be315c6', {
    host: 'ec2-54-211-255-161.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions:{
      ssl: {
        required: true,
        rejectUnauthorized: false
      }
    }
  }
);

const User = require('./user')(sequelize);

module.exports = {
  sequelize,
  User
};