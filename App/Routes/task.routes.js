module.exports = app => {
    const task = require("../Controllers/task.controllers")
    var router = require("express").Router();
    router.get("/:userId",task.getAllTasks)
    router.post("/",task.addTask)
    router.delete("/del",task.deleteCompletedTasks)
    router.put("/toggle/:taskId/:status",task.toggleStatus)
    router.delete('/deleteTask/:taskId',task.deleteTask)
    router.put('/editTask/:id/:title/:description',task.editTask)
    app.use('/api/task',router)
}