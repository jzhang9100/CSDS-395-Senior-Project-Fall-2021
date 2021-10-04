var express = require('express')
var connection = require('./
var router = express.Router()

// Middleware
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// Profile Endpoints 
router.get('/:uuid', (req, res) => { 
   
}); 
 
router.put('/:uuid', (req, res) => { 
}); 
 
router.post('/', (req, res) => { 
}); 
 
router.delete('/:uuid', (req, res) => { 
}); 

module.exports = router
