import { Request, Response } from "express"
import { UserType, ResType } from "../../types/UserType/UserType"

const onResgiter = async (req: Request, res: Response) => {
	if (!req.body) return res.status(400).json("Invalid login data")
	// perform all kinds of validation
	// check if user already exists
	// check if password is of valid format
	// hash password
	// if no validation error, create new User of type UserType
	const user: UserType = {
		username: req.body.username,
		password: req.body.password,
	}
	const response: ResType = {
		data: user,
		message: "Registration successful",
		statusCode: 200,
	}
	res.status(200).json(response)
}

module.exports = { onResgiter }
