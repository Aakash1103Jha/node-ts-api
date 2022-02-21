// import express, { Express, Response, Request } from "express"
const express = require("express")
const cors = require("cors")

const app = express()

const PORT: Number | any = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const HomeRoute = require("./routes/HomeRoute/HomeRoute")
const UserRoute = require("./routes/UserRoute/UserRoute")

app.use("/", HomeRoute)
app.use("/", UserRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
