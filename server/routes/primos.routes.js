const express = require("express");
const router = express.Router();
const primosCtrl = require("../controllers/primos.controller");

//routes
router.post("/primosByNumber", primosCtrl.primosByNumber);

module.exports = router;
