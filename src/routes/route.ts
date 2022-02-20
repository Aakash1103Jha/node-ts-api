import { Router, Request, Response } from "express"

const router: Router = require("express").Router()

router.get("/home/:user", async (req: Request, res: Response) => {
	const user: String = req.params.user
	res.status(200).send(`Hello ${user}`)
})

module.exports = router
