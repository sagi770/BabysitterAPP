const express = require('express');
const route = express.Router()
const { Babysitter } = require('./model');
const mongoose =require("mongoose");

route.get('/', (req, res) => {
    
            res.json('Babysitters');
        })



route.get('/babysitter', (req, res) => {
    Babysitter.find()
        .then(Babysitters => {
            res.json(Babysitters);
        }).catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error on get all Babysitters' })
        })
});
route.post('/babysitter/create-user', (req, res) => {
    let {name, phone, password} = req.body.newUser
    

    const babysitter = new Babysitter({
        users:{
            name: name,
             phone: phone,
              password: password
        }
    });

    babysitter.save()
        .then(babysitter => {
            res.json(babysitter);
        }).catch(err => {
            console.error(err);
            res.status(500).json({ message: 'Error on add new babysitter' })
        });

    
});
route.get('/babysitter/create-user', (req, res) => {
    const {phone, password } = req.body
    Babysitter.find({
        users:{
            phone: "070770770"
        }
    })
    .then(doc=>{
        console.log(doc)
    }).catch(err=>console.log(err))
})


module.exports = {route}