import { Request, Response } from "express"

const getHomepage = async (req: Request, res: Response) => {
	res.send("Welcome to the app!!")
}

module.exports = { getHomepage }
