"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require("express").Router();
var getHomepage = require("../../controllers/HomeController/HomeController").getHomepage;
router.get("/", getHomepage);
module.exports = router;
