const express = require('express')
const router = express.Router()
const User = require('../models/User');
const bcrypt = require('bcrypt');


//--------------------------register--------------------------

router.post('/register', async (req, res) => {
    // console.log(req.body)
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword) 
    const secureConfirmPassword = await bcrypt.hash(req.body.confirmPassword,saltPassword) 


    User.findOne({ email: req.body.email, usename: req.body.username }, (err, user) => {
        if (user) {
            res.send({message:"User Already registered"})
        }
        else {
            
            const user = new User({
                email: req.body.email,
                username: req.body.username,
                phoneno: req.body.phoneno,
                password: securePassword,
                confirmPassword:secureConfirmPassword,
        
            })
            user.save(err=> {
                if (err) {
                    // console.log("hi")
                    res.send(err)
                } else {
                    res.send({message:"Successfully Registered"})
                }
            })
        }
    })
        
})

// -----------------------login-----------------------------------

router.post('/login', async (req, res) => {
    console.log(req.body.email)
     
    
    User.findOne({ email: req.body.email },  (err, user) => {
        console.log(  req.body.password,user)
        if (1) {
            bcrypt.compare(req.body.password, '$2b$10$umFmHfMvudUawY/F8NwE4eckSdCnfcYZHeP5ui4ADQ3stv/BR/7HW', (err, result)=> {

                if (result) {
    
                    console.log("Login Successful")
                } else {
                    console.log("Incorrect Password")
                }
            });
        }
        else {
            
            res.send({message: "User Not Registered"})
        }
    })
        
})

module.exports = router