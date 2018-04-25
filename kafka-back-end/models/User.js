var bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {
        id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        firstname: {type: Sequelize.STRING, notEmpty: true},
        lastname: {type: Sequelize.STRING},
        displayname: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING, validate: {isEmail: true}, unique: true},
        password: {type: Sequelize.STRING, allowNull: false},
        mobile: {type: Sequelize.STRING},
        address: {type: Sequelize.STRING},
        cardnumber: {type: Sequelize.STRING},
        cardmonth: {type: Sequelize.STRING},
        cardyear: {type: Sequelize.STRING},
        zipcode: {type: Sequelize.STRING},
        last_login: {type: Sequelize.DATE},
        image: {type: Sequelize.STRING}
    });
    return User;
}