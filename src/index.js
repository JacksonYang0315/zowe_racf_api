const express = require("express")
const routes = require("./routes")
require("dotenv").config({ path: "./.env" })
const app = express()

app.use(express.json())
app.use(routes)
// app.get("/", (req, res) => {
//   return res.send("Hellao World")
// })

app.listen(3000)
