const express = require('express')
const router = express.Router()
const userModel = require('../DB/signupDB')
const itemModel = require('../DB/itemDB')
router.get('/apide', (req, res) => {
    const data = { d: "Hello Dev maurya" }
    res.send(data)
})

router.get('/recent', async(req, res) => {
    const itemdata = await itemModel.find({}).limit(4).exec()
    // const itemdata = await itemModel.find({}).sort({ _id: -1 }).limit(3).exec()
    if(itemdata){
        console.log(JSON.stringify(itemdata))
        res.send(JSON.stringify(itemdata))
    }
    else{
        console.log('error in fetching data items.')
    }
})

router.post('/registerdata', async (req, res) => {
    var data = { d: 'Done', redirectUrl: '/login' };
    res.send(data);
    console.log(req.body);
    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    const isSave = await newUser.save()
    if (isSave) {
        console.log('Saved in DB')
    }
    else {
        console.log('error in saving the data')
    }
    res.end()
});


module.exports = router