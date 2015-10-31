describe("UserModel", function() {
    var Sequelize = require("sequelize");
    var env = 'development';
    var config = require('../../config/config.json')[env];
    var User = {};
    var sequelize = {};

    beforeEach(function() {
        var sequelize = new Sequelize(config.database, config.username, config.password, config);
        var User = sequelize.import('../../models/User.js').build();

    });

    it("Should be User model", function() {
        console.log(User.hash);
        expect(User.generateJWT).toEqual('function');
    });
})