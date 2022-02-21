import { Router } from "express"
const router: Router = require("express").Router()

const { onResgiter } = require("../../controllers/UserController/UserController")

router.post("/register", onResgiter)

module.exports = router
