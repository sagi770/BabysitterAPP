const express                           = require('express');
const viewRoute                         = express.Router()
const { Babysitter, Parent, HourList }  = require('./model');

viewRoute.get('/:id', (req, res)=>{
    const phone = '08770770';
    Babysitter.find({phone:phone})
    .then(user=>{
        res.json(user)
    }).catch(err=>console.log(err))
})

module.exports = {viewRoute}