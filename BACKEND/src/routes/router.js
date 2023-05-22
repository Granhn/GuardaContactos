const { Router } = require('express');
const router = Router();
const { getHome } = require('../controllers/user.controller');


router.get('/', getHome);



module.exports = router;