const express = require("express");
const router = express.Router();
const jwt = require('../../middleware/jwtAssign');
const User = require('../../models/user')

router.post("/signUp", (req, res, next) => {
    User.find({ email: req.body.email }).exec().then(user => {
        if (user.length<1 && req.body.password === req.body.confirmPassword) {
            let newUser = new User();
            newUser.email = req.body.email;
            newUser.name = req.body.name;
            newUser.phone = req.body.phone;
            newUser.setPassword(req.body.password);
            newUser
                .save()
                .then(() => {
                    let token = jwt.generateJWT({email:req.body.email, phone:req.body.phone}); // Generate the token, so that user can be validate on later process
                    res.cookie('token', token);
                    res.status(201).json({ "message": "account created" })
                })
                .catch((err) => {
                    if(err.code===11000)
                        res.status(400).json({ "message": "Already exist", "value": err['keyValue']});
                    else
                        res.status(400).json({ "message": err.message});
                });
        }
        else {
            res.status(400).json({ "message": "Something is wrong" })
        }
    }).catch(err=>{
        res.status(500).json({ message: err.message });
    });

});

router.post("/signIn", (req, res, next) => {
    // console.log(req.body)
    User.findOne({ email: req.body.email })
    .exec()
        .then((user) => {
            if (user !== null && user.validPassword(req.body.password)) {
                let token = jwt.generateJWT({email:req.body.email, phone:req.body.phone}); // Generate the token, so that user can be validate on later process
                res.cookie('token', token);
                res.status(201).json({message:"logged in"})
            }
            else
                res.status(400).json({ "message": "User or Password incorrect" })
                
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
});

module.exports = router;