var express = require('express');
var router = express.Router();
var connection = require('../../../config/connection');
var Data = require('../../../app');
/* GET users listing. */
router.get('/', function(req, res, next) {

res.render('vehicle_index',{ title:"Admin Vehicle"});
          });


 
    

    

module.exports = router;
