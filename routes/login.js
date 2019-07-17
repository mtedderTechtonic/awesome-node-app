const app = require("../app");
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(bodyParser.json());