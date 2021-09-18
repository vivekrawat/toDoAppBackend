module.exports = app => {
    const user = require("../Controllers/user.controllers")
    var router = require("express").Router();
    router.post("/signup",user.signup)
    router.post("/login",user.login)
    app.use('/api',router)
}