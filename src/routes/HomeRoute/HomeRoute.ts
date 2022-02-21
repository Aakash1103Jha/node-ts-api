import { Router } from "express"
const router: Router = require("express").Router()

const { getHomepage } = require("../../controllers/HomeController/HomeController")

router.get("/", getHomepage)

module.exports = router
