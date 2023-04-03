const express = require('express');
const router = express.Router();
const eventSchema = require('../../models/EventSchema');
const mongoose = require('mongoose')
const multer = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + ".png")
    }
})
var upload = multer({ storage: storage })
router.post("/addevent", upload.single('file'), (req, res, next) => {

    try {
        if (req.body.isStanding === 'true') {
            const newevent = new eventSchema({
                _id: new mongoose.Types.ObjectId(),
                eventName: req.body.eventName,
                eventDate: req.body.eventDate,
                location: req.body.location,
                eventImageUrl: req.file.path,
                eventDetails: req.body.eventDetails,
                standingPrice: req.body.standingPrice,
                isStanding: true
            });
            newevent
                .save()
                .then((result) => res.status(201).json({
                    message: "Event Created"
                }))
                .catch((err) => {
                    res.status(500).json({
                        error: err
                    })
                })
        }
        else {
            const newevent = new eventSchema({
                _id: new mongoose.Types.ObjectId(),
                eventName: req.body.eventName,
                eventDate: req.body.eventDate,
                location: req.body.location,
                eventImageUrl: req.file.path,
                eventDetails: req.body.eventDetails,
                vvip: {
                    price: req.body.vvipPrice,
                    maxSeat: req.body.vvipMaxSeat
                },
                leftWing: {
                    price: req.body.leftWingPrice,
                    maxSeat: req.body.leftWingMaxSeat
                },
                rightWing: {
                    price: req.body.rightWingPrice,
                    maxSeat: req.body.rightWingMaxSeat,
                },
            });
            newevent
                .save()
                .then((result) => res.status(201).json({
                    message: "Event Created"
                }))
                .catch((err) => {
                    res.status(500).json({
                        error: err
                    })
                })
        }


    } catch (error) {
        res.status(206).json({

            message: "Invalid credentials"
        })
    }
})

router.get('/allevents', (req, res, next) => {
    try {
        eventSchema.find({})
            .exec()
            .then(doc => {
                if (doc) {
                    res.status(302).json({
                        doc
                    })
                }
                else {
                    res.status(206).json({
                        message: "No Event Found"
                    })
                }
            })
    } catch (error) {
        res.status(204).json({
            message: "No Event Found"
        })
    }
});


router.get('/upcomingevents', (req, res, next) => {
    const currentDate = new Date();
    try {
        eventSchema.find({
            eventDate: {
                $gte: currentDate.toISOString().slice(0, 10)
            }
        })
            .exec()
            .then(doc => {
                if (doc) {
                    res.status(302).json({
                        doc
                    })
                }
                else {
                    res.status(206).json({
                        message: "No Event Found"
                    })
                }
            })
    } catch (error) {
        res.status(204).json({
            message: "No Event Found"
        })
    }
})


router.get('/pastevents', (req, res, next) => {
    const currentDate = new Date();
    try {
        eventSchema.find({
            eventDate: {
                $lt: currentDate.toISOString().slice(0, 10)
            }
        })
            .exec()
            .then(doc => {
                if (doc) {
                    res.status(302).json({
                        doc
                    })
                }
                else {
                    res.status(206).json({
                        message: "No Event Found"
                    })
                }
            })
    } catch (error) {
        res.status(204).json({
            message: "No Event Found"
        })
    }
})

router.get('/ongoingevent', (req, res, next) => {
    const currentDate = new Date();
    try {
        eventSchema.find({
            eventDate: {
                $eq: currentDate.toISOString().slice(0, 10)
            }
        })
            .exec()
            .then(doc => {
                if (doc) {
                    res.status(302).json({
                        doc
                    })
                }
                else {
                    res.status(206).json({
                        message: "No Event Found"
                    })
                }
            })
    } catch (error) {
        res.status(204).json({
            message: "No Event Found"
        })
    }
})

router.get('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        eventSchema.findById(id)
            .exec()
            .then((doc => {
                if (doc) {
                    res.status(320).json({
                        doc
                    })
                }
                else {
                    res.status(206).json({
                        message: "No Event Found"
                    })
                }
            }))
    } catch (error) {
        res.status(404).status({
            message: "Not Found"
        })
    }
});

router.patch('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const neweventDetails = {};
        for (const i of req.body) {
            neweventDetails[i.propName] = i.value;
        }
        // console.log(neweventDetails);
        eventSchema.findByIdAndUpdate(id, { $set: neweventDetails })
            .exec()
            .then(doc => {
                res.status(200).json({
                    message: "Event Successfully Updated",
                    doc
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })

    } catch (error) {
        res.status(404).status({
            message: "Not Found"
        })
    }
})

router.delete('/:id', (req, res, next) => {
    try {
        eventSchema.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.status(401).json({
                    message: "Successfully removed"
                })
            } else {
                res.status(500).json({
                    message: "Invalid Credentials"
                })
            }
        })
    } catch (error) {
        res.status(404).status({
            message: "Not Found"
        })
    }
})

module.exports = router;