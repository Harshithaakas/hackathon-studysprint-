const express = require('express');
const router = express.Router();
const { findGroups, createGroup } = require('../controllers/groupController');

router.get('/', findGroups);
router.post('/create', createGroup);

module.exports = router;