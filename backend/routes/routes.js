const express = require('express')
const router = express.Router()
const User = require('../models/User');
const bcrypt = require('bcrypt');


//--------------------------register--------------------------

router.post('/register', async (req, res) => {
  
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    const secureConfirmPassword = await bcrypt.hash(req.body.confirmPassword, saltPassword)


    User.findOne({
        email: req.body.email,
        usename: req.body.username
    }, (err, user) => {
        if (user) {
            res.send({
                message: "User Already registered"
            })
        } else {

            const user = new User({
                email: req.body.email,
                username: req.body.username,
                phoneno: req.body.phoneno,
                password: securePassword,
                confirmPassword: secureConfirmPassword,

            })
            user.save(err => {
                if (err) {
               
                    res.send(err)
                } else {
                    res.send({
                        message: "Successfully Registered",user:user
                    })
                }
            })
        }
    })

})

// -----------------------login-----------------------------------

router.post('/login', async (req, res) => {
    console.log(req.body)
    
    User.findOne({ email: req.body.email },  (err, user) => {
        console.log(user)
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, result)=> {

                if (result) {

                    res.send({
                        message: "Login Successful",user:user
                    })
                } else {
                    res.send({
                        message: "Incorrect Password"
                    })
                }
            });
        }
        else {

            res.send({message: "User Not Registered"})
        }
    })
                    
    






})

module.exports = router







// const {
    //     email,
    //     password
    // } = req.body;
    // const data = await User.find({email});
    // console.log(data);
    // // await bcrypt.compare(password,data.password)
    // res.send("Hello")
    // try{

    //     const user = await User.findOne({email:req.body.email})
    //     !user && res.status(401).json("invalid email or password")

    //     console.log(user)

    //     const originalPassword  = bcrypt.compare(req.body.password,user.password);
        

    //     originalPassword !== req.body.password && res.status(401).json("invalid email or password")

 
 
    // }catch(err){
    //     res.status(500).json(err)
    // }