const express = require("express")
const app = express()
const Router = express.Router()


// express json
app.use(express.json())
app.use(express.urlencoded())

app.set("view engine", "ejs")

// imports routers
const api = require("./routers/api")
const web = require("./routers/web")

app.use("/api/v1/",api)
app.use(web)



app.listen(3000,()=>{console.log("run on 3000");
})  