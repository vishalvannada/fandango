
module.exports = function (sequelize, Sequelize) {

    var UserTransaction = sequelize.define('usertransaction', {
        transactionid: { primaryKey: true, type: Sequelize.INTEGER},
        displayname: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING, validate: {isEmail: true}},
        moviename: {type: Sequelize.STRING, allowNull: false},
        moviehall: {type: Sequelize.STRING},
        screenno: {type: Sequelize.STRING},
        movietime: {type: Sequelize.STRING},
        Amount : {type: Sequelize.INTEGER},
        tax:  {type: Sequelize.INTEGER},
        image: {type: Sequelize.STRING}
    });
    return UserTransaction;
}