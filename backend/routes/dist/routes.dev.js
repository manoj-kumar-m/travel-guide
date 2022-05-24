"use strict";

var express = require('express');

var router = express.Router();

var User = require('../models/User');

var bcrypt = require('bcrypt'); // const { cloudinary } = require('../models/cloudinary');
//--------------------------register--------------------------


router.post('/register', function _callee(req, res) {
  var saltPassword, securePassword, secureConfirmPassword;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 2:
          saltPassword = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, saltPassword));

        case 5:
          securePassword = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.confirmPassword, saltPassword));

        case 8:
          secureConfirmPassword = _context.sent;
          User.findOne({
            email: req.body.email,
            usename: req.body.username
          }, function (err, user) {
            if (user) {
              res.send({
                message: "User Already registered"
              });
            } else {
              var _user = new User({
                email: req.body.email,
                username: req.body.username,
                phoneno: req.body.phoneno,
                password: securePassword,
                confirmPassword: secureConfirmPassword
              });

              _user.save(function (err) {
                if (err) {
                  res.send(err);
                } else {
                  res.send({
                    message: "Successfully Registered",
                    user: _user
                  });
                }
              });
            }
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}); // -----------------------login-----------------------------------

router.post('/login', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          User.findOne({
            email: req.body.email
          }, function (err, user) {
            if (user) {
              bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result) {
                  res.send({
                    message: "Login Successful",
                    user: user
                  });
                } else {
                  res.send({
                    message: "Incorrect Password"
                  });
                }
              });
            } else {
              res.send({
                message: "User Not Registered"
              });
            }
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // ------------------------------gallery--------------------------------
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

module.exports = router;