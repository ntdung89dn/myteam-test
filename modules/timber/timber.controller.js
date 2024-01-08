const express = require("express");
const router = express.Router();
const { checkValidAndCreateNewTimberData } = require('./timber.services');


/* POST data */
router.post("/",async  (req, res, next) => {
    const newTimber = await checkValidAndCreateNewTimberData(req.body)
    res.send(newTimber)
});

module.exports = router;