const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors())

const db = require("./App/Models");
db.sequelize.sync();

require("./App/Routes/user.routes.js")(app)
require("./App/Routes/task.routes.js")(app)
app.listen(port, ()=> {
    console.log('this is reading on localhost')
})