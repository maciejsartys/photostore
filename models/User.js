var crypto = require('crypto');
var jwt = require("jsonwebtoken");

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        hash: DataTypes.STRING,
        salt: DataTypes.STRING
        }, {
        instanceMethods: {
            setPassword: function(password) {
                this.salt = crypto.randomBytes(16).toString('hex');
                this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
            },
            validPassword: function(password) {
                var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');

                return this.hash = hash;
            },
            generateJWT: function() {
                var today = new Date();
                var exp = new Date(today);
                exp.setDate(today.getDate() + 60);

                return jwt.sign({
                    id: this.id,
                    username: this.username,
                    exp: parseInt(exp.getTime() / 1000),
                }, 'SECRET_TOKEN');
            }
        }
    });
};