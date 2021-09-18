module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
      title: {
          type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  
    return Task;
  };