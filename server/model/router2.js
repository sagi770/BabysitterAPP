const express = require('express');
const route2 = express.Router()
const { Babysitter } = require('./model');
const mongoose =require("mongoose");

route2.get('/create-user2', (req, res) => {
    // let {name, phone, password} = req.body.newUser
    
    const babysitter = new Babysitter({
        users:{name:'1', phone:'5', password:'4'}
    });

    babysitter.save()
        .then(babysitter => {
            res.json(babysitter);
        }).catch(err => {
            // const errObject = JSON.parse(err)
            console.error(err);
            const { errmsg } = err
            res.status(500).json({ message: 'Route2 -> Error on add new babysitter ',errmsg })
        });
});



module.exports = {route2}