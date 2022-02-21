"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require("express").Router();
var onResgiter = require("../../controllers/UserController/UserController").onResgiter;
router.post("/register", onResgiter);
module.exports = router;
