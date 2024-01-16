const jobsheetController = require('../controllers/jobsheet');
const router = require('express').Router();
// const { verifyToken } = require("../middlewares/authJwt");

router.post('/one', jobsheetController.submitOne);
router.post('/many', jobsheetController.submitMany);

module.exports = router;