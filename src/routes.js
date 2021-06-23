const { Router } = require("express")
const ZoweController = require("./controllers/ZoweController")

// console.log(ZoweController.resume)
const routes = Router()

routes.post("/resume", ZoweController.resume)
// routes.post("/revoke", ZoweController.revoke)

module.exports = routes
