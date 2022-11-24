const express = require('express')
const authController = require('../controllers/authController')

const router = express.Router()



router.get('/nima' ,authController.protect,(req,res)=>{
    res.status(200).send('nima')
})


module.exports = router