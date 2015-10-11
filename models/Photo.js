module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Photo', {
        title: DataTypes.STRING,
        filename: DataTypes.STRING,
        user: DataTypes.STRING,

    })
};

/*
.then(function () {
  // Table created
  return Photo.create({
    title: 'lorem',
    user: 'donor'
  });
});

  */