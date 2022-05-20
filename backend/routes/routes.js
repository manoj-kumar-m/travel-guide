const express = require('express')
const router = express.Router()
const registerTemplate = require('../models/registerTemplate');
const bcrypt = require('bcrypt');
router.post('/register', async (req, res) => {
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword) 
    const secureConfirmPassword = await bcrypt.hash(req.body.confirmPassword,saltPassword) 
    
    const signedUpUser = new registerTemplate({
        email: req.body.email,
        username: req.body.username,
        phoneno: req.body.phoneno,
        password: securePassword,
        confirmPassword:secureConfirmPassword,
        
    })
     signedUpUser.save()
        .then(data => {
        res.json(data)
        }).catch(err => {
        res.json(err)
    })
})
 


module.exports = router