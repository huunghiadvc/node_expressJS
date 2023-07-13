const express = require('express');
const router = express.Router();

const sitecontroller = require('../app/controller/SiteController');

router.use('/contact', sitecontroller.contact);
router.use('/about', sitecontroller.about);
router.use('/search', sitecontroller.search);
router.use('/', sitecontroller.index);

module.exports = router;