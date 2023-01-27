const express = require('express');
const fs = require('fs')
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Libros' });
});

module.exports = router;
