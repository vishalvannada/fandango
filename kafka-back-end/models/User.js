var bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = function(sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        firstname: { type: Sequelize.STRING,notEmpty: true},
        email: { type:Sequelize.STRING, validate: {isEmail:true}, unique:true },
        password : {type: Sequelize.STRING,allowNull: false },
        last_login: {type: Sequelize.DATE}
    });

    return User;
}