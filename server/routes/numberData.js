const express = require("express");
const router = express.Router();
const db = require('../models');

router.use(express.urlencoded({extended: false})) // scrape email and pwd frm request header 
router.use(express.json())  //req.body


router.post('/reportedNumbers', async(req, res) => {
    
    let userID = req.body.userID
    let Number = req.body.Number
    let isScam = req.body.isScam
    let Comments = req.body.Comments

    try {
        let newNumberEntry = await db.reportedNumbers.create({userID, Number, isScam, Comments})

        let records = await db.reportedNumbers.findAll({where: {userID}})

        res.json(records)

    } catch (error) {

        console.log(error)

        res.json({error:error})
    }

})
    
router.get('/profileResults', async(req, res) => {
    
    let userID = req.body.userID

    try {

        let records = await db.reportedNumbers.findAll({where: {userID}})

        res.json(records)

    } catch (error) {

        console.log(error)

        res.json({error:error})
    }

})

router.post('/showNumber', async(req, res) => {
    
    let Number = req.body.number

    console.log(req.body)

    console.log(Number)

    try {

        let records = await db.reportedNumbers.findAll({where: {Number}})

        console.log(records)

        res.json(records)

    } catch (error) {

        console.log(error)

        res.json({error:error})
    }

})


module.exports=router