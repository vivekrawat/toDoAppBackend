const db = require('../Models')
const Task = db.task

exports.getAllTasks = (req,res) => {
    const id = req.params.userId
    Task.findAll({
        where: {
            userId: id
        }
    })
    .then(data => {
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
}
exports.addTask = (req,res) => {
    const Data = {
        userId : req.body.userId,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }
    Task.create(Data)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
}
exports.deleteCompletedTasks = (req,res) => {
    Task.destroy({
        where: {status: true}
    })
    .then(num => {
        if(num) {
            res.send({
                message: "tasks have been deleted succesfully"
            })
        }
        else {
            res.send({
                message: "the tasks werenot deleted"
            })
        }
    })
    .catch(err=> {
        res.status(500).send({
            message: 'could not delete'
        })
    })
}
exports.deleteTask = (req,res) => {
  const id = req.params.taskId
  Task.destroy({
    where: {id: id}
  })
  .then(num => {
    if(num) {
        res.send({
            message: "task has been deleted succesfully"
        })
    }
    else {
        res.send({
            message: "the task was not deleted"
        })
    }
})
.catch(err=> {
    res.status(500).send({
        message: 'could not delete'
    })
})

}
exports.toggleStatus = (req,res) => {
    const id = req.params.taskId
    const status = req.params.status
    Task.update(
        {status : status},
        {where: {id:id}}
    )
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Task was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Task`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Task "
        });
      });
}
exports.editTask = (req,res) => {
    const id = req.params.id
    Task.update(
      {title: req.params.title,description: req.params.description},
      {where: {id:id}}
      )
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Task was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Task`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Task "
        });
      });
}