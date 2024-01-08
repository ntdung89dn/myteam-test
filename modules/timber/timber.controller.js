const express = require("express");
const router = express.Router();
const fs = require('fs');
const { checkValidAndCreateNewTimberData } = require('./timber.services');
const dataPath = 'modules/timber/data/input-data.json';


/* POST data */
router.post("/",async  (req, res, next) => {
    const newTimber = await checkValidAndCreateNewTimberData(req.body)
    res.send(newTimber)
});

module.exports = router;