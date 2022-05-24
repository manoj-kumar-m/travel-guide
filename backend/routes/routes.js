const express = require('express')
const router = express.Router()
const User = require('../models/User');
const bcrypt = require('bcrypt');
// const { cloudinary } = require('../models/cloudinary');


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
  
    
    User.findOne({ email: req.body.email },  (err, user) => {
      
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

// ------------------------------gallery--------------------------------


// router.get('/images', async (req, res) => {
//     const { resources } = await cloudinary.search
//         .expression('folder:travelguide')
//         .sort_by('public_id', 'desc')
//         .max_results(30)
//         .execute();

//     const publicIds = resources.map((file) => file.public_id);
//     res.send(publicIds);
// });



// router.post('/upload', async (req, res) => {
//     try {
//         console.log(req.body.data)
//         const fileStr = req.body.data;
//         const uploadResponse = await cloudinary.uploader.upload(fileStr, {
//             upload_preset: 'travelguide',
//         });
//         console.log(uploadResponse);
//         res.json({ message: 'Successfully Uploaded' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ err: 'Something went wrong' });
//     }
// });



module.exports = router

 





